function XuanXiang (){
    this.sli=document.querySelectorAll("#section .s-bottom .b-top ul li");
    this.sul=document.querySelectorAll("#section .s-bottom .b-bottom ul");
    this.cux=0;
        //绑定事件
    this.Bang()
}
XuanXiang.prototype.Bang = function (){
    var thux=this;
for(i=0;i<this.sli.length;i++){
    this.sli[i].wun=i;
    this.sli[i].onclick = function (){
         //编索引
        thux.Suo(this)
    }
}
   
}
XuanXiang.prototype.Suo =function (ele){
    this.cux=ele.wun;
        //隐藏
    this.Shong()
}
XuanXiang.prototype.Shong = function (){
    for(j=0;j<this.sli.length;j++){
        this.sli[j].className="";
        this.sul[j].style.display = "none";
    }
    this.Oxu()
}
XuanXiang.prototype.Oxu = function (){
    this.sli[this.cux].className="te";
    this.sul[this.cux].style.display="block"
}
new XuanXiang()