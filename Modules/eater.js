class Eater{
    constructor(x,y){
    this.x=x;
    this.y=y
    }
getNewCoordinates(){

    this.directions = [
    
    [this.x - 1, this.y - 1],
    
    [this.x , this.y - 1],
    
    [this.x + 1, this.y - 1],
    
    [this.x - 1, this.y ],
    
    [this.x + 1, this.y ],
    
    [this.x - 1, this.y + 1],
    
    [this.x , this.y + 1],
    
    [this.x + 1, this.y + 1]
    
    ];
    
}



  
chooseCell(character) {
    this.getNewCoordinates()

    var found = [];
    
    for (var i in this.directions) {
    
    var x = this.directions[i][0];
    
    var y = this.directions[i][1];
    if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
    if (matrix[y][x] == character && character==0||1||2||3) {
    
    found.push(this.directions[i]);
    
    }
}
    
    }
    
    return found;
    
    }
   



eat(){
let norVandak=random(this.chooseCell( Math.round(random(0,3))));
 if(norVandak){
matrix[this.y][this.x]=0
let newX =norVandak[0];
let newY = norVandak[1]
matrix[newY][newX]=4
this.x =newX
this.y =newY}

}
}
