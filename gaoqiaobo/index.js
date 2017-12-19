window.onload = function() {
    var oBtn = document.getElementById("btn");
    var oText = document.getElementById("txt");
    var oScreen = document.getElementById("mainScreen");
    var oAlert = document.getElementById("Alert");
    var oConfirm = document.getElementById("confirm");
    /*弹幕，我的理解是在视频框，也就是主div里有对应数量的<p>或者文本框,每发表一条弹幕，
    就利用随机数,挑选一个文本框从左至右显示;在这里我先只加一个文本框*/
    var timer;
    document.onkeydown = function(event){
        var oEvent = event||window.event;
        if(oEvent.keyCode===13){
            oBtn.onclick();
        }
    };
        oBtn.onclick = function goTo(){
            /*函数内部设置边界数值，在外面设置会因函数内部的动态变化而使得下次调用原数值一直为-130，
            不能执行弹幕移动*/
            var variable = 800;
            // 动态生成span
            var oDan1 = document.createElement("span");
            oDan1.id = "oDan1";
            oDan1.innerHTML = oText.value;
            //设置弹幕滚动，我这里思想是让他的margin递减直到出了屏幕范围
            timer = setInterval(function () {
                if (variable > -130) {
                    variable--;
                    /* oScreen.append这一行代码插入到视频显示框中,不加到外面是因为在外面的话，
                    会在屏幕显示一下文本，然后才会挪动到800px处 */
                    oScreen.appendChild(oDan1);
                    oDan1.style.marginLeft = variable + "px";
                    oBtn.onclick = function tanchu(){
                        oAlert.style.display = "block";
                    };
                }
                else {
                    // 当显示超出范围就删除节点，这里我之前用display:none不管用
                    oDan1.parentNode.removeChild(oDan1);
                    clearInterval(timer);
                    // 重定向点击事件指定的函数
                    oBtn.onclick = goTo;
                }
            }, 1);
        };
    oConfirm.onclick = function(){
        oAlert.style.display = "none";
    }
    oText.onclick = function(){
        oText.value = "";
    }
};




