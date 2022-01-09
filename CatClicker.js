let count = 0;

function CountClicker() {
    let counterDisplayElem = document.querySelector('.counter-display');
    count++;

    // alert("Кот номер " + count);

    console.log(count);
    counterDisplayElem.innerHTML = count;
    if (count == 10) {
        Cat1();
    }
    if (count == 20) {
        Cat2();
    }
    if (count == 30) {
        Cat3();
    }
    if (count == 50) {
        Cat4();
    }
    if (count == 70) {
        Cat5();
    }
    if (count == 100) {
        Cat6();
    }
    if (count == 120) {
        Cat7();
    }
    if (count == 150) {
        Cat8();
    }
    if (count == 170) {
        Cat9();
    }
}





function Cat1() {

    var elem = document.getElementById("cat1");
    elem.style.visibility = "visible";
}

function Cat2() {

    var elem = document.getElementById("cat2");
    elem.style.visibility = "visible";
}

function Cat3() {

    var elem = document.getElementById("cat3");
    elem.style.visibility = "visible";
}

function Cat4() {

    var elem = document.getElementById("cat4");
    elem.style.visibility = "visible";
}

function Cat5() {

    var elem = document.getElementById("cat5");
    elem.style.visibility = "visible";
}

function Cat6() {

    var elem = document.getElementById("cat6");
    elem.style.visibility = "visible";
}

function Cat7() {

    var elem = document.getElementById("cat7");
    elem.style.visibility = "visible";
}

function Cat8() {

    var elem = document.getElementById("cat8");
    elem.style.visibility = "visible";
}
function Cat9() {

    var elem = document.getElementById("cat9");
    elem.style.visibility = "visible";
}