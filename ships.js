// the pos is an array a 2d array with as many values as the lenght of the ship 
// ship of length 2 [[1,2][1,3]] so the ship takes up these spots in gameboard array 
/*
spaces =
sunk  : fals'e','e','e','e','e','e','e','e','e'
pos : [
    {
        x:1,
        y:1,
        hit: false
    }
            {
        x:1,
        y:1,
        hit: false
    }
            {
        x:1,
        y:1,
        hit: false
    }
]

*/
const shipFactory = (spaces) => {
  let sunk = false;

  const hit = (pos) => {
    for (let i = 0; i < spaces.length; i += 1) {
            if(spaces[i].x == pos.x && spaces[i].y === pos.y){
                spaces[i].hit = true;
                return true; 
            }
        }
        return false;

    }

    const hasSunk = () =>{
        let hits =0; 
        for(let i = 0 ; i<spaces.length; i++){
            if(spaces[i].hit == true){
                hits++; 
            }
        }
        if(hits == spaces.length){
            sunk = true;
            return sunk
        }
        else{
            return false;
        }

    }
    return {
        hit,
        hasSunk,
        spaces
    }

}


const gameBoard = () =>{

    let board =  [
                ['e','e','e','e','e','e','e','e','e','e'],
                ['e','e','e','e','e','e','e','e','e','e'],
                ['e','e','e','e','e','e','e','e','e','e'],
                ['e','e','e','e','e','e','e','e','e','e'],
                ['e','e','e','e','e','e','e','e','e','e'],
                ['e','e','e','e','e','e','e','e','e','e'],
                ['e','e','e','e','e','e','e','e','e','e'],
                ['e','e','e','e','e','e','e','e','e','e'],
                ['e','e','e','e','e','e','e','e','e','e'],
                ['e','e','e','e','e','e','e','e','e','e'],] 

    const ships = []; 

    const placeShip = (cords) =>{
        
        cords.forEach(cord =>{
            let x = cord.x;
            let y = cord.y; 
            board[x][y] = 's';
        })

        const ship = shipFactory(cords)
        ships.push(ship);
        
    }
    const recieveAttack = (cords) =>{
        let flag = false
        
        ships.forEach(ship =>{
            if(ship.hit(cords)){
                flag = true; 
            }
        })
        if(flag){
            board[cords.x][cords.y] = 'h'
        }else{
            board[cords.x][cords.y] = 'm'

        }

    }

    // goes through ships array and checks all ships to see if there are any left standing
    // returns true if all ships have sunk 
    //else returns false; 
    const allSunk = () =>{
        let shipsCount = ships.length
        let i =0 ; 
        ships.forEach(ship =>{
            if(ship.hasSunk()){
                i++;
            }
        })

        if( i === shipsCount){
            return true;
        }
        return false; 

    }
    return{
        ships,
        placeShip,
        recieveAttack,
        allSunk,
        board

    }

}











export{
    shipFactory,
    gameBoard
}
