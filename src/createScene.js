import eventify from 'ngraph.events';

import Element from './Element';
import onClap from './clap';
import {mat4, vec4, quat, vec3} from 'gl-matrix';
import createMapCamera from './createMapCamera';
import ViewMatrix from './ViewMatrix';

export default function createScene(canvas, options) {
  var width;
  var height;
  if (!options) options = {};

  var pixelRatio = options.devicePixelRatio || window.devicePixelRatio;
  var wglContextOptions = options.wglContext;

  var gl = canvas.getContext('webgl', wglContextOptions) || canvas.getContext('experimental-webgl', wglContextOptions);

  gl.enable(gl.BLEND);
  gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
  gl.clearColor(0, 0, 0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT)

  var frameToken = 0;
  var sceneRoot = new Element();

  var view = new ViewMatrix();
  var projection = mat4.create();
  var inverseProjection = mat4.create();
  var fov = options.fov === undefined ? Math.PI * 45 / 180 : options.fov;
  var near = options.near === undefined ? 0.01 : options.near;
  var far = options.far === undefined ? Infinity : options.far;

  var drawContext = { 
    width: window.innerWidth,
    height: window.innerHeight,
    pixelRatio,
    canvas,
    projection,
    view,
    fov,
    center: [0, 0, 0],
 };

  updateCanvasSize();

  var api = eventify({
    appendChild,
    getSceneCoordinate,
    getClientCoordinate,
    getTransform,
    getRoot,
    getGL,
    removeChild,
    setViewBox,
    setClearColor,
    getClearColor,
    clear,
    dispose,
    renderFrame,

    getPixelRatio,
    setPixelRatio,

    getCamera,
    setCamera,
    getDrawContext
  });


  sceneRoot.bindScene(api);
  let cameraController = (options.camera || createMapCamera)(api, drawContext);

  var disposeClick;
  listenToEvents();

  renderFrame();

  return api;

  function getPixelRatio() {
    return pixelRatio;
  }

  function getDrawContext() {
    return drawContext;
  }

  function setPixelRatio(newPixelRatio) {
    pixelRatio = newPixelRatio;
    drawContext.pixelRatio = pixelRatio;
    updateCanvasSize();
  }

  function getGL() {
    return gl;
  }

  function getRoot() {
    return sceneRoot;
  }

  function setCamera(createCamera) {
    if (cameraController) {
      cameraController.dispose();
    }
    cameraController = createCamera(api, drawContext);
  }

  function getCamera() {
    return cameraController;
  }

  function getTransform() {
    return sceneRoot.model;
  }

  function setClearColor(r, g, b, a) {
    gl.clearColor(r, g, b, a)
  }

  function getClearColor() {
    // [r, g, b, a]
    return gl.getParameter(gl.COLOR_CLEAR_VALUE);
  }

  function listenToEvents() {
    canvas.addEventListener('mousemove', onMouseMove);

    disposeClick = onClap(canvas, onMouseClick, this);

    window.addEventListener('resize', onResize, true);
  }

  function dispose() {
    canvas.removeEventListener('mousemove', onMouseMove);


    if (disposeClick) disposeClick();

    window.removeEventListener('resize', onResize, true);

    cameraController.dispose();
    sceneRoot.dispose();

    if (frameToken) {
      cancelAnimationFrame(frameToken);
      frameToken = 0;
    }
  }

  function onResize() {
    updateCanvasSize();
  }

  function updateCanvasSize() {
    if (options.size) {
      // Fixed size canvas doesn't update. We assume CSS does the scaling.
      width = canvas.width = options.size.width;
      height = canvas.height = options.size.height;
    } else {
      width = canvas.width = canvas.offsetWidth * pixelRatio;
      height = canvas.height = canvas.offsetHeight * pixelRatio;
    }

    gl.viewport(0, 0, width, height);

    drawContext.width = width;
    drawContext.height = height;
    sceneRoot.worldTransformNeedsUpdate = true;
    mat4.perspective(projection, fov, width/height, near, far);

    inverseProjection = mat4.invert(mat4.create(), projection);
    renderFrame();
  }

  function onMouseClick(e) {
    var p = getSceneCoordinate(e.clientX, e.clientY);
    if (!p) return; // need to zoom in!

    api.fire('click', {
      originalEvent: e,
      sceneX: p.x,
      sceneY: p.y,
    })
  }

  function onMouseMove(e) {
    var p = getSceneCoordinate(e.clientX, e.clientY);
    if (!p) return;

    api.fire('mousemove', {
      originalEvent: e,
      x: p.x,
      y: p.y,
      z: p.z,
    });
  }

  function getSceneCoordinate(clientX, clientY) {
    // TODO: This is not optimized by any means.
    var dpr = api.getPixelRatio();
    let clipSpaceX = (dpr * clientX / width) * 2 - 1;
    let clipSpaceY = (1 - dpr * clientY / height) * 2 - 1;

    let mx = vec4.transformMat4([], [clipSpaceX, clipSpaceY, 0, 1], inverseProjection);
    mx[0] /= mx[3]; mx[1] /= mx[3]; mx[2] /= mx[3]; mx[3] /= mx[3];
    vec4.transformMat4(mx, mx, view.cameraWorld);
    mx[0] /= mx[3]; mx[1] /= mx[3]; mx[2] /= mx[3]; mx[3] /= mx[3];
    vec3.sub(mx, mx, view.position);
    vec3.normalize(mx, mx);
    var targetZ = 0;

    // TODO: This is likely not going to work for all cases.
    var distance = (targetZ - view.position[2]) / mx[2];
    if (mx[2] > 0) {
      // ray shoots backwards.

    }

    vec4.scaleAndAdd(mx, view.position, mx, distance)

    return {
      x: mx[0],
      y: mx[1],
      z: mx[2]
    }
  }

  function getClientCoordinate(sceneX, sceneY, sceneZ = 0) {
    // TODO: this is not optimized either.
    var mvp = mat4.multiply(mat4.create(), projection, view.matrix)
    mat4.multiply(mvp, mvp, sceneRoot.model);
    var coordinate = vec4.transformMat4([], [sceneX, sceneY, sceneZ, 1], mvp);

    var dpr = api.getPixelRatio();
    var x = width * (coordinate[0]/coordinate[3] + 1) * 0.5/dpr;
    var y = height * (1 - (coordinate[1]/coordinate[3] + 1) * 0.5)/dpr;
    return {x, y};
  }

  function setViewBox(rect) {
    const dpr = drawContext.pixelRatio;
    const nearHeight = dpr * Math.max((rect.top - rect.bottom)/2, (rect.right - rect.left) / 2);
    const {position, rotation} = drawContext.view;
    position[0] = (rect.left + rect.right)/2;
    position[1] = (rect.top + rect.bottom)/2;
    position[2] = nearHeight / Math.tan(drawContext.fov / 2);
    quat.set(rotation, 0, 0, 0, 1);

    drawContext.view.update();
    if (cameraController.setViewBox) {
      cameraController.setViewBox(rect)
    }
  }

  function renderFrame(immediate) {
    if (immediate) {
      return frame();
    }

    if (!frameToken) frameToken = requestAnimationFrame(frame)
  }

  function frame() {
    gl.clear(gl.COLOR_BUFFER_BIT)
    drawContext.wasDirty = sceneRoot.updateWorldTransform();
    sceneRoot.draw(gl, drawContext);
    frameToken = 0;
  }

  function clear() {
    gl.clear(gl.COLOR_BUFFER_BIT)
  }

  function appendChild(child, sendToBack) {
    sceneRoot.appendChild(child, sendToBack);
  }

  function removeChild(child) {
    sceneRoot.removeChild(child)
  }
}
