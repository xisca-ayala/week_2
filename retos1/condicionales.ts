console.log(zodiac(5,6));
console.log(continent ('Japón'));
console.log(isEven(4));



function zodiac(day:number, month:number): string {
    let result: string = '';
    if((day>=21 && month == 3) || (day<=19 && month == 4)){
        result = 'Tu singo es Aries.';
    } else if ((day>=20 && month == 4) || (day<=20 && month == 5)){
        result = 'Tu singo es Tauro.';
    } else if ((day>=21 && month == 5) || (day<=20 && month == 6)){
        result = 'Tu singo es Geminis.';
    } else if ((day>=21 && month == 6) || (day<=22 && month == 7)){
        result = 'Tu singo es Cáncer.';
    } else if ((day>=23 && month == 7) || (day<=22 && month == 8)) {
        result = 'Tu singo es Leo.';
    } else if ((day>=23 && month == 8) || (day<=22 && month == 10)){
        result = 'Tu singo es Libra.';
    } else if ((day>=23 && month == 10) || (day<=21 && month == 11)){
        result = 'Tu singo es Escorpio.';
    } else if ((day>=22 && month == 11) || (day<=21 && month == 12)){
        result = 'Tu singo es Sagitario.';
    } else if ((day>=22 && month == 12) || (day<=19 && month == 1)){
        result = 'Tu singo es Capricornio.';
    } else if ((day>=20 && month == 1) || (day<=18 && month == 2)){
        result = 'Tu singo es Acuario.';
    } else if ((day>=19 && month == 2) || (day<=20 && month == 3)){
        result = 'Tu singo es Piscis.';
    }
    return result;
}


function continent (country: string): string {
    let result: string = '';
    if (country == 'España' || country == 'Italia' || country == 'Francia' || country == 'Regno Unido' || country == 'Alemania'){
        result = 'Estás en Europa'
    }
    else if (country == 'Estados Unidos' || country == 'Argentina' || country == 'Brasil' || country == 'Chile' || country == 'México'){
        result = 'Estás en América'
    }
    else if (country == 'Sud-África' || country == 'Tanzania' || country == 'Marruecos' || country == 'Nigeria' || country == 'Senegal'){
        result = 'Estás en África'
    }
    else if (country == 'Japón' || country == 'China' || country == 'Corea del Sur' || country == 'Singapur' || country == 'Indonesia'){
        result = 'Estás en Asia'
    }
    else if (country == 'Australia' || country == 'Nueva Zelanda' || country == 'Fiji' || country == 'Nauru' || country == 'Samoa'){
        result = 'Estás en Oceania'
    }
return result
}


export function isEven (number: number): string {
    let result = '';
    if(number%2 == 0){
        result = 'El numero es par';
    } else {
        result = 'El numero es impar'
    }
    return result;
}