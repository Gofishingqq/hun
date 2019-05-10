function  tu(){
    this.bucty = document.querySelector(".bucty");
    this.tuv = document.querySelector(".tuv");
    this.url ="http://localhost/tong/json/tu.json";
    this.abc = localStorage.getItem("abc");
    this.dyb();
}
tu.prototype.dyb = function () {
    if(this.abc == null){
        this.abc = [];
    }else{
        this.abc = JSON.parse(this.abc)
    }
    this.ert();
}
tu.prototype.ert = function () {
    var thun = this;
    ajaxGet(this.url).then(function(rey){
        thun.rey = JSON.parse(rey);
        thun.yi();
        thun.er();
    })
}
tu.prototype.yi = function () {
   var cty = "";
   for(var i=0;i<this.rey[0].cunt.length;i++){
    cty +=`<li  index="${this.rey[0].cunt[i].id}">
    <a href="details.html">
    <img src="${this.rey[0].cunt[i].chart}" alt="">
    <span>${this.rey[0].cunt[i].name}</span>
    <b>抢购价￥${this.rey[0].cunt[i].price}.00</b>
    </a>
    <s class="add">加入购物车</s>
    </li>`
    }
this.bucty.innerHTML = cty;
this.Dian(1);
}
tu.prototype.er = function () {
    var ctc ="";
    for(var i=0;i<this.rey[1].cunz.length;i++){
    ctc +=`<li  index="${this.rey[1].cunz[i].id}">
    <a href="details.html">
    <img src="${this.rey[1].cunz[i].chart}" alt="">
    <span>${this.rey[1].cunz[i].name}</span>
    <b>抢购价￥${this.rey[1].cunz[i].price}.00</b>
    </a>
    <s class="add">加入购物车</s>
    </li>`
    }
    this.tuv.innerHTML = ctc;
    this.Dian(2);
}

tu.prototype.Dian = function(nub){
    var thdian=this;
    if(nub ==1){
    this.bucty.addEventListener("click",function(eve){
        var e = eve || window.event;
        var target = e.target || e.srcElement;
        var onoff = false;
        for(var i=0;i<thdian.abc.length;i++){
         
            if(thdian.abc[i].onoff == 1){
                if( target.className == "add"){
                    
                    thdian.id = target.parentNode.getAttribute("index");
                    thdian.kun();
                }
                onoff=true;
                }
            }
            if(onoff==false){
                location.href = "http://localhost/tong/Signin.html";
            }
        })
    };
    if(nub == 2){
        this.tuv.addEventListener("click",function(eve){
            var e = eve || window.event;
            var target = e.target || e.srcElement;
            var onoff = false;
            for(var i=0;i<thdian.abc.length;i++){
                if(thdian.abc[i].onoff == 1){
                    if( target.className == "add"){
                        thdian.id = target.parentNode.getAttribute("index");
                        thdian.kun();
                    }
                    onoff=true;
                }
            }
            if(onoff==false){
                location.href = "http://localhost/tong/Signin.html";
            }
        })
    }
}
tu.prototype.kun = function(){
    this.goods = getCookie("homePage");
    if(this.goods == ""){
        this.goods = [{
            id:this.id,
            num:1
        }];
    }else{
        var onoff = true;
        this.goods = JSON.parse(this.goods)
        for(var i=0;i<this.goods.length;i++){
            if(this.goods[i].id == this.id){
                this.goods[i].num++;
                onoff = false;
                break;
            }
        }
        
        if(onoff){
            
            this.goods.push({
                id:this.id,
                num:1
            })
        }
    }
    setCookie("homePage",JSON.stringify(this.goods));
    console.log(this.goods);
}
new tu;