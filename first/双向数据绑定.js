new Vue({
    el:"#vue-app",
    data:{
        name:"hello",
        age:""
        
    },
    methods:{
        logname:function(){
            this.name = this.$refs.name.value;
            //console.log(this.$refs.name.value);
        },
        logage:function(){
            this.age = this.$refs.age.value;
        } 
    }
});
