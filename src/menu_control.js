document.getElementById("menu-icon-open").style.display = "none";

document
  .getElementById("menu-icon-close")
  .addEventListener("click", function() {
    console.log("Close Nav");
    document.getElementById("menu-title").style.display = "none";
    document.getElementById("input").style.display = "none";
    document.getElementById("results").style.display = "none";
    document.getElementById("menu-icon-open").style.display = "block";
    document.getElementById("menu").style.width = "40px";
  });

document.getElementById("menu-icon-open").addEventListener("click", function() {
  console.log("Open Nav");
  document.getElementById("menu-title").style.display = "flex";
  document.getElementById("menu").style.width = "20%";
  document.getElementById("input").style.display = "flex";
  document.getElementById("menu-icon-open").style.display = "none";
  document.getElementById("results").style.display = "block";
});
