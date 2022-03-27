const app = document.getElementById('js-app')
const $canvas = document.createElement('canvas')
const width =  800
const height =  500


export default {
    screen: {
        width: 800,
        height: 500
    },
    click: {
        x: width / 2,
        y: height / 2,
    },
    player: {
        x: width / 2,
        y: height / 2,
        size: 50
    },
    game: {
        status: true,
        speed: 50,
        score: 0,
        app,
        $canvas,
        ctx: $canvas.getContext('2d')
    }
}