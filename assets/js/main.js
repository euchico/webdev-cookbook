if (!(document.getElementById("home"))){
  document.getElementById("menu-toggle").addEventListener("click", openMenu);

  function openMenu() {
    let element = document.getElementById("wrapper");
    element.classList.toggle("toggled");
  }
}
