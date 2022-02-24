import EventEmitter from './EventEmitter.js'
import * as THREE from 'three'

export default class Time extends EventEmitter {
    constructor() {
        super()


        // Setup
        this.clock = new THREE.Clock();
        this.start = Date.now()
        this.current = this.start
        this.elapsed = 0
        this.delta = 16

        window.requestAnimationFrame(() => {
            this.tick()
        })
    }

    tick() {
        const currentTime = Date.now()
        this.delta = this.clock.getDelta();
        this.current = currentTime
        this.elapsed = this.clock.getElapsedTime();

        this.trigger('tick')

        window.requestAnimationFrame(() => {
            this.tick()
        })
    }
}