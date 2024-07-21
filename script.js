let boxes = document.querySelectorAll(".box");

let turn = 'X';
let isGameOver = false;

boxes.forEach(e => {
    e.innerHTML = ""
    e.addEventListener("click", ()=>{
        if(!isGameOver && e.innerHTML === ""){
            e.innerHTML = turn;
            changeTurn();
            checkWin();
            checkDraw();
        }
    })
})


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
        let vlaue_0 = boxes[winConditions[i][0]].innerHTML;
        let value_1 = boxes[winConditions[i][1]].innerHTML;
        let value_2 = boxes[winConditions[i][2]].innerHTML;

        if(vlaue_0 != "" && vlaue_0 === value_1 && vlaue_0 == value_2){
            isGameOver = true;
            changeTurn();
            document.querySelector('#result').innerHTML = "Player " + turn + " Win";
            document.querySelector('#play-again').style.display = "inline";
            console.log(turn)
            for( j=0; j<3; j++){
                boxes[winConditions[i][j]].style.backgroundColor = "#08D9D6";
                boxes[winConditions[i][j]].style.color = "#000";
            }
        }
    }
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
            document.querySelector('#result').innerHTML =  "Draw!";
            document.querySelector('#play-again').style.display = "inline";
        }
    }
}

document.querySelector('#play-again').addEventListener("click", ()=>{
    isGameOver = false;
    turn = 'X';
    document.querySelector(".bg").style.left = "0";
    document.querySelector("#result").innerHTML = "";
    document.querySelector("#play-again").style.display = "none";

    boxes.forEach(e =>{
        e.innerHTML = "";
        e.style.removeProperty("background-color");
        e.style.color = "#fff";
    })
})