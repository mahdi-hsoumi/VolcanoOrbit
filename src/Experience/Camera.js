import * as THREE from 'three'
import Experience from './Experience.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default class Camera {
    constructor() {
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas
        this.time = this.experience.time

        this.cameraGroup = new THREE.Group();
        this.scene.add(this.cameraGroup);

        this.setInstance()
        this.setControls()

        this.cursor = {
            x: 0,
            y: 0,
        };

        window.addEventListener("mousemove", (event) => {
            this.cursor.x = event.clientX / this.sizes.width - 0.5;
            this.cursor.y = event.clientY / this.sizes.height - 0.5;
        });
    }

    setInstance() {
        this.instance = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 100)
        this.instance.position.set(0, 0.2, 3)
        this.cameraGroup.add(this.instance)
    }

    setControls() {
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true
    }

    resize() {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update() {
        this.controls.update()
        const parallaxX = this.cursor.x * 0.3;
        const parallaxY = -this.cursor.y * 0.3;
        this.cameraGroup.position.x +=
            (parallaxX - this.cameraGroup.position.x) * 2 * this.time.delta;
        this.cameraGroup.position.y +=
            (parallaxY - this.cameraGroup.position.y) * 2 * this.time.delta;
    }
}