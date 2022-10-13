let btns = document.querySelectorAll("button"); //lista buttonów
let btnValue = document.getElementsByClassName("btn-value"); //lista span w buttonach
let xValue = "close"; //tekst pojawiający się w span imitujący znak X
let oValue = "circle"; //tekst pojawiający się w span imitujący znak O
let player = document.getElementById("player"); //niewidoczny paragraf wywołujący kolejkę playera
let pOne = "Player One"; //tekst w w.w. paragrafie określający playera 1
let pTwo = "Player Two"; //tekst w w.w. paragrafie określający playera 2
let playerOneScore = document.getElementById("player-one-score");
let playerTwoScore = document.getElementById("player-two-score");
let scoreOne = 0;
let scoreTwo = 0;
playerOneScore.innerHTML = scoreOne;
playerTwoScore.innerHTML = scoreTwo;
let resetButton = document.getElementById("reset-button");

//Pętla iteruję przez tabele buttonów nadając im Event Listenery
for (let i = 0; i < btns.length; i++) {
  let btn = btns[i];
  
  btn.addEventListener("click", function(event) {
    event.preventDefault(); //nie pozwala na domyślną wartość wywołania funkcji, czyli natychmiastowe wykonanie

    if (player.innerHTML == pOne) { //jeśli niewidoczny paragraf zawiera tekst Player One to wywołujemy znak w kratce i zmianę playera
      printX(this.id); //nie dokońca rozumiem czremu this.id zadziałało, ale skoro działą to jest ok
    } else if (player.innerHTML == pTwo) { //jeśli niewidoczny paragraf zawiera tekst Player Two to wywołujemy znak w kratce i zmianę playera
      printY(this.id); //nie dokońca rozumiem czremu this.id zadziałało, ale skoro działą to jest ok
    }
  })
}

function changePlayer() { //funckja odpowiedzialna zmianę tekstu w paragrafie player, który określa kolejność gracza
  if (player.innerHTML == pOne) { //jeśli paragraf = Player One to:
    player.innerHTML = pTwo;                                        //zmień na Player Two
  } else if (player.innerHTML == pTwo) { //jeśli paragraf = Player Two to:
    player.innerHTML = pOne;                                              //zmień na Player One
  }
}

function printX(clicked_id) { //Funkcją odpowiedzialna za zwrócenie X w kratce na planszy, argument clicked_id odnosi się do klikniętego buttona
    let idBtn = "s" + clicked_id; //kreatywne wywołanie obiektu span w button (button ma klasę item-x, a span w środku sitem-x)
    let clicked = document.getElementById(idBtn); //jak wyżej, stworzenie zmiennej z obiektu posiadającego id o wartości sitem-x


    if (clicked.innerHTML == " ") { //jeśli naciśnięty przycisk nie ma w sobie tekstu to:
      clicked.innerHTML = xValue;                                                         //zmień jego tekst na X
      console.log("printX");
      changePlayer();
      winCheck();
    } else if (clicked.innerHTML == xValue || clicked.innerHTML == oValue) { //jeśli zaś w przycisku jest już X ||("lub") Y to w konsoli napisz "zajęte", a na planszy nic nie rób 
      console.log("zajęte");
    }
}

function printY(clicked_id) { //Funkcją odpowiedzialna za zwrócenie Y w kratce na planszy
    let idBtn = "s" + clicked_id;
    let clicked = document.getElementById(idBtn);

    if (clicked.innerHTML == " ") { //jeśli naciśnięty przycisk nie ma w sobie tekstu to:
      clicked.innerHTML = oValue;                                                         //zmień jego tekst na Y
      console.log("printY");
      changePlayer();
      winCheck();
    } else if (clicked.innerHTML == xValue || clicked.innerHTML == oValue) { //jeśli zaś w przycisku jest już X ||("lub") Y to w konsoli napisz "zajęte", a na planszy nic nie rób 
      console.log("zajęte");
    }
}

function winCheck() { //funkcja sprawdza czy któryś z graczy wygrał za pomocą wartości elementu z tabeli
  let firstRow = btnValue[0].innerHTML + btnValue[1].innerHTML + btnValue[2].innerHTML;
  let secondRow = btnValue[3].innerHTML + btnValue[4].innerHTML + btnValue[5].innerHTML;
  let thirdRow = btnValue[6].innerHTML + btnValue[7].innerHTML + btnValue[8].innerHTML;

  let firstColumn = btnValue[0].innerHTML + btnValue[3].innerHTML + btnValue[6].innerHTML;
  let secondColumn = btnValue[1].innerHTML + btnValue[4].innerHTML + btnValue[7].innerHTML;
  let thirdColumn = btnValue[2].innerHTML + btnValue[5].innerHTML + btnValue[8].innerHTML;

  let firstDiagonal = btnValue[0].innerHTML + btnValue[4].innerHTML + btnValue[8].innerHTML;
  let secondDiagonal = btnValue[2].innerHTML + btnValue[4].innerHTML + btnValue[6].innerHTML;



  if (firstRow == "closecloseclose" || secondRow == "closecloseclose" || thirdRow == "closecloseclose" || firstColumn == "closecloseclose" || secondColumn == "closecloseclose" || thirdColumn == "closecloseclose" || firstDiagonal == "closecloseclose" || secondDiagonal == "closecloseclose") {
    playerOneAddScore();
  } else if (firstRow == "circlecirclecircle" || secondRow == "circlecirclecircle" || thirdRow == "circlecirclecircle" || firstColumn == "circlecirclecircle" || secondColumn == "circlecirclecircle" || thirdColumn == "circlecirclecircle" || firstDiagonal == "circlecirclecircle" || secondDiagonal == "circlecirclecircle") {
    playerTwoAddScore();
  }
}

function playerOneAddScore() { //funckja dodaje punkt wygranemu za pomocą inkrementacji wyświetlanego wyniku
  playerOneScore.innerHTML = ++scoreOne;
  resetRound();
}

function playerTwoAddScore() {
  playerTwoScore.innerHTML = ++scoreTwo;
  resetRound();
}

resetButton.addEventListener ("click", function() {
  resetRound();
});

function resetRound() { //funkcja resetuje plansze pozwalając zagrać jeszcze raz
  for (let i = 0; i < btnValue.length; i++){
    let btnV = btnValue[i];
    btnV.innerHTML = " ";
  };
}


