const app = Vue.createApp({
    data(){
        return{
            showDetails: true,
            title: 'VUEEE',
            author: 'Bogdan Terzea',
            age: 24
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        },
        toggleShowDetails() {
            this.showDetails = !this.showDetails
        }
    }
  })
  
  app.mount('#app')