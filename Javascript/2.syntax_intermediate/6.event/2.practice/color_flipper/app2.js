function colorChange() {
    var color = ["#FC5C7D", "#6A82FB", "#38ef7d", "#fffbd5", "#b20a2c", "#CAC531"];
    const text1 = document.getElementsByClassName('color');
    var num = Math.floor(Math.random() * color.length);
    var bodyTag = document.getElementById("colorCont");
    bodyTag.style.backgroundColor = color[num];
    text1.textContent = `${colorChange}`;
  }

const colorCha = (colorChange()); 

const text1 = document.getElementsByClassName('color');

text1.textContent = `${colorCha}`;










// var number = [1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f']
// var newarr = []

// for (var i=0; i<5; i++) {
// 	newarr.push((number[Math.floor(Math.random()*15)]))

// } return('#'+newarr.join(''));



// function hexcode() {      //hexcode()함수는 랜덤으로 6자리 숫자코드를 생성한다.
//     var number = [1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f'] }
// console.log(hexcode());
//     var newarr = [];

//     for (var i = 0; i < 6; i++) {
//       newarr.push(number[Math.floor(Math.random() * 15)]);
//     }
//     var hex = "#" + newarr.join("");//랜덤으로 생성한 숫자코드를 hex라는 변수에 저장
//     var x = document.getElementById("backgr");
//     x.backgroundColor = hex;
//     document.getElementById("code").innerHTML = hex; 