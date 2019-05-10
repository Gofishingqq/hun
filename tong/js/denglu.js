class Login{
    constructor(){
        this.user = document.querySelector("#text");
        this.pass = document.querySelector("#pwd");
        this.btn = document.querySelector("#btn");

        this.init();
        this.getData();
    }
    init(){
        var that = this;
        this.btn.onclick = function(){
            that.yanzheng();
        }
    }
    getData(){
        this.abc = localStorage.getItem("abc");
        // 读取localStorage，如果有就解析成数组，如果没有就给一个空数组，方便操作
        if(this.abc == null){
            this.abc = [];
        }else{
            this.abc = JSON.parse(this.abc)
        }
    }
    yanzheng(){
        for(var i=0;i<this.abc.length;i++){
            if(this.abc[i].user == this.user.value && this.abc[i].pass == this.pass.value){

                this.abc[i].onoff = 1;

                localStorage.setItem("abc",JSON.stringify(this.abc))
                
                    location.href = "http://localhost/tong/homePage.html";
                return;
            }
        }
        alert("用户名密码不符");
    }
}


new Login();