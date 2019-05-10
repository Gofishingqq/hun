function Miao (){
    this.miao = document.querySelector(".miao");
    this.url = "http://localhost/tong/json/miao.json";
    this.ert();
    }
    Miao.prototype.ert = function () {
        var thun = this;
        ajaxGet(this.url).then(function(rey){
            thun.rey = JSON.parse(rey);
            thun.dux();
        })
    }
    Miao.prototype.dux = function () {
        var cty ="";
        for(var i=0;i<this.rey.length;i++){
            cty +=`<li>
            <a href="miao.html">
            <img src="${this.rey[i].picture}" alt="">
            </a></li>`
        }
        this.miao.innerHTML = cty;
    }
    new Miao;