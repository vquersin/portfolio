function changeCss () {
    var navElement = document.getElementById("shadeNav");
    this.scrollY > 560 ? navElement.style.opacity = 0 : navElement.style.opacity = 1;
}
  
  window.addEventListener("scroll", changeCss , false);