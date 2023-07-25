document.querySelector("#increment").addEventListener("click", function () {
   var number = Number(document.getElementById('number').innerHTML);

   document.getElementById('number').innerHTML = number + 1;

});


document.querySelector("#decrement").addEventListener("click", function () {
   var number = Number(document.getElementById('number').innerHTML);

   document.getElementById('number').innerHTML = number - 1;

});


document.querySelector("#neutral").addEventListener("click", function () {
   document.getElementById('number').innerHTML = 0;
});

