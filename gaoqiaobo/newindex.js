window.onload = function(){
    var oBtn = document.getElementById("btn");
    var oText = document.getElementById("txt");
    var oScreen = document.getElementById("mainScreen");
    var i = 0;
    var oDan1;
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

            var oDan1 = document.createElement("span");

            oDan1.innerText = oText.value;

            // oScreen.appendChild(oDan);
            // oDan.setAttribute("Id","oDan_"+i);
            // oDan1 = document.getElementById("oDan_"+i);
            // console.log(oDan1);


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
            oDan1.style.marginTop = oHeight + "px";

            // Move
            var variable = 800;
             var timer = setInterval(function () {
                oDan1.style.marginLeft = variable + "px";
                if (variable > -oDan1.offsetWidth){
                    variable-=2;
                    oScreen.appendChild(oDan1);
                    // oDan1.style.marginLeft = variable + "px";
                }
                else {
                    clearInterval(timer);

                    // 当显示超出范围就删除节点，这里我之前用display:none不管用
                    oDan1.parentNode.removeChild(oDan1);

                }
            }, 1);
        }
    }
// window结束括号
}