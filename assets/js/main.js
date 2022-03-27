import State from './State.js'
import Game from './Game.js'
import Player from './Player.js'
import Contros from './Contros.js'
import Bubble from './Bubble.js'

globalThis.State = State

State.game.$canvas.width = State.screen.width
State.game.$canvas.height = State.screen.height
State.game.app.append(State.game.$canvas)

new Contros(State)
const GameLoop = new Game()
const Person = new Player()
const Bolls = new Bubble()

GameLoop.render(() => {
    if (State.game.status) {
        Person.render(State)
        Bolls.render(State)
    }
}, State, true)