function getRandomNumber(min, max) { //최댓값도 포함, 최솟값도 포함
    let randomRGBArray = [];
    for (let i = 0; i < 3; i++) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomRGBArray.push(randomNumber);
    }
    console.log(randomRGBArray);
  
    return randomRGBArray; 
  }

  const btn = document.getElementById('btn');

  const color = document.querySelector('.color');

  btn.addEventListener('click', () => {


    // bad case
    // const resultArray = getRandomNumber(0,255);
    // const red = resultArray[0];
    // const green = ressultArray[1];
    // const blue = ressultArray[2];

    const [r, g, b] = getRandomNumber(0,255);
    // console.log(r, g, b);
    const rgbs = `rgb(${r},${g},${b})`
    document.body.style.backgroundColor = rgbs;
    color.textContent = rgbs;
    color.style.color = rgbs;
  });
