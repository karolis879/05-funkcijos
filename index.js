function vienetas (a) {
    return a + 1;
}

//-----------------

function sekundes (a) {
    return a * 60 * 60
}

//------------------

function krepsinis(a, b, c) {
    return (a * 1) + (b * 2) + (c * 3)
}

//-----------------

function daugiauMaziau (a, b) {
    let suma = '';
    if (a + b<=100) {
        suma = true;
    } else if (a + b >100){
        suma = false;
    } else {
        suma = 'Paduotas neteisingas simbolis'
    }
    return suma
}

//-------------------------

function arLygu (a, b) {
    let lygu = '';
    if (a==b) {
        lygu = true;
    } else {
        lygu = false;
    }
    return lygu
}

//------------------------

function arDidesnis (a, b) {
    let rezult = '';
    if (a > b) {
        rezult = `${a} skaičius didesnis uz ${b}`
    } else if (a < b){
        rezult = `${b} skaičius didesnis ${a}`
    } else if (a == b) {
        rezult = `${a} lygūs ${b}`
    }
    return rezult
}

//------------------------------

function daugyba (a) {
    let result =  [];
    let sakinys = '';
    for (let i = 0; i<=10; i++) {
        result = i * a;
        sakinys = console.log(`${i} * ${a} = ${result}`)
    }
    return sakinys
}
