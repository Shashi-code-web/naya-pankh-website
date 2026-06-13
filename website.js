document
.getElementById("volunteerForm")
.addEventListener("submit", function(e){

e.preventDefault();

alert(
"Thank You For Registering As A Volunteer!"
);

this.reset();

});

document
.getElementById("darkModeBtn")
.addEventListener("click", ()=>{

document.body.classList.toggle("dark-mode");

});

function counter(id,target){

let count=0;

let speed=Math.ceil(target/100);

let update=setInterval(()=>{

count += speed;

if(count>=target){

count=target;
clearInterval(update);

}

document.getElementById(id).innerText=count;

},20);

}
    
counter("volunteers",600);
counter("children",1500);
counter("eventsCount",250);
counter("families",1000);