var cards = [];

card0 = {
    name: "Agent Smith",
    image: "https://img.ibxk.com.br///2019/07/11/11125520634480.jpg?w=1200&h=675&mode=crop&scale=both",
    number: 1+"/"+8,
    attributes: {
        attack: 90,
        defense: 80,
        power: 100,  
    }
};

card1 = {
    name: "Neo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHPp2p760v5gPwZEqSaIGVdnVLuey7aIMf7g&usqp=CAU",
    number: 2+"/"+8,
    attributes: {
        attack: 70,
        defense: 100,
        power: 100,
    }
};

card2 = {
    name: "Morpheus",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKuUhe9KXyBfC3ZYynuDWEeJ_eH-M-w7DHUA&usqp=CAU",
    number: 3+'/'+8,
    attributes: {
        attack: 80,
        defense: 60,
        power: 90,
    }
};

card3 = {
    name: "Trinity",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdg7-s6IKANLZlg1p0Yt67ZHDqwLP46MfZCg&usqp=CAU",
    number: 4+'/'+8,
    attributes: {
        attack: 85,
        defense: 60,
        power: 85,
    }
};

card4 = {
    name: "Niobe",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Jx_ZshsMbw_gum9ooGu9FjJo-umd_A3oVw&usqp=CAU ",
    number: 5+'/'+8,
    attributes: {
        attack: 80,
        defense: 60,
        power: 90,
    }
};

card5 = {
    name: "Ghost",
    image:"https://pbs.twimg.com/media/EXTWNDGUMAAynVf.jpg" ,
    number: 6+'/'+8,
    attributes: {
        attack: 85,
        defense: 60,
        power: 85,
    }
};

card6 = {
    name: "Agent Johnson",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMiCRPq16xvi7ni1pur5cudzxhZMqECEVcwg&usqp=CAU" ,
    number: 7+'/'+8,
    attributes: {
        attack: 95,
        defense: 95,
        power: 85,
    }
};

card7 = {
    name: "The Twins",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdDjyi_-tun08hSURsaFlVR4RWCBqJ09w6Ag&usqp=CAU",
    number: 8+'/'+8,
    attributes: {
        attack: 95,
        defense: 95,
        power: 85,
    }
};

cards = [card0, card1, card2, card3, card4, card5, card6, card7];

let indexPlayerCard;
let playerCard;
let indexMachineCard;
let machineCard;
let sortButton = document.querySelector("#btnSort");
let playButton = document.querySelector("#btnPlay");
let machineCardElement = document.querySelector('#machine-card');
let playerCardElement = document.querySelector('#player-card');
let result = document.getElementById("result");
let playerPoints=0;
let machinePoints=0;

function sortPlayerCard() {
    machineCardElement.style.display = "none";
    let chooseAttribute = document.getElementById("chooseAttribute");
    indexPlayerCard = Math.floor(Math.random() * cards.length);
    playerCard = cards[indexPlayerCard];
    cards.splice(indexPlayerCard,1);
    showPlayerCard();

    chooseAttribute.style.display = null;
    playerCardElement.style.display = null;
    playButton.style.display = null;
    sortButton.style.display = "none";
    result.style.display = "none";
};

function showPlayerCard() {
    playerCardElement.style.backgroundImage = "url('https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png')";
    let photo = document.querySelector(".photo-player-card");
    photo.style.backgroundImage = `url(${playerCard.image})`;
    let name = document.querySelector("#name-player-card");
    name.innerHTML = `${playerCard.name}`;
    let options = document.querySelector(".options");
    let optionsText = "";
    for (var attribute in playerCard.attributes) {
        optionsText += "<label><input type='radio' name='attribute' value='" + attribute + "'>" + attribute + ":" + playerCard.attributes[attribute] + "</label>"
    }
    options.innerHTML = optionsText;
    let number = document.querySelector("#number-player-card");
    number.innerHTML = `${playerCard.number}`;
}

function getCheckedAttribute() {
    let inputsAttributes = document.getElementsByName("attribute");
    for (var i in inputsAttributes) {
        if (inputsAttributes[i].checked) {
            return inputsAttributes[i].value;
        }
    }
}

function sortMachineCard() {
    indexMachineCard = Math.floor(Math.random() * cards.length);
    machineCard = cards[indexMachineCard];
    cards.splice(indexMachineCard,1);
}

function showMachineCard() {
    machineCardElement.style.backgroundImage = "url('https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png')";
    let photo = document.querySelector(".photo-machine-card");
    photo.style.backgroundImage = `url(${machineCard.image})`;
    let name = document.querySelector("#name-machine-card");
    name.innerHTML = `${machineCard.name}`;
    let options = document.querySelector(".attributes");
    let optionsText = "";
    for (var attribute in machineCard.attributes) {
        optionsText += `<p>${attribute} : ${machineCard.attributes[attribute]}</p>`
    }
    options.innerHTML = optionsText;
    let number = document.querySelector("#number-machine-card");
    number.innerHTML = `${machineCard.number}`;
    machineCardElement.style.display = null;
}

function play() {
    let attribute = getCheckedAttribute();
    if (attribute == undefined) {
        alert("Choose an attribute to play!");
        return;
    }
    sortMachineCard();
    showMachineCard();
    result.style.display = null;
    if (playerCard.attributes[attribute] > machineCard.attributes[attribute]) {
        result.innerHTML = "<p>You won this battle!</p>";
        playerPoints+= 1;
    } else if (playerCard.attributes[attribute] < machineCard.attributes[attribute]) {
        result.innerHTML = "<p>You loose this battle!</p>";
        machinePoints += 1;
    } else if (playerCard.attributes[attribute] == machineCard.attributes[attribute]) {
        result.innerHTML = "<p>You tied with the machines!</p>";    
    }

    if (cards.length===0){
        if (playerPoints>machinePoints){
            result.innerHTML = "<p>You saved Zion and the humankind</p>"
        } else if (machinePoints>playerPoints){
            result.innerHTML = "<p>You failled and Zion will fall!</p>"
        }else{
            result.innerHTML = "<p>You and the machines tied and will have to coexist!</p>"
        }
        alert("Everything that has a beginning has an end!");
        return
    }
    updateCardsNumber();
    updateScore();
    chooseAttribute.style.display = "none";
    playButton.style.display = "none";
    sortButton.style.display = null;
}

function updateCardsNumber(){
    let divCardsNumber = document.getElementById("cards-number");
    let html = "Remaining Cards:"+ cards.length
    divCardsNumber.innerHTML = html;
}

function updateScore(){
    let divScore = document.getElementById("score");
    var html = "Player:"+ playerPoints +"/" + machinePoints;
    divScore.innerHTML = html;
}