const app = Vue.createApp({
    data() {
        return {
            showDetails: true,
            title: 'VUEEE',
            author: 'Bogdan Terzea',
            age: 24,
            books: [
                { title: 'Angels and demons', author: 'Dan Brown', img: 'images/DanBrown1.jpeg', isFavourite: false },
                { title: 'Inferno', author: 'Dan Brown', img: 'images/DanBrown2.jpeg', isFavourite: true },
                { title: 'Da Vinci Code', author: 'Dan Brown', img: 'images/DanBrown3.jpeg', isFavourite: false },
                { title: 'The lost key', author: 'Dan Brown', img: 'images/DanBrown4.jpeg', isFavourite: true }
            ],
            x: 0,
            y: 0,
            snowboardUrl: 'https://snowboardpro.ro/'
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        },
        toggleShowDetails() {
            this.showDetails = !this.showDetails
        },
        handleEvent(event) {
            console.log(event)
        },
        handleMousemove(event) {
            this.x = event.offsetX
            this.y = event.offsetY
        }
    },
    computed: {
        filtredBooks() {
            return this.books.filter((book) => book.isFavourite)
        }
    }
})
app.mount('#app')