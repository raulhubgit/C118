array1=['pen','paper','book','bottle']
randomNo = Math.floor((Math.random() *array1.length)+1)
Element_of_array = array1[randomNo]
console.log(Element_of_array);
sketch = Element_of_array
document.getElementById("desenho").innerHTML = sketch;

timerCounter=0;
timerCheck = String = " ";
drawSketch = String = " ";
answerHolder = String = " ";
score=0;

function updateCanvas(){
    background('white')
}

function setup(){
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}

function draw(){
   checkSketch();
   if(drawSketch == sketch){
    answerHolder = "set";
    score = score + 1;
    document.getElementById('pontos').innerHTML = "Pontuaçao: "+score;
   } 
}

function checkSketch(){
    timerCounter = timerCounter + 1;
    document.getElementById('time').innerHTML = "Tempo: "+timerCounter;
    console.log(timerCounter);
    if(timerCounter > 400){
        timerCounter = 0;
        timerCheck = String = "completed";
    }
    if(timerCheck == String == "completed" || answerHolder == 'set'){
        timerCheck = String = " ";
        updateCanvas()
    }
}
