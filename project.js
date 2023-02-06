function generateMatrix(length, gr, grEa, pre, ga, bo, ma ) {
    let matrix = [];

    for (let i = 0; i < length; i++) {
        matrix.push([]);

        for (let j = 0; j < length; j++) {
            matrix[i].push(0);
        }
    }

    for (let p = 0; p < gr; p++) {
        let x = Math.floor(Math.random() * length);
        let y = Math.floor(Math.random() * length);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let o = 0; o < grEa; o++) {
        let x = Math.floor(Math.random() * length);
        let y = Math.floor(Math.random() * length);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 2;
        }
    }
    for (let c = 0; c < pre; c++) {
        let x = Math.floor(Math.random() * length);
        let y = Math.floor(Math.random() * length);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 3;
        }
    }
    for (let a = 0; a < ga; a++) {
        let x = Math.floor(Math.random() * length);
        let y = Math.floor(Math.random() * length);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 4;
        }
    }
    for (let a = 0; a < ga; a++) {
        let x = Math.floor(Math.random() * length);
        let y = Math.floor(Math.random() * length);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 5;
        }
    }
  
    for (let l = 0; l < ma; l++) {
        let x = Math.floor(Math.random() * length);
        let y = Math.floor(Math.random() * length);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 6;
        }
    }

    return matrix;


}









var side = 100;
var grassArr = [];
var grassEaterArr = [];
var PredatorArr = [];
var EaterArr=[];
var NewArr=[];
let matrix = generateMatrix(10, 25, 18, 4, 2, 10, 5);
function setup() {
   

    frameRate(1);

    createCanvas((matrix[0].length * side) + 1, (matrix.length * side) + 1);

    background('#acacac');



    /////objectneri stexcum yst matrici
    for (var y = 0; y < matrix.length; ++y) {

        for (var x = 0; x < matrix[y].length; ++x) {

            if (matrix[y][x] == 1) {

                var gr = new Grass(x, y);

                grassArr.push(gr);

            }
            else if (matrix[y][x] == 2) {
                var dexin = new GrassEater(x, y)
                grassEaterArr.push(dexin)


            }
            else if (matrix[y][x] == 3) {
                var gishatic = new Predator(x, y)
                PredatorArr.push(gishatic)
            }
            else if (matrix[y][x] == 4) {
                var utox = new Eater(x, y)
             EaterArr.push(utox)
            }
            else if (matrix[y][x] == 5) {
                var new1 = new NewCharecter(x, y)
             NewArr.push(new1)
            }

        }

    }


}

function draw() {

    for (var y = 0; y < matrix.length; y++) {

        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {

                fill("green");

                rect(x * side, y * side, side, side);

            }

            else if (matrix[y][x] == 0) {

                fill("#acacac");

                rect(x * side, y * side, side, side);

            }
            else if (matrix[y][x] == 2) {
                fill('yellow');
                rect(x * side, y * side, side, side);

            }
            else if (matrix[y][x] == 3) {
                fill('red');
                rect(x * side, y * side, side, side);

            }
            else if (matrix[y][x] == 4) {
              
                fill('blue')
                rect(x * side, y * side, side, side);
               

            }else if (matrix[y][x] == 5) {
                fill('orange');
                rect(x * side, y * side, side, side);

            }
         
         
            
            
        }

    }
    


    for (var i in grassArr) {

        grassArr[i].mul();

    }



    for (var i in grassEaterArr) {

          grassEaterArr[i].mul() 
    }


    for (var i in grassEaterArr) {

        grassEaterArr[i].eat()

    }
    for (var i in EaterArr) {

        EaterArr[i].eat()   

    }



    for(var i in PredatorArr){

        PredatorArr[i].mul() 
      }


        for(var i in PredatorArr){

          PredatorArr[i].eat()

        }

        for(var i in NewArr){

            NewArr[i].mul() 
          }
    
    
            for(var i in NewArr){
    
            NewArr[i].eat()
    
            }


        







}
