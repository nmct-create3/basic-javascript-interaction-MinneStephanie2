document.addEventListener('DOMContentLoaded', function(){
    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();
    handleQualityRange();
});

function handleFloatingLabel(){
    let jsInput = document.querySelector(".js-name-input"),
        jslabel = document.querySelector('.js-floating-label');
    
    // x.addEventListener("focus", myFocusFunction, true);
    jsInput.addEventListener("blur",function(){
        //console.log("test functie");
        //jsInput.style.backgroundColor = "red";
        if (jsInput.value == ""){
            jslabel.classList.add("c-label--flating__down");
            jslabel.classList.remove("c-label--flating__up");
            
        }
        else{
            jslabel.classList.add("c-label--flating__up");
            jslabel.classList.remove("c-label--flating__down");
        }

        
    })
    
    
   
}

function handlePasswordSwitcher(){
    let jsTextInput = document.querySelector(".js-password-input"),
        jsCheckboxInput = document.querySelector(".js-password-toggle");

        jsCheckboxInput.addEventListener("click", function(){
            console.log('test');

        if (jsCheckboxInput.checked == true ){
            //console.log("is gecheckd");
            jsTextInput.setAttribute("type", "text");
        }
        else{
            //console.log("is niet gecheckd");
            jsTextInput.setAttribute("type", "password");
        }
        })
        
}

function handleQualityRange(){
    let jsInputSlider = document.querySelector(".js-quality-input"),
        jsInputHolder = document.querySelector(".js-range-holder"),
        jsValue = jsInputSlider.value;

        console.log(jsValue);

    jsInputSlider.addEventListener("change",function(){
        jsValue = jsInputSlider.value
        console.log(jsValue);

        jsInputHolder.setAttribute("data-value", jsValue);
        console.log("translateX(" + jsValue + "px)");
        jsInputHolder.style.transform = "translateX("+jsValue+"px)";
    })
    
}