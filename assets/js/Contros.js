export default class Contros {
    constructor(State) {
        
        
        State.game.$canvas.addEventListener('click', function(ev) {
            let fixWidth =  (window.innerWidth - State.game.$canvas.width) / 2
            let fixHeight =  (window.innerHeight - State.game.$canvas.height) / 2
            console.log({fixWidth,fixHeight})
            State.click.x = ev.x - fixWidth
            State.click.y = ev.y - fixHeight
        })
    }
}