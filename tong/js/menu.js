function Menu() {
this.sh5 = document.querySelector("#section .r-left h5");
this.sdiv = document.querySelector("#section .r-left");
this.sul = document.querySelector("#section .r-left ul");
this.cum();
}
Menu.prototype.cum = function (){
    var thcv=this;
    this.sdiv.onmouseover = function () {
        thcv.cou(1);
    }
   
    this.sdiv.onmouseout = function () {
        thcv.cou(2);
   }
}
Menu.prototype.cou = function (yev) {
    if(yev == 1){
        this.sul.style.display="block";
    }
    if(yev ==2){
        this.sul.style.display="none";
    }
}
new Menu;