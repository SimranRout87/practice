//linking from html world to java script world
var btnTranslate =  document.querySelector(".btn");

var textInput = document.querySelector(".text-input");

var resultDiv = document.querySelector(".output");
//server url stored in placeholder
//var serverURL="https://api.funtranslations.com/translate/navi.json"



//adding addEventListener to button
btnTranslate.addEventListener("click", handleClick)


function handleClick(){
    var inputText = textInput.value;
    resultDiv.innerText="translation in progress...";
    //message shown to client until we get translated value
    fetch ("https://api.funtranslations.com/translate/navi.json" + "?" + "text=" + inputText)
    .then(Response=> Response.json())
    .then(json=>{
        var translatedText = json.contents.translated
        resultDiv.innerText=translatedText
    })
    //error handling
    .catch(errorHandler)//calling a  error handler function
    }

        function errorHandler(error){
            console.log("error occured",error);
            alert("something is wrong with server! try again later")

        }
