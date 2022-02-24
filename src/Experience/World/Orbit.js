import * as THREE from 'three'
import Experience from '../Experience.js'
// import gsap from "gsap";

export default class Orbit {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time


        // Resource
        this.resource = this.resources.items.orbitModel

        this.setModel()
    }

    setModel() {
        this.model = this.resource.scene
        this.model.scale.set(2, 2, 2)
        const elemnts = [...this.model.children]

        this.materialWall = new THREE.MeshNormalMaterial({
            color: 0x4C4A4A,
            metalness: 1
        })
        this.materialOrbit = new THREE.MeshNormalMaterial({
            color: 0xffffff,
            roughness: 1
        })

        this.topWalls = elemnts[0].clone()
        this.topWalls.material = this.materialWall
        this.scene.add(this.topWalls)

        this.topOutSideWalls = elemnts[0].clone()
        this.topOutSideWalls.material = this.materialWall
        this.topOutSideWalls.scale.set(1.2, 1.2, 1.2)
        this.scene.add(this.topOutSideWalls)

        this.bottomWalls = elemnts[0].clone()
        this.bottomWalls.position.y = -0.2
        this.bottomWalls.rotation.z = Math.PI
        this.bottomWalls.material = this.materialWall
        this.scene.add(this.bottomWalls)

        this.bottomOutSideWalls = elemnts[0].clone()
        this.bottomOutSideWalls.position.y = -0.2
        this.bottomOutSideWalls.rotation.z = Math.PI
        this.bottomOutSideWalls.scale.set(1.2, 1.2, 1.2)
        this.bottomOutSideWalls.material = this.materialWall
        this.scene.add(this.bottomOutSideWalls)

        this.orbit1 = elemnts[1].clone()
        // this.orbit1.material = this.materialOrbit
        this.orbit1.scale.set(0.08, 0.08, 0.08)
        this.scene.add(this.orbit1)

        this.orbit2 = elemnts[1].clone()
        this.orbit2.scale.set(0.1, 0.1, 0.1)
        this.orbit2.rotation.z = Math.PI
        this.orbit2.material = this.materialOrbit
        this.scene.add(this.orbit2)

        this.orbit3 = elemnts[1].clone()
        this.orbit3.scale.set(0.15, 0.15, 0.15)
        this.orbit3.rotation.z = Math.PI / 2
        this.orbit3.material = this.materialOrbit
        this.scene.add(this.orbit3)


        this.particlesGeometry = new THREE.BufferGeometry();
        this.count = 5000;

        const positions = new Float32Array(this.count * 3);
        const colors = new Float32Array(this.orbit3count * 3);

        for (let index = 0; index < this.count; index++) {
            const i3 = index * 3;
            positions[i3] = (Math.random() - 0.5) * 5;
            positions[i3 + 1] = (Math.random() - 0.5) * 2;
            positions[i3 + 2] = (Math.random() - 0.5) * 5;

            colors[index] = Math.random();
            colors[index + 1] = Math.random();
            colors[index + 2] = Math.random();

        }
        this.particlesGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(positions, 3)
        );
        this.particlesGeometry.setAttribute(
            "color",
            new THREE.BufferAttribute(colors, 3)
        );

        // Material
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.01,
            sizeAttenuation: true,
            // color: 0xff0000,
            // map: particleTexture,
            transparent: true,
            // alphaTest: 0.001,
            // depthTest: false,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            // vertexColors: true,
        });

        // Points
        const particles = new THREE.Points(this.particlesGeometry, particlesMaterial);
        this.scene.add(particles);
    }
    update() {
        this.topWalls.position.y = (Math.sin(
            this.time.elapsed
        ) * 0.02) + 0.5;

        this.topWalls.rotation.y += this.time.elapsed * 0.00004


        this.topOutSideWalls.position.y = (Math.sin(
            (this.time.elapsed + 1.5)
        ) * 0.02) + 0.4;
        this.topOutSideWalls.rotation.y += this.time.elapsed * -0.00003

        this.bottomWalls.position.y = (Math.sin(
            (this.time.elapsed + 1.5)
        ) * 0.02) - 0.2;
        this.bottomWalls.rotation.y += this.time.elapsed * -0.00009

        this.bottomOutSideWalls.position.y = (Math.sin(
            (this.time.elapsed + 1.5)
        ) * 0.02) - 0.1;
        this.bottomOutSideWalls.rotation.y += this.time.elapsed * 0.00007

        this.orbit1.rotation.y += (this.time.elapsed * 0.003)
        this.orbit1.rotation.z += (this.time.elapsed * 0.003)

        this.orbit2.rotation.y += (this.time.elapsed * 0.004)
        this.orbit2.rotation.z += (this.time.elapsed * 0.004)

        this.orbit3.rotation.y += (this.time.elapsed * 0.005)
        this.orbit3.rotation.z += (this.time.elapsed * 0.005)


    }


}