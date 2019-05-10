function ZhuCe() {
    this.sBox = document.querySelector(".s-zho .sh");
    this.span = document.querySelector(".s-zho .sh span");
    this.bBox =document.querySelector(".s-zho .sh-1");
    this.bImg = this.bBox.children[0];
    this.init()
}
ZhuCe.prototype.init = function(){
    var that = this;
    this.sBox.onmouseover = function(){
        that.show()
        this.onmousemove = function(eve){
            var e = eve || window.event;
            that.move({
                x:e.pageX - this.offsetLeft,
                y:e.pageY - this.offsetTop
            })
        }
    }
    this.sBox.onmouseout = function(){
        that.hide()
    }
}
ZhuCe.prototype.show = function(){

    this.span.style.display = "block";
    this.bBox.style.display = "block";
}
ZhuCe.prototype.move = function(pos){


    var l = pos.x - this.span.offsetWidth;
    var t = pos.y - this.span.offsetHeight*3

    if(l<0) l=0;
    if(t<0) t=0;
    (l>this.sBox.offsetWidth-this.span.offsetWidth) && 
    (l=this.sBox.offsetWidth-this.span.offsetWidth);
    
    (t>this.sBox.offsetHeight-this.span.offsetHeight) && 
    (t=this.sBox.offsetHeight-this.span.offsetHeight);

    this.span.style.left = l + "px";
    this.span.style.top = t + "px";


    var x=  l / (this.sBox.offsetWidth-this.span.offsetWidth)
    var y = t / (this.sBox.offsetHeight-this.span.offsetHeight)

    this.bImg.style.left = -x * (this.bImg.offsetWidth-this.bBox.offsetWidth) + "px";
    this.bImg.style.top = -y * (this.bImg.offsetHeight-this.bBox.offsetHeight) + "px";
}

ZhuCe.prototype.hide = function(){

    this.span.style.display = "none";
    this.bBox.style.display = "none";
}
new ZhuCe;