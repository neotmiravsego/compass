import '../scss/app.scss';
import '../pug/index.pug';

import '@babel/polyfill';


const grisha = {
        name: {
            first: 'Grisha',
            last: 'Timoshuk'
        },
        year: 23
    }
    // console.log(grisha.name.last)
const arr = [{ name: 'Grisha', year: 23 }, { name: 'Kostya', year: 27 }]

const arrNumbers = ['text1', 'text2', 'text3']


arrNumbers[0]

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i].name)
}

// console.log(arrNumbers[0])

console.log('Hi, my name is Ukyo!'); // eslint-disable-line no-console