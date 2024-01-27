 // custom config for the MTW app 
 const mtwAppConfig = {
    border: true // app border in the MTW page                    
}

var resultText= "";
var resultContent = document.getElementById("resultText");
var BtnClicked = document.getElementsByTagName("button");
BtnClicked.sevenBtn.onclick=function () {
    resultText=resultText+ "7" ;
    resultContent.innerHTML=resultText;
};
BtnClicked.eightBtn.onclick=function () {
    resultText=resultText+ "8" ;
    resultContent.innerHTML=resultText;
};

BtnClicked.nineBtn.onclick=function () {
    resultText=resultText+ "9" ;
    resultContent.innerHTML=resultText;
};

BtnClicked.fourBtn.onclick=function () {
    resultText=resultText+ "4" ;
    resultContent.innerHTML=resultText;
};

BtnClicked.fiveBtn.onclick=function () {
    resultText=resultText+ "5" ;
    resultContent.innerHTML=resultText;
};
 
BtnClicked.sixBtn.onclick=function () {
    resultText=resultText+ "6" ;
    resultContent.innerHTML=resultText;
};

BtnClicked.oneBtn.onclick=function () {
    resultText=resultText+ "1" ;
    resultContent.innerHTML=resultText;
};

BtnClicked.twoBtn.onclick=function () {
    resultText=resultText+ "2" ;
    resultContent.innerHTML=resultText;
};

BtnClicked.threeBtn.onclick=function () {
    resultText=resultText+ "3" ;
    resultContent.innerHTML=resultText;
};

BtnClicked.zeroBtn.onclick=function () {
    resultText=resultText+ "0" ;
    resultContent.innerHTML=resultText;
};

BtnClicked.DivideBtn.onclick=function () {
    resultText=resultText+ " / " ;
    resultContent.innerHTML=resultText;
};

BtnClicked.multiplyBtn.onclick=function () {
    resultText=resultText+ " * " ;
    resultContent.innerHTML=resultText;
};

BtnClicked.MinusBtn.onclick=function () {
    resultText=resultText+ " - " ;
    resultContent.innerHTML=resultText;
};

BtnClicked.PlusBtn.onclick=function () {
    resultText=resultText+ " + " ;
    resultContent.innerHTML=resultText;
};

BtnClicked.equalBtn.onclick=function () {
    try {
        // Attempt to evaluate the expression using eval()
        resultText= eval(resultText);
        resultContent.innerHTML= resultText;
    } catch (error) {
        // If there's an error during evaluation, it's an illegal expression
        resultContent.innerHTML="error"; 
    }
    
     
};

BtnClicked.delBtn.onclick=function () {
    resultText="";
    resultContent.innerHTML=resultText;
};

BtnClicked.dotBtn.onclick=function () {
    resultText=resultText+ "." ;
    resultContent.innerHTML=resultText;
};

BtnClicked.cBtn.onclick=function () {
    if (resultText.length > 0) {
        resultText = resultText.slice(0, -1);
    }
    resultContent.innerHTML=resultText;
};

BtnClicked.leftArrowBtn.onclick=function () {
    resultText=resultText+ " (" ;
    resultContent.innerHTML=resultText;
};

BtnClicked.rightArrowBtn.onclick=function () {
    resultText=resultText+ ") " ;
    resultContent.innerHTML=resultText;
};




