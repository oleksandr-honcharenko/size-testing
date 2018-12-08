var check = function () {
    var myW = window.innerWidth;
    var myH = window.innerHeight;
    var element = document.getElementById('size');
    element.innerHTML = myW + 'x' + myH;
};
check();
window.addEventListener("resize", function () {    check();}, true);