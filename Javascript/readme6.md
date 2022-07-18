# Javascript 버튼을 클릭하여 카운트 하기  
    
  ### [ 2022-07-15 ]    
      
-----------------------------------------------------------------------------------------------------------------------------------------------------    
   
![image url](https://github.com/12OneTwo12/TIL/blob/main/Javascript/counter1.png?raw=true)  
![image url](https://github.com/12OneTwo12/TIL/blob/main/Javascript/counter2.png?raw=true)  
![image url](https://github.com/12OneTwo12/TIL/blob/main/Javascript/counter3.png?raw=true)  
  
  다음과 같은 사이트가 있다고 가정하자, increase를 누르면 가운데 있는 숫자에 1 더해지고  
  decrease를 누르면 1 빼지며, reset을 눌렀을때는 다시 0으로 돌아가는 사이트를 만들어보자.  
  
  먼저 html 문서부터 만들어보자.  
  
```html
<body>
    <div class = "container">
        <h1 class = "one">Counter</h1>
        <h1 class = "number" id="value">0</h1>
        <button class = "box" id="decrease" >decrease</button>
        <button class = "box" id="reset" >reset</button>
        <button class = "box" id="increase" >increase</button>
    </div>

</body>
```  
  
  css는 다음과 같이 만들어 줬다.  
    
```css
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap');

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

.one{
    font-family: inherit;
}

.number{
    color: aquamarine;
}

.box{
    background: transparent;
    border: 0.1rem dashed black;
    padding: 0.75rem 1.25rem;
    margin: 1rem;
    font-size: 1rem;
    font-weight: 700;
    font-family: inherit;
    text-transform: uppercase;
}  
```  
  
  생각보다 간단할 것 같았다. 
  우선 js에 이렇게 작성해 주었다.  
    
```javascript
let number = document.getElementById('value');

let result = 0;

const changeTextColor = () => { 
    if(result === 0){
    number.style.color = "black";
    } else if ( result > 0 ){
    number.style.color = "green";
    } else if ( result < 0 ){
    number.style.color = "red";
    }}

const increase = () => { 
    result++ ;
    changeTextColor();
    number.textContent = `${result}`;
}

const decrease = () => {
    result-- ;
    changeTextColor();
    number.textContent = `${result}`;
}

const reset = () => {
    result = 0;
    changeTextColor();
    number.textContent = `${result}`;
}
```  
  
  result라는 변수를 하나 만들고 함수 3가지를 만들어 상황에 맞게 만들어주고 html을 손봤다.  
    
```html
    <div class = "container">
        <h1 class = "one">Counter</h1>
        <h1 class = "number" id="value">0</h1>
        <button class = "box" id="decrease" onclick="decrease()">decrease</button>
        <button class = "box" id="reset" onclick="reset()">reset</button>
        <button class = "box" id="increase" onclick="increase()">increase</button>
    </div>
```  
  
  이렇게 만들어 주어 성공적으로 구현했다.  
  그러나 다른 방법으로도 할 수 있을 것 같았다.  
  우선 html을 다시 세팅해줬다.  
    
```html
<body>
    <main>
        <div class="container">
            <h2>Counter</h2>
            <p id="value">0</p>
            <button class="btn decrease">decrease</button>
            <button class="btn reset">decrease</button>
            <button class="btn increase">decrease</button>
        </div>
    </main>
    
</body>
```  
  
```javascript
const countValue = document.getElementById('value');

const countButtons = document.querySelectorAll('button');

let count = 0;

const resultcolor = () => { 
    if(count === 0){
    value.style.color = "black";
    } else if ( count > 0 ){
    value.style.color = "green";
    } else if ( count < 0 ){
    value.style.color = "red";
    }}


countButtons.forEach((button) => {

    button.addEventListener('click', (event)=>{

        const curTarget = event.currentTarget;

        const styles = curTarget.classList[1];
        // console.log(styles);
        if(styles === 'increase'){
            count++ ;
        } else if ( styles === 'decrease') {
            count-- ;
        } else if ( styles === 'reset') {
            count = 0;
        }

        resultcolor();
        countValue.textContent = count ;
    });
}) 
```  
  
  이를 통해 다시한번 구현해 냈지만 조건문을 줄일 수 있는 방법 또한 존재했다.  
    
```javascript
countButtons.forEach((button) => { 
    
    button.addEventListener('click', (event)=>{
        const curTarget = event.currentTarget;
        
        const styles = curTarget.classList[1];

        //nested ternary operator(중첩된 삼항 연산자)
        count = styles !== 'reset' ? (count = styles === 'decrease' ? --count : ++count) : 0;

        let cvColor = '';

        cvColor = count !== 0 ? (cvColor = count > 0 ? 'green' : 'red') : 'grey';

        countValue.textContent = count;
        countValue.style.color =cvColor;

    });
})
``` 
  
  이렇게 3가지 방법으로 완성 시켜보았다.  
  
