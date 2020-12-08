'use strict';


const log = function(a,b, ...rest){
    console.log(a,b,rest);
};

log(12,3,'dfsfs',323,'sdsd');


function calcOrDouble(number, basis=2){
    console.log(number * basis);
}

calcOrDouble(3);