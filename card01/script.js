
var packPlayer = [];

const objectId = {
    card: document.getElementById("card"),
    packCards: document.getElementById("packCards"),
    sectionEnemy: document.getElementById('sectionEnemy'),
    sectionPlayer: document.getElementById('sectionPlayer'),

};

const objectStyle = {
    card: {
        left: `${window.innerWidth*0.25}px`

    },

};

function stylesForObjects(style, object){
    for(const property in style){
        if(style.hasOwnProperty(property)){
            object.style[property] = style[property];

        }

    }

}

stylesForObjects(objectStyle.card, objectId.card);

const objectKeyBool = {
    moveCard: false,

};

function moveCardMouse(event){
    objectId.card.style.left = `${event.clientX-objectId.card.clientWidth/2}px`;
    objectId.card.style.top = `${event.clientY-objectId.card.clientHeight/2}px`;

}

objectId.card.addEventListener('mousedown', function(event){
    objectKeyBool.moveCard = true;

});

document.addEventListener('mouseup', function(event){
    objectKeyBool.moveCard = false;

});

document.addEventListener('mousemove', function(event){
    if(objectKeyBool.moveCard){
        moveCardMouse(event);

    }

});

objectId.packCards.addEventListener('click', function(event){
    let i = 0;
    if(event.button === 0){
        i += 1;

    }
    packPlayer[i] = document.createElement('div');
    objectId.sectionPlayer.appendChild(packPlayer[i]);

});