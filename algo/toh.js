// Tower of Hanoi, Lucas Tower, Brhamas Tower

let src = [1,2,3];
let dest = [];
let aux = [];

/*

1 When src = [1]
    src[0] -> dest[0]

2 When src = [1,2]
    src[0] -> aux[0]
    src[1] -> dest[1]
    aux[0] -> dest[2]

3 When src = [1,2,3]
    src[0] -> dest[0]
    src[1] -> aux[0]
    dest[0] -> aux[1]
    src[2] -> dest[0]
    aux[1] -> src[0]
    aux[0] -> dest[1]
    src[0] -> dest[2]
 */

 function toh (src, dest, aux) {

 }
