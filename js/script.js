console.log("Szia");
console.log(500);
console.log(["első", "második", "harmadik"][0]);
console.log([1, 2, 3]);


console.log({

    firstName: 'József',
    lastName: 'Kovács',
    age: 50,
    adress: {
        street: 'Király u',
        city: 'Budapest',
    }
}.adress.street);


console.log(
    [
        {
            brand: 'Apple',
            name: 'iphone',
            price: 250000,
            provider: {
                country: 'Hu',
                name: 'Vodafone'
            }

        },
        {
            brand: 'Huawei',
            name: '10',
            price: 180000,
            provider: {
                country: 'De',
                name: 'T-mobile'
            }

        },
        {
            brand: 'ZTE',
            name: 'Blade',
            price: 110000,
            provider: {
                country: 'De',
                name: 'Vodafone'
            }

        }

    ][0].name

)
console.log(
    [
        {
            brand: 'Apple',
            name: 'iphone',
            price: 250000,
            provider: {
                country: 'Hu',
                name: 'Vodafone'
            }

        },
        {
            brand: 'Huawei',
            name: '10',
            price: 180000,
            provider: {
                country: 'De',
                name: 'T-mobile'
            }

        },
        {
            brand: 'ZTE',
            name: 'Blade',
            price: 110000,
            provider: {
                country: 'De',
                name: 'Vodafone'
            }

        }

    ][1].price

)
console.log(
    [
        {
            brand: 'Apple',
            name: 'iphone',
            price: 250000,
            provider: {
                country: 'Hu',
                name: 'Vodafone'
            }

        },
        {
            brand: 'Huawei',
            name: '10',
            price: 180000,
            provider: {
                country: 'De',
                name: 'T-mobile'
            }

        },
        {
            brand: 'ZTE',
            name: 'Blade',
            price: 110000,
            provider: {
                country: 'De',
                name: 'Vodafone'
            }

        }

    ][2].provider.country

)
var valtozo;
console.log(valtozo);


console.log( valtozo = 'Sziau');
console.log( valtozo);
valtozo = 3;
console.log(valtozo);
valtozo++;
console.log(valtozo);
valtozo--;
console.log(valtozo);
var szam = 5;
szam += 10;
console .log(szam);
szam -= 20;
console.log(szam);
szam += 15;
console.log(szam);


b = szam % 4 ;
console.log(b);

szam %= 4;
console.log(szam);

