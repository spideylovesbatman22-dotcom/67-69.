// ==========================
// PAGES
// ==========================

const pages = document.querySelectorAll(".page");

function show(id){

    pages.forEach(page=>page.classList.remove("active"));

    document
    .getElementById(id)
    .classList
    .add("active");

}

// ==========================
// LOADING
// ==========================

const progress =
document.querySelector(".progress");

const loadingText =
document.getElementById("loadingText");

let value = 0;

const load = setInterval(()=>{

    value++;

    progress.style.width=value+"%";

    if(value==100){

        clearInterval(load);

        loadingText.innerHTML="Found one.";

        setTimeout(()=>{

            show("intro");

        },1200);

    }

},22);

// ==========================
// YES
// ==========================

const yesBtn =
document.getElementById("yesBtn");

yesBtn.onclick=()=>{

    show("booking");

    const bookingBar =
    document.querySelector(".bookingProgress");

    let percent=0;

    const booking=setInterval(()=>{

        percent++;

        bookingBar.style.width=
        percent+"%";

        if(percent>=100){

            clearInterval(booking);

            setTimeout(()=>{

                show("movie");

            },500);

        }

    },15);

};

// ==========================
// NO BUTTON
// ==========================

const noBtn =
document.getElementById("noBtn");

const texts=[

"Maybe not",

"Are you sure?",

"I already picked the movie...",

"It has Minions. 🍌",

"I'll get the popcorn. 🍿",

"Last chance.",

"...okay, you win."

];

let click=0;

let scale=1;

noBtn.onclick=()=>{

    if(click<texts.length){

        noBtn.innerHTML=texts[click];

    }

    click++;

    scale-=0.12;

    if(scale<0.2){

        scale=0.2;

    }

    noBtn.style.transform=
    `scale(${scale})`;

    const x=
    Math.random()*
    (window.innerWidth-220);

    const y=
    Math.random()*
    (window.innerHeight-120);

    noBtn.style.position="fixed";
    noBtn.style.left=x+"px";
    noBtn.style.top=y+"px";

    yesBtn.style.transform=
    `scale(${1+(click*.06)})`;

};

// ==========================
// MOVIES
// ==========================

const movies=
document.querySelectorAll(".movie");

let movieChoice="Minions";

movies.forEach(movie=>{

    movie.onclick=()=>{

        movies.forEach(card=>
        card.classList.remove("selected"));

        movie.classList.add("selected");

        movieChoice=
        movie.querySelector("h2").innerText;

        if(movieChoice==="Minions"){

            bananaRain();

        }

    }

});

// ==========================
// DATE
// ==========================

const datePicker=
document.getElementById("datePicker");

// ==========================
// TIME
// ==========================

const timeButtons=
document.querySelectorAll(".time");

let chosenTime="12:40 PM";

timeButtons.forEach(button=>{

button.onclick=()=>{

timeButtons.forEach(b=>
b.classList.remove("selectedTime"));

button.classList.add("selectedTime");

chosenTime=
button.innerText;

}

});

// ==========================
// SNACKS
// ==========================

const snacks=
document.querySelectorAll(".snack");

snacks.forEach(snack=>{

snack.onclick=()=>{

snack.classList.toggle("selected");

}

});

// ==========================
// PAGE FLOW
// ==========================

document
.querySelector("#movie .next")
.onclick=()=>show("date");

document
.querySelector("#date .next")
.onclick=()=>show("time");

document
.querySelector("#time .next")
.onclick=()=>show("snacks");

// ==========================
// FINISH
// ==========================

document
.getElementById("finish")
.onclick=()=>{

document
.getElementById("ticketMovie")
.innerHTML=
"🎬 "+movieChoice;

document
.getElementById("ticketDate")
.innerHTML=
"📅 "+
(datePicker.value||"To be decided");

document
.getElementById("ticketTime")
.innerHTML=
"🕖 "+chosenTime;

const selectedSnacks=
[...document.querySelectorAll(".snack.selected")]

.map(snack=>snack.innerText)

.join(", ");

document
.getElementById("ticketSnack")
.innerHTML=
"🍿 "+
(selectedSnacks||"We'll decide together");

show("ticketPage");

};

// ==========================
// ENDING
// ==========================

document
.getElementById("ending")
.onclick=()=>{

show("endingPage");

};

// ==========================
// FLOATING EFFECTS
// ==========================

const icons=[

"✨",

"🍿",

"❤️"

];

setInterval(()=>{

const item=
document.createElement("div");

item.className="floating";

item.innerHTML=
icons[
Math.floor(
Math.random()*icons.length)];

item.style.left=
Math.random()*100+"vw";

item.style.animationDuration=
(5+Math.random()*4)+"s";

document
.getElementById("background")
.appendChild(item);

setTimeout(()=>{

item.remove();

},9000);

},700);

// ==========================
// BANANAS
// ==========================

function bananaRain(){

for(let i=0;i<20;i++){

const banana=
document.createElement("div");

banana.className="floating";

banana.innerHTML="🍌";

banana.style.left=
Math.random()*100+"vw";

banana.style.animationDuration=
(2+Math.random()*2)+"s";

document
.getElementById("background")
.appendChild(banana);

setTimeout(()=>{

banana.remove();

},3500);

}

