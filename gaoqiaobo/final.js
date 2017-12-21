window.onload = function(){
    var oBtn = document.getElementById("btn");
    var oText = document.getElementById("txt");
    var oScreen = document.getElementById("mainScreen");
    var timer = null;
    // var oDan1;
    oBtn.onclick = sendMessage;
    // 每次点击清空输入框
    oText.onclick = function(){
        oText.value = "";
    };
    document.onkeydown = function(evt){
        var event = evt || window.event;//兼容IE
        if(event.keyCode == 13){
            //监听回车事件
            sendMessage();
        }
    };
    function sendMessage(){

        if(oText.value.trim() == ""){
            alert("请正确输入");
        }
        else{
            clearInterval(timer);
            var oDan1 = document.createElement("span");
            // 定义字体大小
            var oFontSize  = parseInt(Math.random()*16+16);
            // 创建随机颜色
            var oFontColor =  '#'+Math.floor(Math.random()*16777215).toString(16);
            // 随机高度
            var oMax = oScreen.offsetHeight - oFontSize;
            var oMin = oScreen.offsetTop;
            var oHeight = Math.floor(Math.random() * (oMax-oMin) + oMin);

            oDan1.style.color = oFontColor;
            oDan1.style.fontSize = oFontSize + "px";
            oDan1.style.top = oHeight + "px";
            oDan1.style.left = "800px";
            oDan1.innerText = oText.value;
            oScreen.appendChild(oDan1);
            // Move
            // var variable = 800;
            // var timer = setInterval(function () {
            //     if (variable > -oDan1.offsetWidth){
            //         variable-=2;
            //
            //
            //         console.log(oDan1.offsetLeft);
            //         oDan1.style.marginLeft = variable + "px";
            //     }
            //     else {
            //         // 当显示超出范围就删除节点，这里我之前用display:none不管用
            //         oDan1.parentNode.removeChild(oDan1);
            //
            //         clearInterval(timer);
            //
            //     }
            //
            // }, 1);
            timer = setInterval(move,20);
        }
        oText.value = "";
    }

    function move() {
        var arr = [];
        var oSpan = document.getElementsByTagName('span');//获取现有的弹幕数目
        console.log(oSpan);
        for (var i = 0; i < 3; i++) {
            arr.push(oSpan[i].offsetLeft);//逐条更改left值
            arr[i]-=2;
            console.log(arr);
            oSpan[i].style.left = arr[i] + 'px';
            // //弹幕已经移出了页面的左边，弹幕删除
            if (arr[i] < -oSpan[i].offsetWidth) {
                oScreen.removeChild(oScreen.childNodes[0]);
                oScreen.removeChild(oDan1);
            }
        }
    }


// window结束括号
}