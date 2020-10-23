//Movement animation to happen

const card =document.querySelector(".card");
const container = document.querySelector(".container");

//animate items(optional)
const title = document.querySelector(".title");
const tree = document.querySelector(".tree img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");


//Moving Animation Event
container.addEventListener("mousemove", (e) => {
   let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
   let yAxis = (window.innerHeight / 2 - e.pageY) /25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`

})


//to make container animation return /animate

//animate in-avoids card moving when mouse enters
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //popout
    title.style.transform = "translateZ(150px)";
    tree.style.transform = "translateZ(200px) rotateZ(-45deg)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";
});



//animate out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`

    //popback
    title.style.transform = "translateZ(0px)";
    tree.style.transform = "translateZ(200px) rotateZ(0deg)";

    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";

})