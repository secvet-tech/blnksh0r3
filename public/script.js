//here we get the canvas
const canvas = document.getElementById("renderCanvas");
//create BABYLON GAME ENGINE!
const engine = new BABYLON.Engine(canvas, true);
const createScene = function () {
const scene = new BABYLON.Scene(engine);
const skybox = BABYLON.MeshBuilder.CreateBox("skyBox", { size: 1000.0 }, scene);
const skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
skyboxMaterial.backFaceCulling = false;
skyboxMaterial.disableLighting = true;
skybox.material = skyboxMaterial;
skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("/image-assets/space", scene);
skybox.infiniteDistance = true;
const camera = new BABYLON.UniversalCamera("camera", 
new BABYLON.Vector3(0, 5, -10), scene);
camera.setTarget(BABYLON.Vector3.Zero());
camera.attachControl(canvas, true);
const light = new BABYLON.HemisphericLight("light",
new BABYLON.Vector3(0, 10, 0), scene);
light.intensity = 0.7;
const sphere = BABYLON.MeshBuilder.CreateSphere("sphere",
{diameter: 2, segments: 34}, scene);
sphere.position.y = 1;
const ground = BABYLON.MeshBuilder.CreateGround("ground",
{width: 144, height: 377}, scene);
let isPointerDown = false;
let startY = 5;
const scrollSensitivity = 0.01; 
scene.onPointerObservable.add((pointerInfo) => {
if(pointerInfo.type === BABYLON.PointerEventTypes.POINTERWHEEL) {
const event = pointerInfo.event;
camera.position.z += event.deltaY * 0.1;
};
});
scene.onPointerObservable.add((pointerInfo) => { 
if(pointerInfo.type === BABYLON.PointerEventTypes.POINTERDOWN) {
const event = pointerInfo.event;
// Inside your POINTERDOWN block:
const sphere = BABYLON.MeshBuilder.CreateSphere("greenOrb", { diameter: 2, segments:34 }, scene);

// Get the camera's forward vector (0,0,1) in local space and transform it to world space
const forward = camera.getDirection(BABYLON.Vector3.Forward());

// New Position = Camera Position + (Forward Vector * distance)
sphere.position = camera.position.add(forward.scale(10));

// Apply material...
const createGlowingSphere = () => {
    // 1. Get the point 10 units in front of the camera

    // 3. TODO: Apply the green emissive material
// Inside your createGlowingSphere function:

// 1. Create the material
const sphereMaterial = new BABYLON.StandardMaterial("sphereMat", scene);

// 2. Set the color (Red, Green, Blue)
sphereMaterial.emissiveColor = new BABYLON.Color3(0, 1, 0); // Pure bright green

// 3. Apply it to the sphere
sphere.material = sphereMaterial;
console.log("sphere created");
};
createGlowingSphere();
};
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

