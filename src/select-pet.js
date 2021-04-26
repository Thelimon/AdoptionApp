const petDescription = document.querySelector('.pet-descriptions');
const dogButton = document.querySelector('#pet-section');

const pet = [
    {name: "Chester", breed: "Golden retriever"},
    {name:"Papi", breed:"Chihuahua"},
    {name:"Rocky", breed:"Rottweiler"},
    {name:"Pelusa", breed:"Bichón frisé"}
]

console.log(pet);

dogButton.addEventListener('click',  (e) =>{
    console.log(petDescription);
    petDescription.innerHTML += `
        <img src="../assets/images/perro.svg" alt="test">; 
    `
});