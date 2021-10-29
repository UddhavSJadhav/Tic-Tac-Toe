# Tic-Tac-Toe

Enjoy: https://uddhavsjadhav.github.io/Tic-Tac-Toe/

Developing of project:
*Started this mini-project as fun way to gain knowledge on logic using JavaScript.
*My main motive was to just get started with something I know.
*Used pure HTML,CSS and JavaScript while developing.
*Some of the logic or AI code was influenced from a tutorial of tic-tac-toe which was whole in python by YouTuber Tech with Tim.

Documentation:
\*This will be a short guide or "steps that I followed" through-out this mini-project.

-First I started with html designing the board, which was simple to do. Gave body the height of screen as there was nothing to added than a square board. Then came the header part and after that board.
-For board, coded a square div making it a grid and in it nine other div. Giving each child div an id and adding a onclick event to send the id to the processing code i.e JavaScript.
-In JS file, added let variables at the start.

board = array to store the string 'x' or 'o' in the same index no as div's id. First value was untouched and will remain empty to avoid complication in further code.
compSym = to store the string of the symbol that the computer will play in that round.
playerSym = same as compSym but for player or user.
isCompMove = boolean value to store the current move is of computer or not.
foundCompWinner = boolean value to store if computer is found winner.
counterComp = to store number of moves played by computer.
counterPlayer = same as above butt for player.

x_sym = it has html code for the symbol of X that to inserted in the div tag of grid board.
o_sym = same as above but for symbol O.

-then started with functions section, above are all the functions used.

Functions-
setPlayer(xo) = this function decides the symbols to be assigned to computer and player when it is called.
addXOsym(id) = this function is used to symbols of player when clicked on the div grid.
compMove() = this function is used to get computers move and add symbol accordingly.
addToEdges(possibleMoves) = this function is kind od extended function of compMove(). It adds computer symbols to edges of board as required.
checkBoard(id) = checks if there is position available on board where user has clicked or computer has commanded.
checkWinner(dBoard = [""]) = checks if there is winner on the board.
checkResult() = checks the counter or winner and displays the result accordingly.
clearSlate() = reset the variables values.
playAgain() = restarts the game if player wants to play again.

-When player visits the page, they are greeted with a floating rules section and are allowed to choose X or O symbol. When player selects the symbol that he/she wants to play, the setPlayer() event is triggered. This function takes boolean value as parameter. True means player has selected X as symbol and False means player has selected O, so when X button is clicked the function called is "setPlayer(true)" and when O is clicked "setPlayer(false)" is called.
-If player chooses X which is also first move, board which is hidden is made visible. Player has to click on one of the nine div in grid div. On click addXOsym() function is called and with it div's id is passed as parameter. Symbol is added in the same div with that id passed through paramter. Increament in player counter.
-Check Winner or tie or Move with computer move.
-Next comes compMove() function which goes through a algorithm as follows:

1. Find out possibles moves which means empty string in board variable.
2. If center is Empty go for center.
3. Check if there is winning move for computer in next move or if there is winning for opponent in next move and play your move there.
4. Check if two adjacent corners are occupied by opponent and place your move on edge.(as center will be check on 2 step)
5. Check for empty corners and then for edges.

-Increment in computer counter and Check Winner or tie or Move with player move.
-Repeat
-Maximum number of moves a single player can make are 5 and the other player will stuck on 4 moves. So counter reached 5 and winner is not found Tie is declared.
