import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Environment {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.debug = this.experience.debug

        // Debug
        if (this.debug.active) {
            this.debugFolder = this.debug.ui.addFolder('environment')
        }

        // this.setSunLight()
        // this.setPointLightWallsTop()
        // this.setPointLightWallsBottom()
        // this.setPointLightOrbit()
    }



    setPointLightWallsTop() {
        this.pointLightWallsTp = new THREE.PointLight(0xff0000, 4, 100);
        this.pointLightWallsTp.position.set(-0, 1.5, 0);
        this.scene.add(this.pointLightWallsTp)
        this.scene.add(this.pointLightWallsTp)
        this.pointLightWallsTpHelper = new THREE.PointLightHelper(this.pointLightWallsTp, 0.2);
        // this.scene.add(this.pointLightWallsTpHelper);

        // Debug
        if (this.debug.active) {
            this.debugFolder
                .add(this.pointLightWallsTp, 'intensity')
                .name('lavaLightIntensity')
                .min(0)
                .max(10)
                .step(0.001)

            this.debugFolder
                .add(this.pointLightWallsTp.position, 'x')
                .name('lavaLightX')
                .min(- 5)
                .max(5)
                .step(0.001)

            this.debugFolder
                .add(this.pointLightWallsTp.position, 'y')
                .name('lavaLightY')
                .min(- 5)
                .max(5)
                .step(0.001)

            this.debugFolder
                .add(this.pointLightWallsTp.position, 'z')
                .name('lavaLightZ')
                .min(- 5)
                .max(5)
                .step(0.001)
        }
    }
    setPointLightWallsBottom() {
        this.pointLightWallsBottom = new THREE.PointLight(0xff0000, 1, 100);
        this.pointLightWallsBottom.position.set(3, -1.5, 0);
        this.scene.add(this.pointLightWallsBottom)
        this.scene.add(this.pointLightWallsBottom)
        this.pointLightWallsBottomHelper = new THREE.PointLightHelper(this.pointLightWallsBottom, 0.2);
        // this.scene.add(this.pointLightWallsBottomHelper);

        // Debug
        if (this.debug.active) {
            this.debugFolder
                .add(this.pointLightWallsBottom, 'intensity')
                .name('lavaLightIntensity')
                .min(0)
                .max(10)
                .step(0.001)

            this.debugFolder
                .add(this.pointLightWallsBottom.position, 'x')
                .name('lavaLightX')
                .min(- 5)
                .max(5)
                .step(0.001)

            this.debugFolder
                .add(this.pointLightWallsBottom.position, 'y')
                .name('lavaLightY')
                .min(- 5)
                .max(5)
                .step(0.001)

            this.debugFolder
                .add(this.pointLightWallsBottom.position, 'z')
                .name('lavaLightZ')
                .min(- 5)
                .max(5)
                .step(0.001)
        }
    }
    setPointLightOrbit() {
        this.pointLightOrbit = new THREE.PointLight(0xffffff, 0.2, 100);
        this.pointLightOrbit.position.set(0, 0, 0);
        this.scene.add(this.pointLightOrbit)
        this.scene.add(this.pointLightOrbit)
        this.pointLightOrbitHelper = new THREE.PointLightHelper(this.pointLightOrbit, 0.2);
        // this.scene.add(this.pointLightOrbitHelper);

        // Debug
        if (this.debug.active) {
            this.debugFolder
                .add(this.pointLightOrbit, 'intensity')
                .name('orbitLightIntensity')
                .min(0)
                .max(10)
                .step(0.001)

            this.debugFolder
                .add(this.pointLightOrbit.position, 'x')
                .name('orbitLightX')
                .min(- 5)
                .max(5)
                .step(0.001)

            this.debugFolder
                .add(this.pointLightOrbit.position, 'y')
                .name('orbitLightY')
                .min(- 5)
                .max(5)
                .step(0.001)

            this.debugFolder
                .add(this.pointLightOrbit.position, 'z')
                .name('orbitLightZ')
                .min(- 5)
                .max(5)
                .step(0.001)
        }
    }
}