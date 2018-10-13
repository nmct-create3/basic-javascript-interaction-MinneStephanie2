document.addEventListener('DOMContentLoaded', function(){
    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();
    handleQualityRange();
    handleDropdownButton();
    //handleLikeButton();
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

        
    });
    
    
   
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
        });
        
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
    });
    
}

function handleDropdownButton(){
    let jsInputDropdown = document.querySelector(".c-button__hoofd"),
        jsInputDropdownContent = document.querySelector(".c-dropdown__content"),
        jsbuttens = document.querySelector(".jsbutten"),
        modal = document.querySelector(".c-dropdown__buttons");
    let Isclicked = false;

    jsInputDropdownContent.addEventListener("click",function(e){
        e.preventDefault();
    })

    window.onclick = function(event) {
        if (event.target == modal) {
            jsInputDropdownContent.classList.add("hidden");
            jsInputDropdownContent.classList.remove("show");
            Isclicked = false;
        }

    }

    console.log(jsbuttens);

    jsbuttens.addEventListener("click", function(e){
        e.preventDefault();
        if(Isclicked== true){
            console.log("geklikd 2");
            jsInputDropdownContent.classList.add("hidden");
            jsInputDropdownContent.classList.remove("show");
            Isclicked = false;
        }
        else{
            console.log("geklikd 1");
            jsInputDropdownContent.classList.add("show");
            jsInputDropdownContent.classList.remove("hidden");
            Isclicked = true;
        }
    });
}

function handleLikeButton(){
    let IsLike = false;
    let jsInputLike = document.querySelector(".c-like-icon"),
        colorSvg = document.querySelector(".jsColor");

    jsInputLike.addEventListener("click", function (e){
        if (IsLike){
            colorSvg.classList.remove("c-like--color__gray");
            IsLike= false;
        }
        else{
            colorSvg.classList.add("c-like--color__gray");
            IsLike = true;
        }
    })
}