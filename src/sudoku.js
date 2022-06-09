
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


})();

export default Sudoku;
