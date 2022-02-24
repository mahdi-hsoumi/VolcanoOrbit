import Experience from '../Experience.js'
import Environment from './Environment.js'
// import Floor from './Floor.js'
// import Fox from './Fox.js'
import Orbit from './Orbit.js'

export default class World {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Wait for resources
        this.resources.on('ready', () => {
            // Setup
            // this.floor = new Floor()
            // this.fox = new Fox()
            this.environment = new Environment()
            this.orbit = new Orbit()
        })
    }

    update() {
        if (this.orbit)
            this.orbit.update()
    }
}