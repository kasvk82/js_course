var counter = 0;
// setInterval(my_func, 1000);

// function my_func() {

//     counter ++;
//     console.log("Counter " + counter);
// }


var id = setInterval(function() {
    counter ++;
    console.log("Прошло секунд " + counter);

    if (counter == 3)
        clearInterval(id);
}, 1000);