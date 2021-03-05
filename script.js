const playerTurn = document.getElementById('playerTurn')
const reset = document.getElementById('reset')
reset.addEventListener('click', resetGame)

let clickedCell = ["", "", "", "", "", "", "", "", ""]
let turn
let gameOver
resetGame()

// const getGameResult = (player) => { return `${player} wins`}

const checkResult = (dine) => {
    if(clickedCell[0] === dine && clickedCell[1] === dine && clickedCell[2] === dine) return dine
    if(clickedCell[3] === dine && clickedCell[4] === dine && clickedCell[5] === dine) return dine
    if(clickedCell[6] === dine && clickedCell[7] === dine && clickedCell[8] === dine) return dine
    if(clickedCell[0] === dine && clickedCell[4] === dine && clickedCell[8] === dine) return dine
    if(clickedCell[2] === dine && clickedCell[4] === dine && clickedCell[6] === dine) return dine
    if(clickedCell[0] === dine && clickedCell[3] === dine && clickedCell[6] === dine) return dine
    if(clickedCell[1] === dine && clickedCell[4] === dine && clickedCell[7] === dine) return dine
    if(clickedCell[2] === dine && clickedCell[5] === dine && clickedCell[8] === dine) return dine
    else return false
}

const clickHandler = (id)  => {
    if(!gameOver){
        if(clickedCell[id-1] == ""){
            let clickedBlock = document.getElementById(`${id}`)
            let dine;
            dine = (turn) ? "X" : "O"
            clickedBlock.innerText = dine
            clickedCell[id-1] = dine
            if(checkResult(dine) !== false) {
                let winner = (turn) ? "Player1" : "Player2"
                window.alert(`Congratulations! ${winner} wins`)
                gameOver = true
                playerTurn.innerText = ""
                resetGame()
            } else if(!clickedCell.includes("")){
                window.alert('Draw!')
                gameOver = true
                playerTurn.innerText = ""
                resetGame()
            } else {
                turn = !turn
                if(turn) playerTurn.innerText = "Player1 Turn"
                else playerTurn.innerText = "Player2 Turn"
            }
        }
    }
}

function resetGame(){
    document.querySelectorAll('.block').forEach(cell => {
        cell.innerText = ""
    })
    clickedCell = ["", "", "", "", "", "", "", "", ""]
    gameOver = false
    turn = true
    playerTurn.innerText = "Player1 Turn"
    document.querySelectorAll('.block').forEach(cell => {
        cell.onclick = function() {clickHandler(cell.id)}
    })
}

document.querySelectorAll('.block').forEach(cell => {
    cell.onclick = function() {clickHandler(cell.id)}
})