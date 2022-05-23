window.addEventListener("keydown", (a) => {
  const firstPage = document.getElementById("first-page");
  const secondPage = document.getElementById("second-page");

  firstPage.style.display = "none";
  secondPage.style.display = "flex";

  const code = document.getElementById("code");
  const key = document.getElementById("key");
  const which = document.getElementById("which");
  const log = document.getElementById("heading");

  log.textContent = `${a.key.toUpperCase()} was pressed!`;

  code.textContent = a.code;
  key.textContent = a.key;
  which.textContent = a.which;
});
