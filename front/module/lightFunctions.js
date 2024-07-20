const light = document.getElementsByClassName("light");

let lightStatus = [false, false, false, false];

function greenLight(n) {
  light[n].style.backgroundColor = "rgba(74, 255, 81, 1)";
  lightStatus[n] = true;
}

function redLight(n) {
  light[n].style.backgroundColor = "";
  lightStatus[n] = false;
}

function allLightsGreen() {
  return lightStatus.every((status) => status === true);
}

export { greenLight, redLight, allLightsGreen, lightStatus };
