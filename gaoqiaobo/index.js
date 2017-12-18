window.onload = function(){
    var oBtn = document.getElementById("btn");
    var oText = document.getElementById("text");
    var oScreen = document.getElementById("mainScreen");
    //弹幕，我的理解是在视频框，也就是主div里有对应数量的<p>或者文本框，
    // 每发表一条弹幕，就利用随机数,挑选一个文本框从左至右显示；
    //在这里我先只加一个文本框
    var timer;
    oBtn.onclick = function gogo(){
        var variable = 800;
       // var count = 930;
        // 动态生成span
        var oDan1 = document.createElement("span");
        oDan1.id = "oDan1";
        oDan1.innerHTML = oText.value;
        // 设置弹幕滚动，我这里思想是让他的margin递减直到出了屏幕范围

        timer = setInterval(function () {
            if (variable > -130) {
                // 插入到视频显示框中,家在这里不加到外面是因为
                //在外面的话，会在屏幕显示一下文本，然后才会挪动到800px处
                oScreen.appendChild(oDan1);
                oDan1.style.marginLeft = variable + "px";
                variable--;

            }
        else {

                // 当显示超出范围就删除节点，这里我之前用display:none不管用
                oDan1.parentNode.removeChild(oDan1);
                clearInterval(timer);

            }
        }, 1);
    }
};