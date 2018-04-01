var color = document.getElementById("color");
var number = document.getElementById("number");
var preview = document.getElementById("preview");
var cvalue = document.getElementById("color").value;
var range1 = document.getElementById("range1");
var range2 = document.getElementById("range2");
var range3 = document.getElementById("range3");
var range4 = document.getElementById("range4");
var rangeB = document.getElementById("rangeB");
var hair = document.getElementById("hair");
var eyes = document.getElementById("eyes");
var nose = document.getElementById("nose");
var mouth = document.getElementById("mouth");

var createM = document.getElementById("more");

var random = document.getElementById("random");

var start = document.getElementById("start");

var stop = document.getElementById("stop");

var display = document.getElementById("display");

var items = document.getElementsByClassName("items");




change = 1;
var num = 0;
var v = 0;


//end of Var
color.addEventListener("change", function(changebg) {
    if(changebg) {
        preview.style.backgroundColor = ""+color.value+"";
    }
});

number.addEventListener("click", function(changeToNumber){
    //alert("working");
    range1.type = "number";
    range2.type = "number";
    range3.type = "number";
    range4.type = "number";
   
    
    
});

rangeB.addEventListener("click", function(changeToRange){
    //alert("working");
    range1.type = "range";
    range2.type = "range";
    range3.type = "range";
    range4.type = "range";
   
    
    
});

range1.addEventListener("change", function(size) {
    if (size) {
        hair.style.width = ""+range1.value+"" + '%';
    }
});

range2.addEventListener("change", function(size) {
    if (size) {
        eyes.style.width = ""+range2.value+"" + '%';
    }
});

range3.addEventListener("change", function(size) {
    if (size) {
        nose.style.width = ""+range3.value+"" + '%';
    }
});

range4.addEventListener("change", function(size) {
    if (size) {
        mouth.style.width = ""+range4.value+"" + '%';
    }
});

//level3**

hair.addEventListener("click", function (changeHair) {
    
    change += 1;
    
        hair.src = "img/hair" +change+ ".png";
    
    if(change >= 3) {
        change = 0;
    }
});

eyes.addEventListener("click", function (changeEyes) {
    
    change += 1;
    
        eyes.src = "img/eyes" +change+ ".png";
    
    if (change >= 3) {
        change = 0;
    }
});

nose.addEventListener("click", function (changeNose) {
    
    change += 1;
    
        nose.src = "img/nose" +change+ ".png";
    
    if (change >= 3) {
        change = 0;
    }
});

mouth.addEventListener("click", function (changeMouth) {
    
    change +=1;
    
        mouth.src = "img/mouth" +change+ ".png";
    
    if (change >= 3) {
        change = 0;
    }
});
// 4A Creating divs



createM.addEventListener("click", function () {
    
 createFace();    
});

rangeB.addEventListener("click", function(){
    randomFace();
})


var numName = 0;
function createFace() {
    var newDiv = document.createElement("div");
    var hairImg = document.createElement("img");
    var eyesImg = document.createElement("img");
    var noseImg = document.createElement("img");
    var mouthImg = document.createElement("img");
    display.appendChild(newDiv);
    numName++;
    newDiv.id = "newface" + numName;
    newDiv.appendChild(hairImg);
    newDiv.appendChild(eyesImg);
    newDiv.appendChild(noseImg);
    newDiv.appendChild(mouthImg);
    
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.display = "inline-block";
    newDiv.style.position = "relative";
    newDiv.style.backgroundColor = preview.style.backgroundColor;
    
    hairImg.src = document.getElementById("hair").src;
    hairImg.style.width = document.getElementById("range1").value + "%";
    hairImg.style.top = "0%";
    hairImg.style.left = "0";
    hairImg.style.right = "0";
    hairImg.style.margin = "auto";
    hairImg.style.position = "absolute";
    
    eyesImg.src = document.getElementById("eyes").src;
    eyesImg.style.width = document.getElementById("range2").value + "%";
    eyesImg.style.top = "40%";
    eyesImg.style.left = "0";
    eyesImg.style.right = "0";
    eyesImg.style.margin = "auto";
    eyesImg.style.position = "absolute";
    
    noseImg.src = document.getElementById("nose").src;
    noseImg.style.width = document.getElementById("range3").value + "%";
    noseImg.style.top = "55%";
    noseImg.style.left = "0";
    noseImg.style.right = "0";
    noseImg.style.margin = "auto";
    noseImg.style.position = "absolute";
    
    mouthImg.src = document.getElementById("mouth").src;
    mouthImg.style.width = document.getElementById("range4").value + "%";
    mouthImg.style.top = "75%";
    mouthImg.style.left = "0";
    mouthImg.style.right = "0";
    mouthImg.style.margin = "auto";
    mouthImg.style.position = "absolute";
    
    newDiv.addEventListener("click", function(){
    removeDiv(newDiv.id);
})
};

//RANDOMIZER

function randomFace() {

random.addEventListener("click", function (randomize) {
    
    var j = Math.floor(Math.random() * 3) + 1;
        0 > j < 4;
    hair.src = "img/hair" +j+ ".png";
    
    var j = Math.floor(Math.random() * 3) + 1;
        0 > j < 4;
    eyes.src = "img/eyes" +j+ ".png";
    
    var j = Math.floor(Math.random() * 3) + 1;
        0 > j < 4;
    nose.src = "img/nose" +j+ ".png";
    
    var j = Math.floor(Math.random() * 3) + 1;
        0 > j < 4;
    mouth.src = "img/mouth" +j+ ".png";
    
    var r = Math.round(Math.random()*255); 
    var g = Math.round(Math.random()*255);
    var b = Math.round(Math.random()*255);

    
    preview.style.backgroundColor = "rgb("+r+","+g+","+b+")";
    
    var k = Math.floor(Math.random()*70) + 1; 
    
     range1.value = k;
    
    hair.style.width = k + "%";
   
    var l = Math.floor(Math.random()*40) + 1; 
    
    range2.value = l;
    
    eyes.style.width = l + "%";
    
    var m = Math.floor(Math.random()*30) + 1; 
    
    range3.value = m;
    
    nose.style.width = m + "%";
    
    var n = Math.floor(Math.random()*35) + 1; 
    
    range4.value = n;
    
    mouth.style.width = n + "%";

});
}


function changeType(x) {
    document.getElementById("range1").type = x;
    document.getElementById("range2").type = x;
    document.getElementById("range3").type = x;
    document.getElementById("range4").type = x;
}

var timer = null;
var timer2 = null;
var arc = document.getElementById("arc");
var stop = document.getElementById("stop");


arc.addEventListener("click", function(){
   // console.log(1+9);
    timer = setInterval(randomFace, 500);
    timer2 = setInterval(createFace, 500);
})
stop.addEventListener("click",function(){
       // console.log(9+9);
    clearInterval(timer);
    clearInterval(timer2);
})

function removeDiv(id){
    document.getElementById(id).remove();
};



