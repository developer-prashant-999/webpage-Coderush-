function openAlert() {
  document.getElementById("layer1").style.visibility = "visible";
  document.getElementById("layer1").style.opacity = "0.5";
  document.getElementById("alert_box").style.visibility = "visible";
}

function closeAlert() {
  document.getElementById("layer1").style.visibility = "hidden";
  document.getElementById("layer1").style.opacity = "0";
  document.getElementById("alert_box").style.visibility = "hidden";
}
