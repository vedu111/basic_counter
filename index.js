document.querySelector(".increment-btn").addEventListener("click", function () {
  var number = Number(document.getElementById('number').innerHTML);
  document.getElementById('number').innerHTML = number + 1;
});

document.querySelector(".decrement-btn").addEventListener("click", function () {
  var number = Number(document.getElementById('number').innerHTML);
  document.getElementById('number').innerHTML = number - 1;
});

document.querySelector(".neutral-btn").addEventListener("click", function () {
  document.getElementById('number').innerHTML = 0;
});

document.querySelector(".save-btn").addEventListener("click", function () {
  var number = Number(document.getElementById('number').innerHTML);
  var saveDiv = document.getElementById("save");
  var currentEntries = saveDiv.textContent;
  var countStr = number + ", ";
  saveDiv.textContent = currentEntries + countStr;
  document.getElementById('number').innerHTML = 0;
});
