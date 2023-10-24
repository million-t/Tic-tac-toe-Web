

const gameScreen = document.getElementById('gameScreen')

const mainBody =  document.getElementsByTagName("BODY")[0]

let allCells = Array.from(document.getElementsByClassName('cell'))
let board = Array(9).fill('');


const players = ["X", "O"];
let currentPlayerIndex = 0;

let clickCount = 0
let won = false


let darkMode = 0
function changeMode(){
    
    if (!darkMode){

        mainBody.style.backgroundColor = 'var(--bgColorDark)'
        allCells.forEach(cell => cell.style.borderColor = 'var(--darkBorder)')
        
        if (!won){
            allCells.forEach(cell => cell.style.color = 'var(--tokenColorDark)')
            
        }
        
    }
    
    else {

        mainBody.style.backgroundColor = 'var(--bgColorLight)'
        allCells.forEach(cell => cell.style.borderColor = 'var(--lightBorder)')
        
        if (!won){
            allCells.forEach(cell => cell.style.color = 'var(--tokenColorLight')
        }
    }
    darkMode = 1 - darkMode
}


function cellClick(e){
    const id = e.target.id
  
    if (!won && board[id - 1] == ''){
        
        clickCount += 1
        board[id - 1] = players[currentPlayerIndex]
        
        allCells[id - 1].innerHTML = players[currentPlayerIndex]
        
        if (gameWon(players[currentPlayerIndex])){
            
            return
        }
        else if (clickCount == 9){
            restart()    
        }

        else {
            currentPlayerIndex = 1 - currentPlayerIndex 
        }
    }
}
function restart(){
    won = false
    board = Array(9).fill('')

    currentPlayerIndex = 0
    clickCount = 0
    
    allCells.forEach(cell => cell.innerHTML = '')

    if (darkMode)
        {allCells.forEach(cell => cell.style.color = 'var(--tokenColorDark)')}
    else
        {allCells.forEach(cell => cell.style.color = 'var(--tokenColorLight)')}
    

    document.getElementById("winningBoard").innerHTML = ''
    
    
}

function firework(first, second, third){

    won = true
    
    document.getElementById(first + 1).style.color = "var(--tokenWinColor)"
    document.getElementById(second + 1).style.color = "var(--tokenWinColor)"
    document.getElementById(third + 1).style.color = "var(--tokenWinColor)"

    document.getElementById("winningBoard").innerHTML = players[currentPlayerIndex] + " Won"

}

function gameWon(player){
            
    
        if (board[0] == player && board[1] == player && board[2] == player) {
            firework(0, 1 , 2)
            return true

        }
        else if (board[3] == player && board[4] == player && board[5] == player){
            firework(3, 4, 5)
            return true

        }
        else if (board[6] == player && board[7] == player && board[8] == player){
            firework(6, 7, 8)
            return true

        }
        else if (board[0] == player && board[3] == player && board[6] == player){
            firework(0, 3, 6)
            return true

        }
        else if (board[1] == player && board[4] == player && board[7] == player){
            firework(1, 4, 7)
            return true

        }
        else if (board[2] == player && board[5] == player && board[8] == player){
            firework(2, 5, 8)
            return true
        }
        else if (board[0] == player && board[4] == player && board[8] == player){
            firework(0, 4, 8)
            return true
        }
        else if (board[2] == player && board[4] == player && board[6] == player){
            firework(2, 4, 6)
            return true
        }
        
        return false
    
}

const game = () => {
    allCells.forEach(cell => cell.addEventListener('click', cellClick))
}
game()