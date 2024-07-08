
function testInput () {
    let x = document.getElementById("input").value;
    alert(x);
    document.getElementById("chkInput").innerHTML = x;
    console.log(x);
}

function testInputCalForAb () {
    let a = 5;
    let b = 10;
    let c = a  + b;
    alert(c);
    document.getElementById("chkInputCalForXY").innerHTML= c;
    console.log(c);
    document.write(String(c));
}

function testInputCalForXY () {
    let a = document.getElementById("inputX").value;
    let b = document.getElementById("inputY").value;
    let  c = parseInt(a) + parseInt(b);   ;   
    alert(c);
    document.getElementById("chkInputCalForXY").innerHTML= c;
    console.log(c);
    document.write(String(c));
}


function testInputCalForAbcd () {
    let a = 10; let b = 5; let c = 20; let d= 15;
    let e = a + b * c - d  / 2
    alert(e);
    document.getElementById("chkInputCalForAbcd").innerHTML= e;
    console.log(e);
    document.write(String(e));
}
