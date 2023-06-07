//Objects declarations

const objectClass = {
    carta: document.querySelectorAll(".carta"),

};

const objectId = {
    player: document.getElementById("player"),
    sol: document.getElementById("sol"),
    cartaSection: document.getElementById("cartaSection"),
    backgroundSong: document.getElementById("backgroundSong"),

};

const objectVar = {
    elementsEmbaralhadas: false,
    cartasIguais: false,
    cartaVirada: false,
    jogoStart: false,
    musicBackground: false,

};

const objectStyles = {
    cartaSection: {
        width: `${window.innerWidth*0.618}px`,
        height: `${window.innerHeight*0.382}px`,
        left: `${window.innerWidth/3-objectId.cartaSection.offsetWidth}px`,

    },

};

//Styles in Objects

function stylesobjects(style, object){
    for(const property in style){
        if(style.hasOwnProperty(property)){
            object.style[property] = style[property];

        }

    }

}

stylesobjects(objectStyles.cartaSection,objectId.cartaSection);

//Array declarations

let cartasArray = [1,2,3,4,5]; //This array contains the card values

//Audio setup section

objectId.backgroundSong.play();

function audioMouseFunc(){
    var audioMouse = new Audio();
    audioMouse.src = "audio/41 Whistle.mp3";
    audioMouse.play();

}

//forEach and addEventListener methods

objectClass.carta.forEach((element) => {
    element.style.height = `${objectId.cartaSection.offsetHeight*0.382}px`;
    element.style.width = `${objectId.cartaSection.offsetWidth*0.146}px`;

    element.addEventListener('mouseover', function(){
        audioMouseFunc();

    });

    element.addEventListener('click', function(event){
        if(event === 0 && objectVar.cartasIguais === true){

        }

    });

});

objectId.player.addEventListener('mouseover', function(){
    audioMouseFunc();

});

objectId.sol.addEventListener('click', function(){
    objectId.sol.src = "images/manFace.png";
    objectId.sol.style.top = `${9}%`;

    var audioSol = new Audio();
    audioSol.src = "audio/ohyes.mp3";
    audioSol.play();
    
    audioSol.addEventListener('ended', function(){
        objectId.sol.src = "images/solFeliz.gif";
        objectId.sol.style.top = `${3.4}%`;

    });

});

//A functions to manipulate the elements randomly

function embaralharArray(array){
    for(let i = array.length-1; i > 0; i--){
        const j = Math.floor(Math.random()*(i+1));
        [array[i], array[j] = array[j], array[i]];

    }
    objectVar.elementsEmbaralhadas = true;

}

function igualdadeArray(array){
    if(objectVar.elementsEmbaralhadas){
        let element = (Math.random()*Math.round(((1+Math.sqrt(5))/2)**(Math.random()*5)))%5;
        let cartaIgual = (Math.random()*Math.round(((1+Math.sqrt(5))/2)**(Math.random()*10)))%5;
        
        while(element === cartaIgual){
            element = (Math.random()*Math.round(((1+Math.sqrt(5))/2)**(Math.random()*10)))%5;
    
        }
    
        array[cartaIgual] = array[element];

        objectVar.cartasIguais = true;

    }
    
}

