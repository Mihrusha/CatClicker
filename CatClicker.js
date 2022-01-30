let count = 1;
let arr = [0, 10, 20, 30, 40, 70, 100, 120, 150, 170];
//setTimeout(CountClicker,5000);



function CountClicker() {
    let counterDisplayElem = document.querySelector('.counter-display');
    
   
    counterDisplayElem.innerHTML = count;
    
    count++
    //CatChanger(count);
  
    return count;
    
}
var elt = document.getElementById("main"); 
   elt.addEventListener('click',function() {CatChanger(count);});


//console.log(count)

function CatChanger(count)
{
    count=count;
    console.log(count);

    var pos = arr.indexOf(count-1);
    
    let cat = "cat" + (pos); 
    let elem = document.getElementById(cat);
    elem.style.visibility = "visible";   
        
   
}
