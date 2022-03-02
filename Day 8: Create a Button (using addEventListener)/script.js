window.onload = function(){
    var btn = document.createElement('button');
    btn.id = 'btn';
    btn.style.width = '96px';
    btn.style.height = '48px';
    btn.style.fontSize = '24px';
    btn.style.cursor = 'pointer';
    btn.innerHTML = '0';
    
    btn.addEventListener('click', function(){
        btn.innerHTML = parseInt(btn.innerHTML) + 1;
    });

    document.body.appendChild(btn);
}
