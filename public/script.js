//here we get the canvas
const canvas = document.getElementById("renderCanvas");
//create BABYLON GAME ENGINE!
const engine = new BABYLON.Engine(canvas, true);
const createScene = function () {
const scene = new BABYLON.Scene(engine);
const camera = new BABYLON.UniversalCamera("camera", 
new BABYLON.Vector3(0, 3, -10), scene);
camera.setTarget(BABYLON.Vector3.Zero());
camera.attachControl(canvas, true);
//camera.maxZ = 0;
const light = new BABYLON.HemisphericLight("light",
new BABYLON.Vector3(0, 10, 0), scene);
light.intensity = 0.7;
const sphere = BABYLON.MeshBuilder.CreateSphere("sphere",
{diameter: 2, segments: 34}, scene);
sphere.position.y = 1;
const ground = BABYLON.MeshBuilder.CreateGround("ground",
{width: 144, height: 5}, scene);
let isPointerDown = false;
let startY = 0;
const scrollSensitivity = 0.08; 
scene.onPointerObservable.add((pointerInfo) => {
switch(pointerInfo.type) {
case BABYLON.PointerEventTypes.POINTERDOWN:
isPointerDown = true;
startY = pointerInfo.event.clientY;
break;

case BABYLON.PointerEventTypes.POINTERUP:
isPointerDown = false;
break;
}
});
return scene;
};
const scene = createScene(); 
engine.runRenderLoop(function() {
scene.render();
})
window.addEventListener("resize", function () {
engine.resize();
});
 
