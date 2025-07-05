function openNav() {
  const menu = document.getElementById("sideMenu");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const sideMenu = document.getElementById("sideMenu");

  if (sideMenu) {
    // ✅ Always start hidden on new page
    sideMenu.classList.add("hidden");

    // ✅ Populate the menu
    sideMenu.innerHTML = `
      <a href="index.html">HOME</a>
      <a href="100.html">CARDIAC EMERGENCIES</a>
      <a href="200.html">ENVIRONMENTAL EMERGENCIES</a>
      <a href="300.html">MEDICAL EMERGENCIES</a>
      <a href="400.html">SHOCK AND TRAUMA</a>
      <a href="500.html">OBSTETRICAL EMERGENCIES</a>
      <a href="600.html">MISCELLANEOUS</a>
      <a href="700.html">PROCEDURES</a>
      <a href="800.html">REFERENCES & RESOURCES</a>
    `;

    // ✅ Auto-close when a link is clicked
    sideMenu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        sideMenu.classList.add("hidden");
      }
    });
  }
});