const app = Vue.createApp({
    data(){
        return{
            title: 'VUEEE',
            author: 'Bogdan Terzea',
            age: 24
        }
    },
    methods: {
        changeTitle() {
            this.title = 'New VUE'
        }
    }
  })
  
  app.mount('#app')