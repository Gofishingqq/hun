function Search(options){
    
    this.url = options.url;
    this.ul = options.ul;
    this.txt = options.txt;
    
    this.addEvent()
}
Search.prototype.addEvent = function(){
    var that = this;
    this.txt.onkeyup = function(){
        
        that.value = this.value
        
        that.load()
    }
}
Search.prototype.load = function(){
    var that = this;
    jsonp(this.url,function(res){
        
        that.res = res.s;
        
        that.display()
    },{
        
        column:"cb",
        cb:"jagdsau",
       
        wd:this.value
    })
}
Search.prototype.display = function(){
    var str = "";
    for(var i=0;i<this.res.length;i++){
        str += `<li>${this.res[i]}</li>`
    }
    this.ul.innerHTML = str;
}


new Search({
    url:"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",
    ul:document.getElementsByClassName("search-res")[0],
    txt:document.getElementById("search").children[0]
})
