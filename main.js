document.getElementById("myInput").addEventListener("click", clearInput);

function clearInput() {
  var input = document.getElementById("myInput");
  input.value = "";
  input.classList.add("clicked");
}