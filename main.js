document.getElementById("1").addEventListener("click", one);
document.getElementById("2").addEventListener("click", two);

function one() {
    document.getElementById("demo").innerHTML = Date();
}
function two() {
    document.getElementById("demo").innerHTML = prompt("Do you got a big load?");
}
