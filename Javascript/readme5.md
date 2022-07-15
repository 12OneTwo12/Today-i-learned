# Javascript 간단한 연습  

---------------------------------------------------------------------------------------------------------------------------------------------------  
  다음과 같은 사이트가 있다고 가정하자. 안에 보이는 click me를 클릭한다면 다음과 같이 사이트 배경 색상이 바뀌는 사이트를 만들어보자.  
![image url](https://github.com/12OneTwo12/TIL/blob/main/Javascript/1111111111111111111111111111.png?raw=true)  
<img src="https://github.com/12OneTwo12/TIL/blob/main/Javascript/133333.png?raw=true" />
<img src="https://github.com/12OneTwo12/TIL/blob/main/Javascript/1444444.png?raw=true" />
<img src="https://github.com/12OneTwo12/TIL/blob/main/Javascript/155555.png?raw=true" />  
  
  우선 html과 css를 통해 디자인 부터 해보자.  
    
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link rel="stylesheet" href="style.css">
      <script defer src="app.js"></script>

  </head>
  <body>
      <main>
          <div class="container">
              <h2>Background color : rgb(255, 255, 255) </h2>
              <button>Click Me!</button>
          </div>
      </main>
  </body>
  </html>
  ```  
    
  ```css
  /* Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap');

  /* reset.css */
  html, body{
      margin: 0;
      padding: 0;
      font-family: 'Titillium Web', 'Open Sans';
  }

  main{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60vh;
  }

  .container{
      text-align: center;
  }

  .container h2{
      background-color: black;
      color: white;
      padding: 1rem; /* 10px로 하면 브라우저에따라 글씨 크기가 달라졌을때도 박스는 고정 되버림 */
  }

  #btn {
      padding: 0.75rem 1.25rem; /* 상하 좌우 */
      background-color: white;
      border: 0.1rem dashed black;
      text-transform: uppercase; /* 대문자 */
      background: transparent; /* 투명 */
      font-size: 1rem;
      font-weight: 700; /* 크기에 따라 굵어지는 특성 */
      font-family: inherit;
  }
  ```  
    
  이로써 겉으로 보기에는 비슷한 사이트가 됐다.  
  그러나 아직 겉으로만 완성된 사이트이다.  
  클릭을 눌러서 배경화면을 바꾸고 그 배경화면은 rgb까지 출력하기 위해서는 무엇들이 필요할까?  
  우선 무작위로 색상을 뽑기 위한 함수가 필요할 것 같다.  
    
  ```javascript
  function getRandomNumber(min, max) { //최댓값도 포함, 최솟값도 포함
    let randomRGBArray = [];
    for (let i = 0; i < 3; i++) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomRGBArray.push(randomNumber);
    }
    console.log(randomRGBArray);
  
    return randomRGBArray; 
  }
  ```
  
  getRandomNumber이라는 함수를 선언하고 파라미터로는 min, max를 주었다.  
  우선 RGB는 rgb(0, 0, 0)으로 표기 되기때문에 rgv안에 값을 채워주기 위해서는 문자열이 필요하다.  
  let randomRGBArray = []; 을 통해 빈 문자열을 변수 안에 담아줬다.  
  그 후에는 무작위로 뽑은 값을 문자열에 총 3번 넣어줘야한다.  
  그를 위해 반복문 for를 사용해준다.  
  i라는 변수를 선언하고, 문자열 안에 총 3개의 인덱스가 들어가야하니 index[0]부터 index[2]까지 총 3개가 만들어지도록  
  i < 3이라는 조건으로 반복 시켜주고, i++를 이용해 총 3번 반복 되도록 값을 하나씩 올려주었다.  
  그럼 이제 나는 반복의 조건은 다 적었으니 반복문을 이용해 두 가지 목적을 달성 해야한다.  
    
  1. '무작위'로 만든 숫자 3가지를 

  2. 문자열에 넣어줘야한다. 

  단, rgb의 값은 0~255까지만 존재하니 최소값을 0으로 최대값을 255로 줘야한다.  
    
  우선 let을 이용해 randomNumber라는 변수를 선언해줬다.  
  변수의 값으로는 Math.floor(Math.random() * (max - min + 1)) + min; 이 쓰였는데.  
  이를 하나씩 뜯어보자.  
  우선 Math.floor는 소수점부터 값을 제거하는데 쓰인다.  
  그렇다면 어떤 소수점을 제거하는 가.  
    
  Math.random() * (max - min + 1)을 보자.  
  Math.random은 Math.random() 함수는 0 이상 1 미만의 구간에서 근사적으로 균일한(approximately uniform) 부동소숫점 의사난수를 반환한다.  
  한마디로 0 ~ < 1 사이를 소수점 단위로 무작위로 생성하는데,  
  무작위로 0.352523141515262이 생성됐다고 가정하자.  
  우리는 나중에 max와 min 파라미터에 각각 255와 0을 할당해 줄것이니 이것으로 계산해보자.  
  그렇게 되면 식은 ( 0.352523141515262 * ( 255 - 0 + 1 )) + 0 이 될것이다.  
  순서대로 계산해보면 0.352523141515262 * 256이 될것인데.  
  이는 90.24592422790707이 된다.  
  뒤에 소숫점까지 나올 필요는 없기 때문에 Math.floor를 통해 소숫점 아래자리는 제거되어 값은 90이 되고,  
  이는 randomRGBArray.push(randomNumber)를 통해 randomNumber라는 문자열로 집어 넣게 된다.  
  return randomRGBArray;을 통해 값은 저장되는데, 이를 총 3회 반복하게 된다.  
  그렇게되면 문자열 안의 값은 무작위로 3번 0~255사이로 저장 되기 때문에,  
  우리가 원했듯이 1. 무작위로 만든 숫자 3가지를 얻게 됐다.  
    
  그렇다면 어째서 (max - min + 1) + min일까?  
    
  ```javascript  
  // Math.random() : 0 ~ < 1 실수형태로 표현 : 0 ~ 0.999999~~
  // Math.random() * 255                               : 0 ~ 254.999999~~~
  // Math.floor(Math.random() * 255)                   : 0 ~ 254
  // Math.floor(Math.random() * 255) + 1               : 1 ~ 255
  // Math.floor(Math.random() * ( 255 - 0 ) + 1 )      : 1 ~ 255
  ```
    
  최소값은 + 더하기 기호로 원하는 최소값을 더해준다.  
  그런데 최대값과 달리 최소값을 더하기로 들어가기 때문에 최대값도 동시에 변하게 된다.  
  따라서 최소값을 지정할 때에는 최대값에도 피해가 가지 않도록 셋팅이 필요하다.    
  0 ~ 1 → 양변에 10을 곱하면, 0 ~ 10으로 최대값만 변함  
  0 ~ 1 → 양변에 1을 더하면, 1 ~ 2로 최소값과 최대값이 모두 변함  
  이러한 이유들로  Math.floor(Math.random() * (max - min + 1)) + min; 이런 코드가 나온 것이다.  
    
  그럼 let randomRGBArray = []; 배열에 무작위 숫자 3개를 집어 넣는것을 성공했다.  
  이제 버튼을 클릭했을때, 배경 색상을 변경하면서 변경한 색상의 rgb 값을 화면에 출력해주면 된다.  
  어떻게 하면 될까?  
    
  먼저 html 문서에 id와 class값을 준다.  
  ```html
    <main> <!-- semantic tag -->
        <div class="container">
            <h2>Background color : <span class="color">rgb(255, 255, 255)</span> </h2>
            <button id="btn">Click Me!</button>
        </div>
    </main>
  ```  
    
  그 후 각각 getElementById와 querySelector를 이용했다.  
    
  ```javascript
  const btn = document.getElementById('btn');

  const color = document.querySelector('.color');

  btn.addEventListener('click', () => {
    const [r, g, b] = getRandomNumber(0,255);
    const rgbs = `rgb(${r},${g},${b})`
    document.body.style.backgroundColor = rgbs;
    color.textContent = rgbs;
    color.style.color = rgbs;
    });
  ```  
      
  이렇게 되면 btn이라는 id를 가진 ```<button id="btn">Click Me!</button>``` 코드가 btn이라는 변수로 할당되고,  
  color라는 class를 가진 ```<span class="color">rgb(255, 255, 255)</span>``` 코드가 color라는 변수로 할당된다.  
  이후 btn.addEventListener를 통해 변수 btn 에서 'click' 클릭이라는 이벤트가 발생하면 두번째 파라미터에 있는 함수가 실행되는 것이다.  
  위에서 선언했던 getRandomNumber라는 함수의 파라미터 값으로 0,255를 넣은 결과를 문자열 각각 r, g, b에 할당했고,  
  각각 값이 할당된 r, g, b를 변수 rgbs에 담았다.  
  그 이후 각각의 코드들로 ```document.body.style.backgroundColor = rgbs;```를 통해 배경색을  
  ```color.textContent = rgbs;```를 통해 화면에 출력되는 텍스트를,  
  ```color.style.color = rgbs;```를 통해 화면에 출력되는 텍스트의 색을 각각 바꿔줬다.  
  이는 rgb라는 동일한 변수로 처리되기때문에 같은 색으로 출력이 가능하게 된다.  
  이로써 처음 목표로 했던 웹을 성공적으로 만들수 있었다.  
