let boxes = document.querySelectorAll(".box");

let turn = 'X';
let isGameOver = false;
let gameMode = '';
boxes.forEach(e => {
    e.innerHTML = ""
})


document.getElementById('pvp-mode').addEventListener('click', ()=> startGame('PVP'));
document.getElementById('pvc-mode').addEventListener('click', ()=> startGame('PVC'));


function startGame(mode){
    gameMode = mode;    
    isGameOver = false;
    turn = 'X';
    document.querySelector('.bg').style.left = "0";
    document.querySelector('#result').innerHTML = "";
    document.querySelector('#play-again').style.display = "none";

    if(mode === "PVP"){
        document.getElementById('pvp-mode').style.backgroundColor = "#08D9D6";
        document.getElementById('pvp-mode').style.color = "#000";
        document.getElementById('pvc-mode').style.backgroundColor ="#8D493A";
        document.getElementById('pvc-mode').style.color = "#fff";

    }else if (mode === "PVC"){
        document.getElementById('pvc-mode').style.backgroundColor ="#08D9D6";
        document.getElementById('pvc-mode').style.color = "#000";
        document.getElementById('pvp-mode').style.backgroundColor = "#8D493A";
        document.getElementById('pvp-mode').style.color = "#fff";
    }

    boxes.forEach(e => {
        e.innerHTML = ""
        e.style.removeProperty("background-color");
        e.style.color = "#fff";
        e.removeEventListener("click", boxClickHandler)
        e.addEventListener("click", boxClickHandler)
    })
}

function boxClickHandler(event){
    let e = event.target;
    if (!isGameOver && e.innerHTML ===""){
        e.innerHTML = turn;
        if(!checkWin()){
            changeTurn();
            checkDraw();
            if(gameMode === "PVC" && turn === "O" && !isGameOver){
                setTimeout(computerMove, 500);
            }
        }
    }
}



function changeTurn() {
    if(turn === "X"){
        turn = "O"; 
        document.querySelector(".bg").style.left = "85px";
    }else{
        turn = "X";
        document.querySelector(".bg").style.left = "0";
    }
}

function checkWin() {
    let winConditions = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]

    for(let i=0; i<winConditions.length; i++){
        let value_0 = boxes[winConditions[i][0]].innerHTML;
        let value_1 = boxes[winConditions[i][1]].innerHTML;
        let value_2 = boxes[winConditions[i][2]].innerHTML;

        if(value_0 != "" && value_0 === value_1 && value_0 == value_2){
            isGameOver = true;
            document.querySelector('#result').innerHTML = "Player " + turn + " Win 🎇";
            document.querySelector('#play-again').style.display = "inline";
            for( j=0; j<3; j++){
                boxes[winConditions[i][j]].style.backgroundColor = "#08D9D6";
                boxes[winConditions[i][j]].style.color = "#000";
            }
            return true;
        }
    }
    return false;
}

function checkDraw() {
    if(!isGameOver){
        let isDraw = true;
        boxes.forEach(e =>{
            if(e.innerHTML === "") 
                isDraw = false;
        })
        if(isDraw){
            isGameOver = true;
            document.querySelector('#result').innerHTML =  "Draw! 🤝";
            document.querySelector('#play-again').style.display = "inline";
        }
    }
}

function computerMove(){
    let emptyBoxes = [];
    boxes.forEach((e,i)=>{
        if(e.innerHTML === ""){
            emptyBoxes.push(i)
        }
    })

    let randomIndex = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
    boxes[randomIndex].innerHTML = "O";
    if(!checkWin()){
        changeTurn();
        checkDraw();
    }
}

document.querySelector('#play-again').addEventListener("click", ()=>{
    console.log(gameMode);
    if(gameMode === "PVP"){
        document.getElementById('pvp-mode').style.backgroundColor = "#8D493A";
        document.getElementById('pvp-mode').style.color = "#FFF";

    }else{
        document.getElementById('pvc-mode').style.backgroundColor ="#8D493A";
        document.getElementById('pvc-mode').style.color = "#FFF";
    }
    startGame(gameMode);
})