function Reg() {
    this.zhang = document.getElementById("zhang");
    this.user = document.getElementById("zhang");
    this.she = document.getElementById("she");
    this.pasd = document.getElementById("pasd");
    this.passd = document.getElementById("passd");
    this.obtn = document.getElementById("btn");
    this.pass = document.getElementById("passd");
    this.btn = document.getElementById("btn");
    this.a = this.b = this.c = this.d = false;
    this.box();
    this.getData();
}

Reg.prototype.box = function () {
    var thc = this;
    this.zhang.onblur = function () {
        var zhang =/^[a-zA-Z\d]{5,10}$/;
        if(zhang.test(this.value)){
            this.nextElementSibling.innerHTML = "成功";
            thc.a =  true;
        }else{
            this.nextElementSibling.innerHTML = "失败";
            thc.a = false;
        }
    }

    this.she.onblur = function (){
        var she =/^1[3-9]\d{9}$/;
        if(she.test(this.value)){
            this.nextElementSibling.innerHTML = "成功";
            thc.b = true;
        }else{
            this.nextElementSibling.innerHTML = "失败";
            thc.b = false;
        }
    }

    this.pasd.onblur = function () {
        var pasd = /^.{6,18}$/;
        if(!pasd.test(this.value)){
            this.nextElementSibling.innerHTML = "长度不够"
            thc.c=false;
            return;
        }
        var a = b = c =0;
        var numReg = /\d/;
        if(numReg.test(this.value)){
            a = 1
        }

        var azReg = /[a-zA-Z]/;
        if(azReg.test(this.value)){
            b = 1
        }

        var tsReg = /[^\da-zA-Z]/;
        if(tsReg.test(this.value)){
            c = 1
        }
        switch(a+b+c){
            case 1:
                this.nextElementSibling.innerHTML = "简单";break;
            case 2:
                this.nextElementSibling.innerHTML = "一般";break;
            case 3:
                this.nextElementSibling.innerHTML = "困难";break;
        }
        thc.c = true;
        
        if(thc.pasd.value != ""){
            if(thc.passd.value == thc.pasd.value){
                thc.passd.nextElementSibling.innerHTML = "一致";
                thc.d = true;
            }else{
                thc.passd.nextElementSibling.innerHTML = "不一致";
                thc.d = false;
            }
        }
    }
    this.passd.onblur = function () {
        if(thc.passd.value == thc.pasd.value){
            this.nextElementSibling.innerHTML = "一致";
            thc.d = true;
        }else{
            this.nextElementSibling.innerHTML = "不一致";
            thc.d = false;
        }
    }

    this.obtn.onclick = function(){
        if(thc.a && thc.b && thc.c && thc.d){
            thc.cus();
        }else{
            if(!thc.a){
                alert("名称错误")
            }
            if(!thc.b){
                alert("手机号失败")
            }
            if(!thc.c){
                alert("密码失败")
            }
            if(!thc.d){
                alert("重复密码失败")
            }
        }
    }
}
Reg.prototype.getData = function () {
    this.abc = localStorage.getItem("abc");
        // 读取localStorage，如果有就解析成数组，如果没有就给一个空数组，方便操作
        if(this.abc == null){
            this.abc = [];
        }else{
            this.abc = JSON.parse(this.abc)
        }
}
Reg.prototype.cus =function () {
    if(this.abc.length == 0){
        // 第一次注册
        this.abc.push({
            user:this.user.value,
            pass:this.pass.value,
            onoff:0
        })
        localStorage.setItem("abc",JSON.stringify(this.abc))
        location.href = "http://localhost/tong/Signin.html";
    }else{
        // 不是第一次注册，如果不是第一次注册，需要判断这次注册的和之前注册的是否重名，如果重名，不执行
        for(var i=0;i<this.abc.length;i++){
            if(this.abc[i].user === this.user.value){
                alert("已经重名请换个账号")
                return;
            }
        }
        // 如果执行了，表示没重名，那就再增加一个
        this.abc.push({
            user:this.user.value,
            pass:this.pass.value,
            onoff:0
        })
        localStorage.setItem("abc",JSON.stringify(this.abc))
        location.href = "http://localhost/tong/Signin.html";
    }
}


new Reg;