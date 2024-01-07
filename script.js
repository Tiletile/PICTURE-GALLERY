const me= document.getElementById("toy")

me.addEventListener("click", (event)=> {
    event.target.style.background="blue";
    event.target.style.color='white';
});


const change= document.getElementById("rao")

change.addEventListener("click", (event)=> {
    event.target.style.background="red";
    event.target.style.color="white";
});

const other= document.getElementById("studio")

other.addEventListener("click", (event)=> {
    event.target.style.background="black";
    event.target.style.color="white";
});

const medic= document.getElementById("medic")

medic.addEventListener("click", (event)=> {
    event.target.style.background="red";
    event.target.style.color="white";
});

const others= document.getElementById("medic 2")

others.addEventListener("click", (event)=> {
    event.target.style.background="blue";
    event.target.style.color="white";
});

const mic= document.getElementById("studio 2")

mic.addEventListener("click", (event)=> {
    event.target.style.background="green";
    event.target.style.color="white";
});

const tem= document.getElementById("temi")

tem.addEventListener("click", (event)=> {
    event.target.style.background="orange";
    event.target.style.color="black";
});

const lek= document.getElementById("lekan")

lek.addEventListener("click", (event)=> {
    event.target.style.background="purple";
    event.target.style.color="white";
});
