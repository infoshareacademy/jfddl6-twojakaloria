class Game {
    constructor(container) {
        this.container = container
        this.items = []

        this.init()
    }
    init() {
        this.render()
        this.addItem()
    }
    render() {
        this.container.innerHTML = ''

        this.container.style.backgroundColor = 'red'
        this.container.style.height = '500px'
        this.container.style.width = '500px'

        this.items.forEach((item) => {
            this.renderItem(item)
        })

    }
    itemPosition() {
        const position = {
            x: Math.floor(Math.random() * 300),
            y: -5
        }
        return position
    }

    addItem() {
        const interval = setInterval(() => {
            this.items.push(this.itemPosition())
            this.render()
            if (this.items.length >= 5) {
                clearInterval(interval)
            }
        }, 1000)
    }

    renderItem(item) {

        const itemDiv = document.createElement('div')
        itemDiv.style.height = `30px`
        itemDiv.style.width = `30px`
        itemDiv.style.position = 'absolute'
        itemDiv.style.left = this.itemPosition().x
        itemDiv.style.backgroundColor = 'black'
        this.container.appendChild(itemDiv)
        itemDiv.style.top = `${item.y = item.y +5}px`

        const movingItem = setInterval(() => {
            itemDiv.style.top = `${item.y = item.y +5}px`
            if (itemDiv.style.top >= '500px') {
                clearInterval(movingItem)
                itemDiv.style.display = 'none'
            }
        }, 1000)



    }
}


const ourContainer = document.querySelector('.game-container')

const game = new Game(ourContainer)