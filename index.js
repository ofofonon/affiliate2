

function cov1(){
    document.getElementById('cov').style.opacity='78%'
    document.getElementById('cov').style.transition='0.3s';
    document.getElementById('cov4').style.opacity='0%'
}

function cov2(){
    document.getElementById('cov2').style.opacity='78%'
    document.getElementById('cov2').style.transition='0.3s'
}

function cov3(){
    document.getElementById('cov3').style.opacity='78%'
    document.getElementById('cov3').style.transition='0.3s'
}

function cov4(){
    document.getElementById('cov4').style.opacity='78%'
    document.getElementById('cov4').style.transition='0.3s'
}

function cov12(){
    document.getElementById('cov').style.opacity='0%'
    document.getElementById('cov').style.transition='0.3s'
}
function cov22(){
    document.getElementById('cov2').style.opacity='0%'
    document.getElementById('cov2').style.transition='0.3s'
}
function cov32(){
    document.getElementById('cov3').style.opacity='0%'
    document.getElementById('cov3').style.transition='0.3s'
}
function cov42(){
    document.getElementById('cov4').style.opacity='0%'
    document.getElementById('cov4').style.transition='0.3s'
}

document.getElementById('scroll').addEventListener("click",function(){
    const contain=document.getElementById('todp');
    contain.scrollLeft+=210;
    document.getElementById('scroll2').style.opacity='100%'
});

document.getElementById('scroll2').addEventListener("click",function(){
    const contain=document.getElementById('todp');
    contain.scrollLeft+=-210;
});

document.getElementById('scroll3').addEventListener("click",function(){
    const contain=document.getElementById('todp2');
    contain.scrollLeft+=210;
    document.getElementById('scroll4').style.opacity='100%'
});

document.getElementById('scroll4').addEventListener("click",function(){
    const contain=document.getElementById('todp2');
    contain.scrollLeft+=-210;
});


function drop(){
    document.getElementById('pro').style.display='block'
    document.getElementById('pro').style.opacity='100%'
}


function drop2(){
    document.getElementById('pro').style.opacity='0%'
    document.getElementById('pro').style.display='none'
    
}

function right1(){
    document.getElementById('right').style.right='0%';
    document.getElementById('right2').style.right='0%';
}

function right2(){
    document.getElementById('right').style.right='-50%';
    document.getElementById('right2').style.right='-80%';
}

/*function bounce(){
    let bb=document.getElementById('bounce')

    bb.style.transform='scale(2,2)';
    bb.style.transition='1s';
    bb.style.backgroundColor='transparent';
   

    setInterval(bounce, 200);

}*/



