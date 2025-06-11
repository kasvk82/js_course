// document.write("Java script говорит привет!"); 
// console.log("Java script говорит привет!");
// console.error("Java script говорит привет!");
// console.warn("Java script говорит привет!");


var num, str;
num = 15; 
// console.log("Переменная: " + num);

var counter = 0;

arr = new Array(1, 2 ,3);


var num1 = 15;
var num2 = 20;

var num3 = num1 + num2;

// console.log("Сумма: " + num3);
// console.log("Сумма: " + (num + num1));

val = [1,2,3,7,8];
m_value = Math.max(num1, num2);
// console.log("Максимум: " + m_value);

// console.log("Массив: " + val[0]);

// console.log(val.length - 1);


// console.log(val);

val[5] = 10;    

console.log(val);

val = 15;
console.log(val);

// if (Number(val) > 4) {
//     console.log("хаха!")
// }
// else console.log("бубу");


// switch(num) {
//     case 1: 
//         console.log("бугага");
//         break;
//     case 15: 
//         console.log("брррр");
//         break;
//     case 20: 
//         console.log("фффрррр");
//         break;
// }

// function test_func() {
    
//     var num1 = 20;

//     console.log("Java script говорит привет!");
//     console.error("Java script говорит привет!");
//     console.warn("Java script говорит привет!");
//     console.log(num1);
// }

// test_func();

// console.log(num1);

// console.log(arr);

function onClickButton(el) {
    // alert("Вы нажали на меня!");
    counter++;
    el.innerHTML = "Вы нажали на кнопку " + counter;

    console.log(el.name);
    console.log(el.onclick);

    // el.style.background = "red";
    // el.style.color = "blue";
    el.style.cssText = "border-radius: 5px; border: 0.1; font-size: 20px"
}

function onInput(el) {
    console.log(el.value);
    if (el.value == 'Hello!') {
        alert('И тебе привет!');
    }
}