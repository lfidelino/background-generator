const body = document.getElementsByTagName('body')[0];
const inputColor1 = document.getElementById('input__color1');
const inputColor2 = document.getElementById('input__color2');
const button0 = document.getElementById('button__degrees-0');
const button45 = document.getElementById('button__degrees-45');
const button90 = document.getElementById('button__degrees-90');
const button135 = document.getElementById('button__degrees-135');
const button180 = document.getElementById('button__degrees-180');
const button225 = document.getElementById('button__degrees-225');
const button270 = document.getElementById('button__degrees-270');
const button315 = document.getElementById('button__degrees-315');
const button360 = document.getElementById('button__degrees-360');
const buttonRandomize = document.getElementById('button__randomize');
const iCompass = document.getElementById('i__compass');
const inputRangeDeg = document.getElementById('input__range-deg');
const inputNumberDeg = document.getElementById('input__number-deg');
const buttonCopy = document.getElementById('button__copy');
const css = document.getElementById('h3__css');

// NOTE Defaults
let color1 = inputColor1.value;
let color2 = inputColor2.value;

// NOTE Event Functions
const updateBackground = () => {
  let i = document.createElement('i');
  i.classList = 'fas fa-copy mr-2';

  let text;
  if (inputRangeDeg.value == '360') body.style.background = `radial-gradient(circle, ${color1}, ${color2})`;
  else body.style.background = `linear-gradient(${inputRangeDeg.value}deg, ${color1}, ${color2})`;

  text = document.createTextNode(`background: ${body.style.background};`);

  updateCompass();
  css.textContent = '';
  css.append(i);
  css.append(text);
};

const updateCompass = async () => {
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  if (inputRangeDeg.value === '360') {
    iCompass.classList.add('animate__animated', 'animate__zoomOut');
    document.documentElement.style.setProperty('--animate-duration', '0.5s');
    await delay(100);
    iCompass.classList.remove('fa-arrow-up');
    iCompass.classList.add('fa-circle');
    iCompass.classList.remove('animate__animated', 'animate__zoomOut');
    iCompass.classList.add('animate__animated', 'animate__zoomIn');
  } else {
    if (!iCompass.classList.contains('fa-arrow-up')) {
      iCompass.classList.add('animate__animated', 'animate__zoomOut');
      document.documentElement.style.setProperty('--animate-duration', '0.5s');
      await delay(100);
      iCompass.classList.remove('fa-circle');
      iCompass.classList.add('fa-arrow-up');
      iCompass.classList.remove('animate__animated', 'animate__zoomOut');
      iCompass.classList.add('animate__animated', 'animate__zoomIn');
    }
  }
  iCompass.style.transform = `rotate(${inputRangeDeg.value}deg)`;
};

const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const convertToPaddedHex = (int) => {
  hex = int.toString(16);
  if (hex.length < 2) {
    return `0${hex}`;
  }
  return hex;
};

const randomizeColors = () => {
  color1Arr = [getRandomInteger(0, 255), getRandomInteger(0, 255), getRandomInteger(0, 255)];
  color2Arr = [getRandomInteger(0, 255), getRandomInteger(0, 255), getRandomInteger(0, 255)];

  inputRangeDeg.value = inputNumberDeg.value = getRandomInteger(0, 360);
  updateCompass();

  inputColor1.value = `#${convertToPaddedHex(color1Arr[0])}${convertToPaddedHex(color1Arr[1])}${convertToPaddedHex(
    color1Arr[2]
  )}`;
  inputColor2.value = `#${convertToPaddedHex(color2Arr[0])}${convertToPaddedHex(color2Arr[1])}${convertToPaddedHex(
    color2Arr[2]
  )}`;

  color1 = `rgb(${color1Arr[0]}, ${color1Arr[1]}, ${color1Arr[2]})`;
  color2 = `rgb(${color2Arr[0]}, ${color2Arr[1]}, ${color2Arr[2]})`;
};

// NOTE Add event listeners
inputColor1.addEventListener('input', () => {
  color1 = inputColor1.value;
  updateBackground();
});

inputColor2.addEventListener('input', () => {
  color2 = inputColor2.value;
  updateBackground();
});

button0.addEventListener('click', () => {
  inputNumberDeg.value = inputRangeDeg.value = '0';
  updateBackground();
});

button45.addEventListener('click', () => {
  inputNumberDeg.value = inputRangeDeg.value = '45';
  updateBackground();
});

button90.addEventListener('click', () => {
  inputNumberDeg.value = inputRangeDeg.value = '90';
  updateBackground();
});

button135.addEventListener('click', () => {
  inputNumberDeg.value = inputRangeDeg.value = '135';
  updateBackground();
});

button180.addEventListener('click', () => {
  inputNumberDeg.value = inputRangeDeg.value = '180';
  updateBackground();
});

button225.addEventListener('click', () => {
  inputNumberDeg.value = inputRangeDeg.value = '225';
  updateBackground();
});

button270.addEventListener('click', () => {
  inputNumberDeg.value = inputRangeDeg.value = '270';
  updateBackground();
});

button315.addEventListener('click', () => {
  inputNumberDeg.value = inputRangeDeg.value = '315';
  updateBackground();
});

button360.addEventListener('click', () => {
  inputNumberDeg.value = inputRangeDeg.value = '360';
  updateBackground();
});

buttonRandomize.addEventListener('click', () => {
  randomizeColors();
  updateBackground();
});

inputRangeDeg.addEventListener('input', () => {
  inputNumberDeg.value = inputRangeDeg.value;
  updateBackground();
});

inputNumberDeg.addEventListener('input', () => {
  if (inputNumberDeg.value < 0) inputNumberDeg.value = 0;
  else if (inputNumberDeg.value > 360) inputNumberDeg.value = 360;

  if (inputNumberDeg.value === '') inputRangeDeg.value = 0;
  else inputRangeDeg.value = inputNumberDeg.value;

  updateBackground();
});

buttonCopy.addEventListener('click', () => {
  const dummy = document.createElement('textarea');
  document.body.appendChild(dummy);
  dummy.value = css.innerText;
  dummy.select();
  dummy.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand('copy');
  document.body.removeChild(dummy);

  buttonCopy.setAttribute('data-tootik', 'Copied to clipboard!');
});

buttonCopy.addEventListener('mouseenter', () => {
  buttonCopy.setAttribute('data-tootik', 'Click me to copy!');
});
