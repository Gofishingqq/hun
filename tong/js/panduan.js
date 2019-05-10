function PanDuan () {
this.sp = document.querySelector(".cart p");
this.abc = localStorage.getItem("abc");
this.cun();
}
PanDuan.prototype.cun = function () {
   if(this.abc == null){
      this.abc = [];
  }else{
      this.abc = JSON.parse(this.abc)
  }
   this.pan();
}
PanDuan.prototype.pan = function () {
   var thun = this;
  this.sp.onclick= function () {
   for(var i=0;i<thun.abc.length;i++){
     if(thun.abc[i].onoff == 1){
         location.href = "http://localhost/tong/Shopping.html";
         return;
     }else{
         location.href = "http://localhost/tong/Signin.html";
    }
   }
  }
}
new PanDuan;