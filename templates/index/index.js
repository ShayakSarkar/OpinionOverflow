var elm=<div>
        <BlogPane/>
        <ContactsPane/>
        <TopBanner/>
    </div>
ReactDOM.render(elm,$('#root').get(0));

function percent(par1,par2){
    return (par1/100)*par2;
}
var canvas=document.getElementById("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var context=canvas.getContext('2d');
var width=window.innerWidth;
var height=window.innerHeight;
context.beginPath();
context.moveTo(percent(72,width),percent(25,height));
context.lineTo(percent(72,width),percent(90,height));
context.strokeStyle='#c0c0c0';
context.stroke();

context.beginPath();
context.moveTo(percent(6,width),percent(25,height));
context.lineTo(percent(6,width),percent(90,height));
context.strokeStyle='#c0c0c0';
context.stroke();
ReactDOM.render(elm,$('#root').get(0));

/*var res=null;
async function getData(){
    var arr=await fetch('http://localhost:5000/getInterests')
    console.log(arr);
    res=await arr.json();
    return 1; 
}

getData().then(()=>console.log('after getting data',res),()=>console.log('Failed'));
*/