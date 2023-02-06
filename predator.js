class Predator {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 10;
        this.directions = [];
    }
    getNewCoordinates() {

        this.directions = [

            [this.x - 1, this.y - 1],

            [this.x, this.y - 1],

            [this.x + 1, this.y - 1],

            [this.x - 1, this.y],

            [this.x + 1, this.y],

            [this.x - 1, this.y + 1],

            [this.x, this.y + 1],

            [this.x + 1, this.y + 1]

        ];

    }


    die() {
       
            matrix[this.y][this.x] = 0
        
    
     
        for (var i in PredatorArr) {

            if (this.y == PredatorArr[i].y && this.x == PredatorArr[i].x) {
                PredatorArr.splice(i, 1);
                break;
            }
        }
       

        
    }

    chooseCell(character) {
        this.getNewCoordinates()

        var found = [];

        for (var i in this.directions) {

            var x = this.directions[i][0];

            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {

                    found.push(this.directions[i]);

                }
            }

        }

        return found;

    }
    mul() {

        if (this.energy >= 12) {
            let newCell = random(this.chooseCell(0));

            // console.log( newCell,this.energy);

            if (newCell) {

                var norPredator = new Predator(newCell[0], newCell[1]);

                PredatorArr.push(norPredator);
                
                matrix[newCell[1]][newCell[0]] = 3;
                // matrix[this.y][this.x]=0

                
               
                
                this.energy = 5
            }


        }


    }
    move() {
        this.energy--
        if (this.energy > 0) {
            // getNewCordinate()
            let bolorVandaknery = this.chooseCell(0)
            let norVandak = random(bolorVandaknery)
            if (norVandak) {
                matrix[this.y][this.x] = 0
                let newX = norVandak[0];
                let newY = norVandak[1]
                matrix[newY][newX] = 3
                this.x = newX
                this.y = newY
            }
        }
        else { 
            this.die()
         }
    }





    eat() {
        if (this.energy > 0) {

            let norVandak = random(this.chooseCell(2));

            if (norVandak) {
                this.energy++
                matrix[this.y][this.x] = 0
                let newX = norVandak[0];
                let newY = norVandak[1]
                matrix[newY][newX] = 3
                this.x = newX
                this.y = newY
            }
            else { this.move() }

        }



    }


}