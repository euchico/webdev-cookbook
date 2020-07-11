if (document.getElementById("note")){
  document.getElementById("menu-toggle").addEventListener("click", openMenu);

  function openMenu() {
    let element = document.getElementById("content");
    element.classList.toggle("show");
  }
}
