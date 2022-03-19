var cardPhantomAssasin = {
  hero: "Phantom Assasin",
  image:
    "https://www.artifactfire.com/images/deck/phantom-assassin.png",
  attributes: {
    stregth: 5,
    agility: 9,
    intelligence: 10
  }
};

var cardShadowFiend = {
  hero: "Shadow Fiend",
  image:
    "https://www.artifactfire.com/images/deck/shadow-fiend.png",
  attributes: {
    stregth: 5,
    agility: 9,
    intelligence: 10
  }
};

var cardMachine;
var cardPlayer;
var deck = [cardPhantomAssasin, cardShadowFiend];

function sortCard() {
  var numberCardMachine = parseInt(Math.random() * 1); //alterar isso para ficar dinamico com o deck.legth
  cardMachine = deck[numberCardMachine];

  var numberCardPlayer = parseInt(Math.random() * 1);
  while (numberCardPlayer == numberCardMachine) {
    numberCardPlayer = parseInt(Math.random() * 1);
  }
  cardPlayer = deck[numberCardPlayer];

  document.getElementById("btnSort").disabled = true;
  document.getElementById("btnPlay").disabled = false;
  showPlayerCard();
}

function getSelectedAttribute() {
  var radioAttribute = document.getElementsByhero("attribute");
  for (var i = 0; i < radioAttribute.length; i++) {
    if (radioAttribute[i].checked) {
      return radioAttribute[i].value;
    }
  }
}

function play() {
  var attributeSelected = getSelectedAttribute();
  var divResult = document.getElementById("result");

  if (
    cardPlayer.attributes[attributeSelected] >
    cardMachine.attributes[attributeSelected]
  ) {
    htmlPrintResult = "<p class='final-result'>Win</p>";
  } else if (
    cardPlayer.attributes[attributeSelected] <
    cardMachine.attributes[attributeSelected]
  ) {
    htmlPrintResult = "<p class='final-result'>Lose</p>";
  } else {
    htmlPrintResult = "<p class='final-result'>Draw</p>";
  }
  divResult.innerHTML = htmlPrintResult;

  document.getElementById("btnPlay").disabled = true;
  showMachineCard();
}

function showPlayerCard() {
  var divPlayerCard = document.getElementById("card-player");
  divPlayerCard.style.backgroundImage = `url(${cardPlayer.image})`;
  var frame =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var attributes = "<div id='attributes' class='card-infos'>";

  var cardInfos = "";
  for (var attribute in cardPlayer.attributes) {
    cardInfos +=
      "<input type='radio' hero='attribute' value='" +
      attribute +
      "'>" +
      attribute +
      " " +
      cardPlayer.attributes[attribute] +
      "<br>";
  }
  var hero = `<p class="card-subtitle">${cardPlayer.hero}</p>`;

  divPlayerCard.innerHTML = frame + hero + attributes + cardInfos + "</div>";
}

function showMachineCard() {
  var divcardMachine = document.getElementById("card-Machine");
  divcardMachine.style.backgroundImage = `url(${cardMachine.image})`;
  var frame =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var attributes = "<div id='attributes' class='card-infos'>";

  var cardInfos = "";
  for (var attribute in cardMachine.attributes) {
    cardInfos +=
      "<p type='text' hero='attribute' value='" +
      attribute +
      "'>" +
      attribute +
      " " +
      cardMachine.attributes[attribute] +
      "</p>";
  }
  var hero = `<p class="card-subtitle">${cardMachine.hero}</p>`;

  divcardMachine.innerHTML = frame + hero + attributes + cardInfos + "</div>";
}