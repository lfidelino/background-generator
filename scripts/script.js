var body = document.getElementsByTagName("body")[0];
var inputColor1 = document.getElementById("input__color1");
var inputColor2 = document.getElementById("input__color2");
var button0 = document.getElementById("button__degrees-0");
var button45 = document.getElementById("button__degrees-45");
var button90 = document.getElementById("button__degrees-90");
var button135 = document.getElementById("button__degrees-135");
var button180 = document.getElementById("button__degrees-180");
var button225 = document.getElementById("button__degrees-225");
var button270 = document.getElementById("button__degrees-270");
var button315 = document.getElementById("button__degrees-315");
var button360 = document.getElementById("button__degrees-360");
var iCompass = document.getElementById("i__compass");
var inputRangeDeg = document.getElementById("input__range-deg");
var inputNumberDeg = document.getElementById("input__number-deg");
var buttonCopy = document.getElementById("button__copy");
var css = document.getElementById("h3__css");

// NOTE Defaults
var color1 = inputColor1.value;
var color2 = inputColor2.value;

// NOTE Event Functions
var updateBackground = () => {
  var i = document.createElement("i");
  i.classList = "fas fa-copy mr-2";

  var text;
  if (inputRangeDeg.value == "360") body.style.background = "radial-gradient(circle, " + color1 + ", " + color2 + ")";
  else body.style.background = "linear-gradient(" + inputRangeDeg.value + "deg, " + color1 + ", " + color2 + ")";

  text = document.createTextNode("background: " + body.style.background + ";");

  updateCompass();
  css.textContent = "";
  css.append(i);
  css.append(text);
};

var updateCompass = () => {
  if (inputRangeDeg.value === "360") {
    iCompass.classList.remove("fa-arrow-up");
    iCompass.classList.add("fa-circle");
  } else {
    iCompass.classList.remove("fa-circle");
    iCompass.classList.add("fa-arrow-up");
  }
  iCompass.style.transform = "rotate(" + inputRangeDeg.value + "deg)";
};

// NOTE Add event listeners
inputColor1.addEventListener("input", () => {
  color1 = inputColor1.value;
  updateBackground();
});

inputColor2.addEventListener("input", () => {
  color2 = inputColor2.value;
  updateBackground();
});

button0.addEventListener("click", () => {
  inputNumberDeg.value = inputRangeDeg.value = "0";
  updateBackground();
});

button45.addEventListener("click", () => {
  inputNumberDeg.value = inputRangeDeg.value = "45";
  updateBackground();
});

button90.addEventListener("click", () => {
  inputNumberDeg.value = inputRangeDeg.value = "90";
  updateBackground();
});

button135.addEventListener("click", () => {
  inputNumberDeg.value = inputRangeDeg.value = "135";
  updateBackground();
});

button180.addEventListener("click", () => {
  inputNumberDeg.value = inputRangeDeg.value = "180";
  updateBackground();
});

button225.addEventListener("click", () => {
  inputNumberDeg.value = inputRangeDeg.value = "225";
  updateBackground();
});

button270.addEventListener("click", () => {
  inputNumberDeg.value = inputRangeDeg.value = "270";
  updateBackground();
});

button315.addEventListener("click", () => {
  inputNumberDeg.value = inputRangeDeg.value = "315";
  updateBackground();
});

button360.addEventListener("click", () => {
  inputNumberDeg.value = inputRangeDeg.value = "360";
  updateBackground();
});

inputRangeDeg.addEventListener("input", () => {
  inputNumberDeg.value = inputRangeDeg.value;
  updateBackground();
});

inputNumberDeg.addEventListener("input", () => {
  if (inputNumberDeg.value < 0) inputNumberDeg.value = 0;
  else if (inputNumberDeg.value > 360) inputNumberDeg.value = 360;

  if (inputNumberDeg.value === "") inputRangeDeg.value = 0;
  else inputRangeDeg.value = inputNumberDeg.value;

  updateBackground();
});

buttonCopy.addEventListener("click", () => {
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = css.innerText;
  dummy.select();
  dummy.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand("copy");
  document.body.removeChild(dummy);

  buttonCopy.setAttribute("data-tootik", "Copied to clipboard!");
});

buttonCopy.addEventListener("mouseenter", () => {
  buttonCopy.setAttribute("data-tootik", "Click me to copy!");
});