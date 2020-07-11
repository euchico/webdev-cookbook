if (document.getElementById("note")){
  document.getElementById("menu-toggle").addEventListener("click", openMenu);

  function openMenu() {
    let element = document.getElementById("content");
    element.classList.toggle("show");
  }

  function copyContent(e) {
    var copyText = document.getElementById(e);
    var textArea = document.createElement("textarea");

    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);

    textArea.select();
    document.execCommand("copy");

    textArea.remove();
  }
}
