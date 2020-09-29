document.querySelector("input[type=checkbox]#dark-mode").onchange = (event) => {
  if (event.srcElement.checked) {
    document.querySelector(".light-mode-style").remove();
  } else {
    link = document.createElement("link");
    link.href = "lightmode.css";
    link.classList.add("light-mode-style");
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }
};
