/*import {messages} from "./dataBase";*/

const chatContainer = document.querySelector('.chat-main');

const messages = [
    {user:"Maria Dolores", client:"¡Hola! Me encantaría adoptar a Rocky.", userMessage:"¡Hola! claro, podemos " +
            "acordar un lugar y hora para que conozcas a Rocky."
    },
    {user:"Juan Jesus", client:"¡Hola! Me encantaría adoptar a Pelusa.", userMessage:"¡Hola! claro, podemos " +
            "acordar un lugar y hora para que conozcas a Pelusa."
    },
    {user:"Esteban quito", client:"¡Hola! Me encantaría adoptar a Matilde.", userMessage:"¡Hola! claro, podemos " +
            "acordar un lugar y hora para que conozcas a Matilde."
    }
]

const printMessages = () => {
    let chatSection = document.createElement("chat-section");
    chatSection.className = ("chat-section");
    messages.forEach((element, index) =>{
        chatContainer.innerHTML `
            <p>Test</p> 
        `
        chatContainer.appendChild(chatSection);
    });
};
