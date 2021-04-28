const petDescription = document.querySelector('.pet-descriptions');
const dogButton = document.querySelector('#pet-section');
const catButton = document.querySelector('#cat-section');

pet = [
    {name: "Chester", breed: "Golden retriever", age: 3},
    {name:"Papi", breed:"Chihuahua", age: 5},
    {name:"Rocky", breed:"Rottweiler", age: 6},
    {name:"Pelusa", breed:"Bichón frisé", age: 8}
]

dogButton.addEventListener('click',  () =>{
    let asideSection = document.createElement("section");
    let test1 = document.querySelector('.cats-section');
    asideSection.className = "dogs-section"
    test1?.remove();
    asideSection.innerHTML = ` 
        <article class="pet-article">
            <img src="../assets/images/Chester.svg" alt="Chester">
        </article>
        <article class="pet-article">
            <img src="../assets/images/Papi.svg" alt="Papi">
        </article> 
        <article class="pet-article">
            <a href="../pages/rocky.html"><img src="../assets/images/Rocky.svg" alt="Rocky"></a>  
        </article> 
        <article class="pet-article">
            <img src="../assets/images/Pelusa.svg" alt="Pelusa">
        </article>  
    `
    petDescription.appendChild(asideSection);
});

catButton.addEventListener('click',  () => {
    let asideSection = document.createElement("section");
    let test = document.querySelector('.dogs-section');
    asideSection.className = "cats-section"
    test?.remove();
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
            <img src="../assets/images/Bombon.svg" alt="Bombon"> 
        </article>  
    `
    petDescription.appendChild(asideSection);
});

