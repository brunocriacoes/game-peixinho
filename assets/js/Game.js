export default class Game {
    debug(State) {
        State.game.ctx.font = "12px Arial";
        State.game.ctx.fillText(`Player X: ${State.player.x} Y: ${State.player.x}`, 10, 20);
        State.game.ctx.fillText(`click X: ${State.click.x} Y: ${State.click.y}`, 10, 40);
    }
    render( fnc, State, debug = false ) {
        const render = () => {
            State.game.ctx.fillStyle = "gray";
            State.game.ctx.fillRect(0, 0, State.screen.width, State.screen.height);
            State.game.ctx.clearRect(0, 0, State.screen.width, State.screen.height);
            if(debug) {
                this.debug(State)
            }
            fnc()
            requestAnimationFrame(render)
        }
        render()
    }
}