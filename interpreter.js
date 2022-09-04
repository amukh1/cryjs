class interpreter {
    constructor(){
        this.registers = [];
        this.current = 0;
        this.currentSet = '';
    }

    read(program){
let code = program.split("");
code.forEach((ins, index)=> {
    // console.log(ins)
    switch(ins){
        case ">":
            this.current++;
            this.currentSet += ins;
        break;
        case "<":
            this.current--;
            this.currentSet += ins;
        break;
        case "v":
            this.registers[code[index + 1]] = this.current
            this.currentSet += ins;
        break;
        case "^":
            console.log(this.registers[code[index + 1]])
            this.currentSet += ins;
        break;
        case "*":
            let times = code[index + 1];
            // console.log(code[index + 1])
            for(let i = 0; i <= times - 1; i++){
                // console.log('a')
                let cs = this.currentSet
                this.read(this.currentSet);
                this.currentSet = cs
            }
            index = index + 3;
        break;
        case "|":
this.currentSet = '';
        break;
    }
})
    }
}

// example program: >>v0><>>*2>|>*3|<<*3^0
// 01 02123455 6 9 87654321
// output: 1

// ^ = output
// * = last set of instructions x times
// | = new set of instructions
// > = increment
// < = decrement
// v = set a register to current value

module.exports = interpreter;