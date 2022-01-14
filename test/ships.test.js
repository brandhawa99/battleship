import {shipFactory, gameBoard} from '../ships'

test('check if ship has sunk',() =>{
  const ship = shipFactory([{x:0,y:0,hit:false},{x:0,y:1,hit:false}])
  ship.hit({x:0,y:1});
  ship.hit({x:0,y:0});

  expect(ship.hasSunk()).toBeTruthy()

})

test('check if ship has Not sunk',() =>{
    const ship = shipFactory([{x:0,y:0,hit:false},{x:0,y:1,hit:false}])
    ship.hit({x:0,y:1});
    ship.hit({x:0,y:3});

    expect(ship.hasSunk()).toBeFalsy()

})

test('if ship has been placed at correct corrdinates', ()=>{

    const game = gameBoard(); 
    game.placeShip([{x:0,y:3,hit:false},{x:0,y:1,hit:false},{x:0,y:2,hit:false}])

    expect(game.ships[0].spaces[0]).toEqual({x:0,y:3,hit:false})
    expect(game.ships[0].spaces[1]).toEqual({x:0,y:1,hit:false})
    expect(game.ships[0].spaces[2]).toEqual({x:0,y:2,hit:false})

})

test('test if ships can be placed and update board', () =>{
    const myBoard = gameBoard(); 

    myBoard.placeShip([{x:0,y:3,hit:false},{x:0,y:1,hit:false},{x:0,y:2,hit:false}])
    expect(myBoard.board[0][3]).toBe('s');
    expect(myBoard.board[0][2]).toBe('s');
    expect(myBoard.board[0][1]).toBe('s');

})
test('test if ships can be atacked',() =>{
    const myBoard = gameBoard(); 
    myBoard.placeShip([{x:0,y:3,hit:false},{x:0,y:1,hit:false},{x:0,y:2,hit:false}])
    myBoard.recieveAttack({x:0,y:3});
    expect(myBoard.board[0][3]).toBe('h');

})


test('test all sunk function', () =>{
    const myBoard = gameBoard();
    myBoard.placeShip([{x:0,y:3,hit:false},{x:0,y:1,hit:false},{x:0,y:2,hit:false}])
    myBoard.recieveAttack({x:0,y:3});
    myBoard.recieveAttack({x:0,y:2});
    myBoard.recieveAttack({x:0,y:1});

    expect(myBoard.allSunk()).toBe(true);


})