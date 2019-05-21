var one = new Vue({
    el:"#vue-app-one",
    data:{
        title:"app one 的内容"
    },
    methods:{
        
    },
    computed:{
        greet:function(){
            return "hellow one";
        }
    }
});

var two = new Vue({
    el:"#vue-app-two",
    data:{
        title:"app two 的内容"
    },
    methods:{
        changeTitle:function(){
            one.title="已经改名";//从这个vue改变另一个的内容
        }
    },
    computed:{
        greet:function(){
            return "hellow two";
        }
    }
});

two.title="app two 也改名了";//直接从外围改two的title