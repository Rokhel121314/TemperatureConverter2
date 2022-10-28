function toFahrenheit() {
    let x = document.getElementById("temperatureC").value;
    const c1 = 9/5;
    const c2 = 32;
    const a1 = (x * c1) + c2;
    const a2 = a1.toFixed(2);
    const ans = a2;

    document.getElementById("fanswer").innerHTML = ans;   
}

function fToCelsius() {
    let x = document.getElementById("temperatureF").value;
    const c1 = 5/9;
    const c2 = 32;
    const a1 = x - c2;
    const a2 = a1 * c1;
    const a3 = a2.toFixed(2);
    const ans = a3;

    document.getElementById("canswer").innerHTML = ans;
}

function toKelvin() {
    let x = document.getElementById("temperatureCK").value;
    const c1 = 273.15;
    const a1 = parseFloat(x) + c1;
    const ans = a1.toFixed(2) ;

    document.getElementById("ckanswer").innerHTML = ans;
}

function kToCelsius() {
    let x = document.getElementById("temperatureKC").value;
    const c1 = 273.15;
    const a1 = x -c1;
    const ans = a1.toFixed(2) ;

    document.getElementById("kcanswer").innerHTML = ans;
}

function toRankine() {
    let x = document.getElementById("temperatureCR").value;
    const c1 = 491.67;
    const c2 = 9/5;
    const a1 = (x * c2 ) + c1;
    const ans = a1.toFixed(2);

    document.getElementById("cranswer").innerHTML = ans;
}

function rToCelsius() {
    let x = document.getElementById("temperatureRC").value;
    const c1 = 491.67;
    const c2 = 5/9;
    const a1 = (x - c1) * c2;
    const ans = a1.toFixed(2);

    document.getElementById("rcanswer").innerHTML = ans;
}




