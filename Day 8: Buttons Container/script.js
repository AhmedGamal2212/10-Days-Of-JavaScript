window.onload = function(){
    let container = document.createElement('div');
    container.id = 'btns';
    
    for(let i = 0; i < 9; i++){
        let btn = createButton(i + 1, i + 1);
        
        if(i + 1 === 5){
            btn.onclick = function(){
                let idx = [1, 2, 3, 6, 9, 8, 7, 4];

                let tmp = document.getElementById('btn4').innerHTML;
                for(let j = 7; j > 0; j--){
                    let currButton = pick('btn' + idx[j]);
                    let prevButton = pick('btn' + idx[j - 1]);
                    currButton.innerHTML = prevButton.innerHTML;
                }
                
                let first = pick('btn1');
                first.innerHTML = tmp;
            }
        }
        container.appendChild(btn);
    }
    document.body.appendChild(container);
}

function pick(id){
    return document.getElementById(id);
}

function createButton(value, id){
    let btn = document.createElement('button');
    btn.id = 'btn' + id;
    btn.className = 'btn';
    btn.innerHTML = value;

    return btn;
}