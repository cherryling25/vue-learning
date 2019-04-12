Vue.component("greeting",{
    template:
    `<p>{{name}}: Hello, everybody!
    <button v-on:click="changeName">改名</button>
    </p>`,      //使用 `` 就可以实现换行了
    data:function(){
        return {
            name:"ling"
        }       //每一次都返回一个对象，只在一定区域更改
    },
    methods:{
        changeName:function(){
            this.name="dong";
        }
    }
})

new Vue({
    el:"#vue-app-one"
   
});

new Vue({
    el:"#vue-app-two"
});