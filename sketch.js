let myArray = [1, 2, 3, "blahhh"]
for (let anything of myArray) {
    console.log(anything)
}

class Cell {
    constructor(pos, size) {
        this.pos = pos
        this.size = size
        this.subGrid = new SubGrid(this.size)

    }
    show(){
        rect (this.pos.x, this.pos.y, this.size)
        push ()
        translate (this.pos.x, this.pos.y)
        this.subGrid.show()
        pop ()
    }
}

class SubGrid {
    constructor(size) {
        this.size = size
        this.cells = []
        this.rowCols = round(random(2,9))
        this.cellSize = this.size/this.rowCols
        for (let col=0; col < this.rowCols; col+=1) {
            for (let row=0; row < this.rowCols; row+=1) {
                let posX = col * this.cellSize
                let posY = row * this.cellSize
                let posCell = {x: posX, y: posY}
                this.cells.push(posCell)

            }
        }
    }
    show() {
        for (let i=0; i< this.cells.length; i += 1){
            let currentCell = this.cells[i]
            rect(currentCell.x, currentCell.y, this.cellSize)
        }
    }
}

let grid = []
function setup() {
    createCanvas (400,400)
    let gridSize = 5
    let cellSize = width/gridSize

    for (let col=0; col < gridSize; col+=1) {
        for (let row=0; row < gridSize; row+=1) {
            let posX = col * cellSize
            let posY = row * cellSize
            let posCell = {x: posX, y: posY}
            let newCell = new Cell(posCell, cellSize)
            grid.push(newCell)
        }
    }
}

function draw() {
    background(220)
    for (let i = 0; i < grid.length; i +=1){
        let currentCell = grid[i]
        //rect (currentCell.pos.x, currentCell.pos.y, currentCell.size)
    currentCell.show()
}   
}

