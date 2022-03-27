export default class Player {
    constructor() {

    }
    update(State) {
        if (State.player.x < State.click.x) State.player.x = State.player.x++ + 6
        if (State.player.x > State.click.x) State.player.x = State.player.x-- - 6
        if (State.player.y < State.click.y) State.player.y = State.player.y++ + 6
        if (State.player.y > State.click.y) State.player.y = State.player.y-- - 6
    }
    draw(State) {
        State.game.ctx.beginPath();
        State.game.ctx.arc(State.player.x, State.player.y, State.player.size, 0, 2 * Math.PI);
        State.game.ctx.stroke();
    }
    render(State) {
        this.update(State)
        this.collisionBubble(State)
        this.draw(State)
    }
    collisionBubble(State) {
        State.bubbles = State.bubbles.filter(b => {
            let collisionX = (b.x + 60) - (State.player.x + 100) < 10
            let collisionY = (b.y + 60) - (State.player.y + 100) < 10
            if( collisionX && collisionY ) {
                State.game.score++
               return false
            }
            return true
        });
        

    }
}