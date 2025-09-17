// var el = document.getElementById("test");
// console.log(el.id);

// el.style.color = "blue";
// el.style.backgroundColor = "grey";

// el.innerHTML = "какой-то текст<br>и еще какой-то текст";

// document.getElementById("test").style.color = "white";

// var spans = document.getElementsByTagName("span");

// for (var i=0; i < spans.length; i++) {
//     console.log(spans[i].innerHTML);
// }


// function checkForm(el) {
//     console.log("какой-то текст");

//     return false;
// }
document.getElementById('main-form').addEventListener("submit", checkForm);

// function checkForm(el) {
function checkForm(event) {

    event.preventDefault();

    var el = document.getElementById('main-form');
    
    var name = el.name.value;
    var pass = el.pass.value;
    var repass = el.repass.value;
    var state = el.state.value;

    var fail = "";
    var textError = document.getElementById('error');

    if (name == "" || pass == "" || state == "")
        fail = "Заполните все поля";
    else if (name.length <= 1 || name.length > 50)
        fail = "Введите корректное имя";
    else if (pass != repass)
        fail = "Пароли не совпадают"
    else if (pass.split("&").length > 1)
        fail = "Некорректный пароль"

    if (fail != "") {
        textError.style.backgroundColor = "red";
        textError.style.color = "white";
        textError.innerHTML = fail;

        // return false;
    } else {
        alert("Все данные корректно заполнены");

        textError.style.backgroundColor = "white";
        textError.innerHTML = "";
        // return true;
    }

    console.log(name + " - " + state + " - " + pass + " - " + repass)

    // return false;
}