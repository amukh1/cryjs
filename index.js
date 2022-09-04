const Interpreter = require('./interpreter.js');

let int = new Interpreter();

int.read('>*2>v0^0')
// int.read('>>v0><>>*2>|>*3|<<*3v0^0>>v0^0')
// int.read('<<*3v0^0')

// ^{register} = output
// *{times} = last set of instructions x times
// | = new set of instructions
// > = increment
// < = decrement
// v{register} = set a register to current value