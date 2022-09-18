//Lab1-2
let arr = [];

const MAX = 24 * 5 + 50;

for (let i = 1; i < MAX; i++) {
  arr.push(Math.floor(Math.random() * 1000) + 1);
}

let arrParFunc = () => {
  arrPar = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      arrPar.push(arr[i]);
    }
  }
  return arrPar;
};

let arrNeParFunc = () => {
  arrNePar = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      arrNePar.push(arr[i]);
    }
  }
  return arrNePar;
};

let arrProstFunc = () => {
  let arrProst = [];
  for (let i = 1; i < arr.length; i++) {
    let flag = true;
    for (let j = 2; j < i; j++) {
      if (arr[i] % j == 0 && j != arr[i]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      arrProst.push(arr[i]);
    }
  }
  return arrProst;
};

let arrNeProstFunc = () => {
  let arrNeProst = [];
  for (let i = 2; i < arr.length; i++) {
    let flag = true;
    for (let j = 2; j < i; j++) {
      if (arr[i] % j == 0 && j != arr[i]) {
        flag = false;
        break;
      }
    }
    if (!flag) {
      arrNeProst.push(arr[i]);
    }
  }
  return arrNeProst;
};

console.log('Massive =', arr);
console.log('Kolichestvo =', arr.length);
console.log('Massiv parnoe =', arrParFunc(arr));
console.log('Massiv ne parnoe =', arrNeParFunc(arr));
console.log('Massiv prostoe =', arrProstFunc(arr));
console.log('Massiv ne prostoe =', arrNeProstFunc(arr));
