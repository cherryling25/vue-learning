new Vue({
    el:"#vue-app",
    data:{
        age:18,
        x:0,
        y:0
    },
    methods:{
        add:function(inc){
            this.age += inc;
        },
        subtract:function(dec){
            this.age -= dec;
        },
        updataXY:function(event){
            //console.log(event);
            this.x=event.offsetX;
            this.y=event.offsetY;
        }
    }
});