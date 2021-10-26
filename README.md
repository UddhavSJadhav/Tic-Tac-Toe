# Tic-Tac-Toe

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
