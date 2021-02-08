const app = Vue.createApp({
    data(){
        return{
            title: 'VUEEE',
            author: 'Bogdan Terzea',
            age: 24
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        }
    }
  })
  
  app.mount('#app')