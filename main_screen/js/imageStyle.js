
    window.onload=function(){
    var container = document.getElementById('container');
    var list = document.getElementById('list');//获取图片容器
    var prev = document.getElementById('prev');//向前按钮
    var next = document.getElementById('next');//向后按钮
    var nowP = 1;    //显示位置
    var judge = null;    //执行权
    var speed = 3; // 切换速度 2 秒
    // var width = document.body.clientWidth;
    prev.onclick=function(){
    if(!judge){
        judge = setTimeout(function(){
        if(nowP === 1){setTimeout(function(){
        list.style.transition="left 0s";
        list.style.left = "1300px";
        nowP = 5;},speed*0.1);} //当到达图片表左边缘时与动画同步切换
        list.style.transition = "left "+speed+"s";
        move(1300);
        nowP--;
        judge = null;
    },speed*100);
    }
};
    next.onclick=function(){
    if(!judge){
        judge = setTimeout(function(){
        if(nowP === 5){setTimeout(function(){
        list.style.transition="left 0s";
        list.style.left = "-1300px";
        nowP = 1;},speed*0.1);} //当到达图片表右边缘时与动画同步切换
        list.style.transition = "left "+speed+"s";
        move(-1300);
        nowP++;
        judge = null;
    },speed*100);
    }
};

    function move(num){
    var term = parseInt(list.style.left) + num ;
    list.style.left = term+"px";
}

    var roll= setInterval(function(){
    next.onclick();
},5000);

    container.onmouseenter=function(){
    clearInterval(roll);
};

    container.onmouseleave=function() {
    roll=setInterval(function(){
    next.onclick();
},5000);
};

};
