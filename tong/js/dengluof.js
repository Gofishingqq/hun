class Index{
    constructor(){
        this.p = document.querySelectorAll(".h-left p");
        this.span = document.querySelector(".h-left p span");
        this.exit = document.querySelector(".h-left p em");
        this.getData()
        this.addEvent();
    }
    getData(){
        this.abc = localStorage.getItem("abc");
        // 读取localStorage，如果有就解析成数组，如果没有就给一个空数组，方便操作
        if(this.abc == null){
            this.abc = [];
        }else{
            this.abc = JSON.parse(this.abc)
        }
        this.panduan()
    }
    panduan(){
        for(var i=0;i<this.abc.length;i++){
            if(this.abc[i].onoff == 1){
                this.p[0].style.display = "none";
                this.p[1].style.display = "block";
                this.span.innerHTML = this.abc[i].user;
                this.successUser = this.abc[i].user;
                return;
            }
        }
        this.p[0].style.display = "block";
        this.p[1].style.display = "none";
        this.span.innerHTML = "";
    }
    addEvent(){
        var that = this;
        this.exit.onclick = function(){
            if(that.successUser){
                for(var i=0;i<that.abc.length;i++){
                    if(that.abc[i].user === that.successUser){
                        that.abc[i].onoff = 0;
                        localStorage.setItem("abc",JSON.stringify(that.abc))
                        that.panduan();
                    }
                }
            }
        }
    }
}

new Index();