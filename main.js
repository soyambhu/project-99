var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
 {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    
    var Content = event.results[0] [0].transcript;


    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content =="selfie")
    {
    console.log("selfie ---");
    speak();
    }
 
}
function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Taking your selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);
    take_snapshot();


}
    Webcam.set({
        width:360,
        height:250,
        image_format : 'png',
        png_quality:90
    });
      
    camera = document.getElementByID("camera");

    img_id == 

    function take_snapshot()
    {
    console.log(img_id);
    Webcam.snap (function(data_uri) {
    if(img_id=="selfiel"){
    document.getElementById("result1"). innerHTML = '<img id="selfiel" src="'+data_uri+'"/>';
    }
    if(img_id=="selfie1") {
    document.getElementById("result1").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
    }
    if(img_id=="selfie1"){
    document.getElementById("result1").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
   
    }
    });

 setTimeout(function()
{
img_id = "selfiel";
take_snapshot();
save()
speak_data = "Taking your next Selfie in 10 seconds"; 
var utterThis = new SpeechSynthesisUtterance (speak_data);
synth. speak(utterThis);
}, 5000);


 function save()
 {
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ; 
    link.herf = image;
    link.click();
 }
}