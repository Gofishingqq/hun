function Magnifier(){
    // 1.选元素
    this.sBox = document.querySelector("#section .s-zho .sh");
    this.span = document.querySelector("#section .s-zho .sh span");
    this.bBox = document.querySelector("#section .s-zho .sh-1");
    this.bImg = this.bBox.children[0];

    // 2.绑定事件：进入，移动，离开
    this.init()
}
Magnifier.prototype.show = function(){
    // 显示
    this.span.style.display = "block";
    this.bBox.style.display = "block";
}
Magnifier.prototype.hide = function(){
    // 隐藏
    this.span.style.display = "none";
    this.bBox.style.display = "none";
}
Magnifier.prototype.move = function(pos){
    // 移动
    var l = pos.x - this.span.offsetWidth/3;
    var t = pos.y - this.span.offsetHeight/3
    // 边界限定
    if(l<0) l=0;
    if(t<0) t=0;
    (l>this.sBox.offsetWidth-this.span.offsetWidth) && 
    (l=this.sBox.offsetWidth-this.span.offsetWidth);
    
    (t>this.sBox.offsetHeight-this.span.offsetHeight) && 
    (t=this.sBox.offsetHeight-this.span.offsetHeight);

    // span的移动
    this.span.style.left = l + "px";
    this.span.style.top = t + "px";

    // 计算比例
    // 已知咱班有89人，其中男生23人，请问男生找了总人数的比例是多少？
    // 23/89
    var x=  l / (this.sBox.offsetWidth-this.span.offsetWidth)
    var y = t / (this.sBox.offsetHeight-this.span.offsetHeight)
    console.log(x,y)

    // 根据比例移动大图
    this.bImg.style.left = -x * (this.bImg.offsetWidth-this.bBox.offsetWidth) + "px";
    this.bImg.style.top = -y * (this.bImg.offsetHeight-this.bBox.offsetHeight) + "px";
}
Magnifier.prototype.init = function(){
    var that = this;
    // 进入
    this.sBox.onmouseover = function(){
        // 显示元素
        that.show()
        // 移动             this == that.sBox
        this.onmousemove = function(eve){
            var e = eve || window.event;
            // e.pageX - this.offsetLeft === e.offsetX
            // e.pageY - this.offsetTop === e.offsetY
            that.move({
                x: e.offsetX,
                y: e.offsetY
            })
        }
    }

    // 离开
    this.sBox.onmouseout = function(){
        //     隐藏元素
        that.hide()
    }
}

new Magnifier;