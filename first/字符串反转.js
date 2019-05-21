var one = new Vue({
    el:"#vue-app",
    data:{
        message: 'Runoob!'
    },
    methods: {
        reverseMessage: function () {
          this.message = this.message.split('').reverse().join('')
        }
      }
   
});