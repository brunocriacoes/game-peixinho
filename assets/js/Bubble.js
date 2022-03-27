export default class Bubble {
    render(State) {
        this.update(State);
        this.draw(State);
    }
    draw(State) {
        State.bubbles.forEach(b => {            
            State.game.ctx.beginPath();
            State.game.ctx.arc(b.x, b.y, 30, 0, 2 * Math.PI);
            State.game.ctx.stroke();
        });
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    update(State) {
        State.bubbles = State.bubbles.filter( b => b.y > - 50)
        let toPrint = State.bubbleMax - State.bubbles.length
        for (let i = 0; i < toPrint; i++) {
            State.bubbles.push({
                x: this.getRandomInt(0, State.screen.width),
                y: this.getRandomInt(580, 1200)
            })
        }
        State.bubbles = State.bubbles.map( b => {
            b.y--
            return b
        })

    }
}