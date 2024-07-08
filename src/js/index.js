console.log('HELLO WORLD');
document.getElementById('test').innerHTML="Test ID";

document.write("doc write meo meo ");


function myFunction(nameMe) 
{
    alert("HI "+nameMe);

}



function cal (a, b) {
    console.log("SUM(a,b)= " );
    let c= a+b;
    console.log(c);
    
    console.log("MUL(a,b)= " );
    let d = a*b;
    console.log(d);

    console.log("FR(a,b)= " );
    let e= a/b;
    console.log(e);

}


function testInput () {
    console.log("testInput" );
    var x = document.getElementById("input").value;
    alert(x);
    document.getElementById("chkInput").innerHTML = x;
}
