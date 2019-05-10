function GWC(){
this.tbody = document.querySelector(".commodity");
this.url = "http://localhost/tong/json/tu.json";
this.Chv();
this.addEvent();
}
GWC.prototype.Chv = function (){
    var thcu = this;
    ajaxGet(this.url).then(function(rey){
       thcu.rey = JSON.parse(rey);
    //    console.log(thcu.rey)
        thcu.bun();
    });
}
GWC.prototype.bun =function(){
        this.goods = getCookie("homePage")!="" ? JSON.parse(getCookie("homePage")) : [];
        this.fun();
}
GWC.prototype.fun = function () {
    var cev="";
   for(i=0;i<this.rey[0].cunt.length;i++){
        for(j=0;j<this.goods.length;j++){
            if(this.rey[0].cunt[i].id == this.goods[j].id){
                cev +=`<ul index="${this.rey[0].cunt[i].id}">
                <li><img src="${this.rey[0].cunt[i].chart}"/></li>
                <li>${this.rey[0].cunt[i].name}</li>
                <li>￥${this.rey[0].cunt[i].price}.00</li>
                <li><input type="number" min=1 value="${this.goods[j].num}" class="num"></li>
                <li class="te">￥${this.rey[0].cunt[i].price*this.goods[j].num}.00</li>
                <li><b class="dele">删除</b></li>
                </ul>`
            }
        }
   }
   for(i=0;i<this.rey[1].cunz.length;i++){
    for(j=0;j<this.goods.length;j++){
        if(this.rey[1].cunz[i].id == this.goods[j].id){
            cev +=`<ul index="${this.rey[1].cunz[i].id}">
            <li><img src="${this.rey[1].cunz[i].chart}"/></li>
            <li>${this.rey[1].cunz[i].name}</li>
            <li>￥${this.rey[1].cunz[i].price}.00</li>
            <li><input type="number" min=1 value="${this.goods[j].num}" class="num"></li>
            <li class="te">￥${this.rey[1].cunz[i].price*this.goods[j].num}.00</li>
            <li><b class="dele">删除</b></li>
            </ul>`
        }
    }
}
   this.tbody.innerHTML = cev;
   
}

GWC.prototype.addEvent = function(){
    var thu = this;
    this.tbody.addEventListener("input",function(eve){
        var e = eve || window.event ;
        var target = e.target || e.srcElement;
        if(target.className == "num"){
            thu.unm = target.value;
            thu.id = target.parentNode.parentNode.getAttribute("index");
            thu.changeCookie(function(i){
                thu.goods[i].num = thu.unm;
            })
        }
    })
    
    this.tbody.addEventListener("click",function(eve){
        var e = eve || window.event ;
        var target = e.target || e.srcElement;
        if(target.className == "dele"){
            thu.id = target.parentNode.parentNode.getAttribute("index");
                target.parentNode.parentNode.remove();
            thu.changeCookie(function(i){
                thu.goods.splice(i,1);
            })
        }
    })
}
GWC.prototype.changeCookie = function(callback){
    console.log(this.goods)
    console.log(this.id)
    for(var i=0;i<this.goods.length;i++){
        if(this.goods[i].id == this.id){
            callback(i)
        }
    }
    setCookie("homePage",JSON.stringify(this.goods));
}

new GWC();