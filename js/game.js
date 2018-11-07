
class Game {
    constructor(container) {
        this.container = container
        this.items = []
        this.itemPosition = {
            x: 300,
            y: 200
        }

        this.init()
    }
    init() {
        this.render()
    }
    render() {
        this.container.innerHTML = ''

        this.container.style.backgroundColor = 'red'
        this.container.style.height = '500px'
        this.container.style.width =  '500px'

        this.addItem()
    }

    addItem() {
        const itemDiv = document.createElement('div')
        itemDiv.style.height = `30px`
        itemDiv.style.width = `30px`
        itemDiv.style.position = 'absolute'
        itemDiv.style.top = this.itemPosition.y + 'px'
        itemDiv.style.left = this.itemPosition.x + 'px'
        itemDiv.style.backgroundColor = 'black'
        this.container.appendChild(itemDiv)

    }
    itemMove() {

    }

}


const ourContainer = document.querySelector('.game-container')

const game = new Game(ourContainer)


