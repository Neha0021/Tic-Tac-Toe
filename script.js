let boxex = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector(".new-btn");
let msg = document.querySelector(".msg");
let win = document.querySelector("#win")

let turnO = true; //playerX, playerO
let winPatterns =[[0, 1, 2], [3, 4, 5], [6,7,8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]


const resetGame = () => {
    turnO = true;
    enableBoxes();
    msg.classList.add("hide")
}
boxex.forEach((box) =>{
    box.addEventListener("click", () =>{
        console.log("clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        //to disabled change in button on repeat click
        box.disabled = true;
        checkWinner();
    })
})

const disableBoxes = () => {
    for(let box of boxex){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxex){
        box.disabled = false;
        box.innerText ="";
    }
}

const showWinner = (winner) => {
    msg.innerText = `congratulation, Winner is ${winner}`;
    msg.classList.remove("hide")
    disableBoxes();
    
}

const checkWinner =() => {
    for(let pattern of winPatterns){
        let pos1 = boxex[pattern[0]].innerText;
        let pos2 = boxex[pattern[1]].innerText;
        let pos3 = boxex[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "", pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner", pos3);
                showWinner(pos3);
            }
        }
    }

}

newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame)