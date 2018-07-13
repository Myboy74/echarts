// size.js（根据屏幕宽高转换rem）：
function size(originw,type){
    var type=type||"x";
    if(type=="x"){
        var clientw=document.documentElement.clientWidth;     // 获取当前屏幕的宽度
        var originw=originw;
        var bili=clientw/originw*100+"px";
        document.getElementsByTagName("html")[0].style.fontSize=bili;
    }else if(type=="y"){
        var clienth=document.documentElement.clientHeight;
        var originh=originw;
        var bili=clienth/originh*100+"px";
        document.getElementsByTagName("html")[0].style.fontSize=bili;
    }
}
size(1600);         // 屏幕的宽度