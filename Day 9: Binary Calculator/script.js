window.onload = function(){

    document.body.style.width = '33%';

    let res = document.createElement('div');
    res.id = 'res';
    res.style.backgroundColor = 'lightgray';
    res.style.border = 'solid';
    res.style.height = '48px';
    res.style.fontSize = '20px';
    
    document.body.appendChild(res);
// created the result area

    let container = document.createElement('div');
    container.id = 'btns';
    
    const ids = ['0', '1', 'Clr', 'Eql', 'Sum', 'Sub', 'Mul', 'Div'];
    const sym = ['0', '1', 'C', '=', '+', '-', '*', '/'];
    let symbols = {
        // object to map the buttons to their symbols
    }

    // mapping the buttons to their symbols
    for(let i in ids){
        symbols[ids[i]] = sym[i];
    }

    let classes = {
        '0': 'num',
        '1': 'num',
        'Clr': 'func',
        'Eql': 'func',
    }

    for(let i of ids){
        let thisClass = classes[i] === 'num' || classes[i] === 'func' ? classes[i] : 'symbols';
        let currButton = createButton('btn' + i, symbols[i], thisClass);
        if(i === 'Clr' || i === 'Eql'){
            currButton.onclick = i === 'Clr' ? clear : equal;
        }else{
            currButton.onclick = function(){
                res.innerHTML += currButton.innerHTML;
            }
        }
        container.appendChild(currButton);
    }
    

    document.body.appendChild(container);
}

function pick(id){
    return document.getElementById(id);
}

function createButton(id, value, thisClass){
    let btn = document.createElement('button');
    btn.id = id;
    btn.innerHTML = value;
    btn.className = thisClass;

    btn.style.width = '25%';
    btn.style.height = '36px';
    btn.style.fontSize = '18px';
    btn.style.margin = '0px';
    btn.style.float = 'left';

    return btn;
}

function toDecimal(num){
    let val = 0, p = 1;

    for(let i = num.length - 1; i >= 0; i--, p *= 2){
        val += (num[i] === '1') * p;
    }
    return val;
}

function toBinary(num){
    let str = '';

    while(num){
        str += num % 2 == 1 ? '1' : '0';
        num = Math.floor(num / 2);
    }

    return str.split("").reverse().join("");
}

function add(a, b){
    let ret = toBinary(toDecimal(a) + toDecimal(b));
    return ret;
}

function subtract(a, b){
    let ret = toBinary(toDecimal(a) - toDecimal(b));
    return ret;
}

function clear(){
    res.innerHTML = '';
}

function equal(){
    let op = {
        '+': add,
        '-': subtract,
        '*': multiply,
        '/': divide
    }
    let flag = false;
    let first = '', second = '', which = '';

    let res = document.getElementById('res');
    let exp = res.innerHTML;

    for(let i of exp){
        if(i !== '1' && i !== '0'){
            which = i;
            flag = true;
        }else if(flag){
            second += i;
        }else{
            first += i;
        }
    }
    
    res.innerHTML = op[which](first, second);
}

function multiply(a, b){
    let ret = toBinary(toDecimal(a) * toDecimal(b));
    return ret;
}

function divide(a, b){
    let ret = toBinary(Math.floor(toDecimal(a) / toDecimal(b)));
    return ret;
}