function SanJi(){
this.oul = document.querySelector("#section ul");
this.ali = document.querySelectorAll("#section ul li");
this.ap = document.querySelectorAll("#section ul p");
this.cyv = 0;
this.Kun();
}
SanJi.prototype.Kun = function () {
    for(i=0;i<this.ali.length;i++){
        this.boc();
       
    }
   }
SanJi.prototype.boc = function () {
    var thun =this;
    this.ali[i].onmouseover = function () {
     var cun=i;
     return function(){
            thun.ap[cun].style. display="block";
         }
    }();
    this.ali[i].onmouseout = function (){
        var cun=i;
        return function(){
               thun.ap[cun].style. display="none";
            }
    }();
}

new SanJi;