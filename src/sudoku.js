
const Sudoku = (function () {


    const GRIDSIZE=9;
    let board=[]
    let unSolvedBoard=[]

      
    function newGame(difficulty){

        board = [
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
        ]

        fillDiagonal(board)

        solveBoard(board)
        
        copySolvedBoard(board)
          
        removeKDigits(difficulty, unSolvedBoard)
       
    }

    function getSolvedBoard(){
        return board
    }

    function getUnsolvedBoard(){
        return unSolvedBoard
    }
   
    function randomNumberGenerator(n) {
        return  Math.floor(Math.random()*n+1)
    }

    function copySolvedBoard(board){
        for (var i = 0; i < board.length; i++){
            unSolvedBoard[i] = board[i].slice();
        }
    }

    function unUsedInBox(rowStart, colStart, num, board){
        for(let i =0; i<3; i++){
            for(let j =0; j<3; j++){
                if(board[rowStart+i][colStart+j]===num){
                    return false
                }
            }   
        }
        return true
    }

    function fillBox(row, col, board){
        let num
        for(let i =0; i<3; i++){
            for(let j =0; j<3; j++){
               do{
                  num=randomNumberGenerator(GRIDSIZE)  
               }while(!unUsedInBox(row, col, num, board))

               board[row+i][col+j]= num
            }   
        }
    }

    
    function fillDiagonal(board){
        for (let i=0; i<9; i+=3){
            fillBox(i,i,board)
        }
    }

    // check ====
    function isNumberInRow(board, number, row){
        for(let i=0; i<GRIDSIZE; i++){
            if(board[row][i]===number){
                return true
            }
        }
        return false
    }



})();

export default Sudoku;
