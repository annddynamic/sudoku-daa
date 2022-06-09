
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

})();

export default Sudoku;
