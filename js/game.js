class Game {
    constructor(container) {
        this.container = container
        this.items = [{
                x: 470,
                y: -5
            },
            {
                x: 220,
                y: -5
            }
        ]

        this.init()
    }
    init() {
        this.render()
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
    renderItem(item) {

        const itemDiv = document.createElement('div')
        itemDiv.style.height = `30px`
        itemDiv.style.width = `30px`
        itemDiv.style.position = 'absolute'
        itemDiv.style.left = item.x + 'px'
        itemDiv.style.backgroundColor = 'black'
        this.container.appendChild(itemDiv)
        itemDiv.style.top = `${item.y = item.y +5}px`

        const movingItem = setInterval(() => {
            itemDiv.style.top = `${item.y = item.y +5}px`
            if (itemDiv.style.top === '500px') {
                clearInterval(movingItem)
                itemDiv.style.display = 'none'
            }
        }, 10)



    }
}


const ourContainer = document.querySelector('.game-container')

const game = new Game(ourContainer)