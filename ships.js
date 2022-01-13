

// the pos is an array a 2d array with as many values as the lenght of the ship 
// ship of length 2 [[1,2][1,3]] so the ship takes up these spots in gameboard array 
/* 
spaces =
sunk  : false, 
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
const shipFactory = (length ,spaces ) => {
    let sunk = false


    const hit = (pos) =>{
        let x = pos.x; 
        let y = pos.y; 
        for(let i = 0; i<length; i++ ){
            if(spaces[i].x == pos.x && spaces[i].y == pos.y){
                spaces[i].hit = true;
                return true; 
            }
        }
        return false;

    }

    const hasSunk = () =>{
        let hits =0; 
        for(let i = 0 ; i<length; i++){
            if(spaces[i].hit == true){
                hits++; 
            }
        }
        if(hits == length){
            sunk = true;
            return sunk
        }
        else{
            return false;
        }

    }
    return {
        hit,
        hasSunk
    }

}


const gameBoard = () =>{

    let gameBoard = [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
]

const placeShip = () =>{
    
}




}

