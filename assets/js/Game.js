export default class Game {
    debug(State) {
        State.game.ctx.font = "12px Arial";
        State.game.ctx.fillText(`Player X: ${State.player.x} Y: ${State.player.x}`, 10, 20);
        State.game.ctx.fillText(`click X: ${State.click.x} Y: ${State.click.y}`, 10, 40);
        State.game.ctx.fillText(`Bubbles: ${State.bubbles.length}`, 10, 60);
        State.game.ctx.fillText(`score: ${State.game.score}`, 10, 80);
    }
    render(fnc, State, debug = false) {
        const render = () => {
            State.game.ctx.fillStyle = "gray";
            State.game.ctx.fillRect(0, 0, State.screen.width, State.screen.height);
            State.game.ctx.clearRect(0, 0, State.screen.width, State.screen.height);
            if (debug) {
                this.debug(State)
            }
            fnc()
            requestAnimationFrame(render)
        }
        render()
    }
}