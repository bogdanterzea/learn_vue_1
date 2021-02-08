const app = Vue.createApp({
    data(){
        return{
            showDetails: true,
            title: 'VUEEE',
            author: 'Bogdan Terzea',
            age: 24,
            x: 0,
            y: 0
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
    }
  })
  
  app.mount('#app')