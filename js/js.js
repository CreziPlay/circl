
const numPoints = 4; // Количество точек на круге 

document.addEventListener("DOMContentLoaded", function () {
    const circle = document.querySelector(".circle");
    const pointsContainer = document.getElementById("points");
    const radius = circle.offsetWidth / 2 - 1; // Радиус круга с учетом границы

    for (let i = 0; i < numPoints; i++) {
        const angle = (i * (360 / numPoints));
        const radians = (angle * Math.PI) / 180;
        const x = radius * Math.cos(radians) + radius;
        const y = radius * Math.sin(radians) + radius;

        const point = document.createElement("div");
        if(i == numPoints -1){
            point.classList.add("point");
            point.classList.add("point-active");
        }else{
            point.classList.add("point");
        }
        point.id = ("point" + i);
        point.classList.add(i);
        point.style.left = `${x}px`;
        point.style.top = `${y}px`;
        point.textContent = i +1;
        pointsContainer.appendChild(point);

    }

});
let CorrectNum = 1;
let a = numPoints - 1;
let corrctangle = 0 ;



function prev(){
    if(CorrectNum !== numPoints){
        corrctangle += angle;    
        const circle = document.getElementById("circle");
        const point = document.querySelectorAll(".point");
    
        point.forEach(function(element) {
            element.style.transform = "translate(-50%, -50%) rotate(-"+corrctangle+"deg)";
            console.log(element);
            element.classList.remove('point-active');
        });
        circle.style.transform  ="translate(-50%, -50%) rotate("+corrctangle+"deg)";
        a -= 1; 
       let NextSlide = document.querySelector("#point"+ a);
       NextSlide.classList.add('point-active');
    
    
        CorrectNum += 1;
    }
      
  
}


corrnext = 1;

let angle = (360 / numPoints);
function next(){
    if(CorrectNum !== 1){
        corrctangle -= angle;    
        const circle = document.getElementById("circle");
        const point = document.querySelectorAll(".point");
    
        point.forEach(function(element) {
            element.style.transform = "translate(-50%, -50%) rotate(-"+corrctangle+"deg)";
            console.log(element);
            element.classList.remove('point-active');
        });
        circle.style.transform  ="translate(-50%, -50%) rotate("+corrctangle+"deg)";
        a += 1; 
       let NextSlide = document.querySelector("#point"+ a);
       NextSlide.classList.add('point-active');
    
       corrnext += 1;
        CorrectNum -= 1;
    }
   
 
}
