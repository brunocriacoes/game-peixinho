export default class Player {
    constructor() {

    }
    update(State) { 
        if( State.player.x < State.click.x ) State.player.x = State.player.x++ + 6
        if( State.player.x > State.click.x) State.player.x = State.player.x-- - 6
        if( State.player.y < State.click.y ) State.player.y = State.player.y++ + 6
        if( State.player.y > State.click.y ) State.player.y = State.player.y-- - 6
    }
    draw(State) {
        State.game.ctx.beginPath();
        State.game.ctx.arc(State.player.x, State.player.y, State.player.size, 0, 2 * Math.PI);
        State.game.ctx.stroke();
    }
    render(State) {
        this.update(State)
        this.draw(State)
    }
}