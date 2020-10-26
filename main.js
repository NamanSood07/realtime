function preload(){
   
      
   }
   function setup(){
       canvas=createCanvas(300,300);
       canvas.position(620,360)
       video= createCapture(VIDEO);
       video.hide();
       classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/RLnBki4rr/model.json',modelLoaded);
       
   }
   
  
   function draw(){
       image(video,0,0,400,400);
       classifier.classify(video, gotResult);
   }
   console.log('ml5 version:', ml5.version);

function modelLoaded(){
    console.log('modelLoaded!')
}
function gotResult(error,results){
    if(error){
        console.error(error);
    } else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3)


    }
}