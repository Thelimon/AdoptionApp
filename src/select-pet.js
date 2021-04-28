const petDescription = document.querySelector('.pet-descriptions');
const dogButton = document.querySelector('#pet-section');
const catButton = document.querySelector('#cat-section');

const pet = [
    {name: "Chester", breed: "Golden retriever"},
    {name:"Papi", breed:"Chihuahua"},
    {name:"Rocky", breed:"Rottweiler"},
    {name:"Pelusa", breed:"Bichón frisé"}
]

dogButton.addEventListener('click',  () =>{
    let asideSection = document.createElement("section");
    asideSection.className = "dogs-section"
    asideSection.innerHTML = ` 
        <article class="pet-article">
            <img src="../assets/images/Chester.svg" alt="Chester">
        </article>
        <article class="pet-article">
            <img src="../assets/images/Papi.svg" alt="Papi">
        </article> 
        <article class="pet-article">
            <img src="../assets/images/Rocky.svg" alt="Rocky">
        </article> 
        <article class="pet-article">
            <img src="../assets/images/Pelusa.svg" alt="Pelusa">
        </article>  
    `
    petDescription.appendChild(asideSection);
});

catButton.addEventListener('click',  () => {
    let asideSection = document.createElement("section");
    asideSection.className = "cats-section"
    asideSection.innerHTML = ` 
        <article class="pet-article">
            <img src="../assets/images/Matilde.svg" alt="Matilde">
        </article>
        <article class="pet-article">
            <img src="../assets/images/PelusaGato.svg" alt="Pelusa">
        </article> 
        <article class="pet-article">
            <img src="../assets/images/Kitty.svg" alt="Kitty">
        </article> 
        <article class="pet-article">
            <img src="../assets/images/Bombón.svg" alt="Bombon">
        </article>  
    `
    petDescription.appendChild(asideSection);
});
