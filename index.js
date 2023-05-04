// Logic for app interactions
// get html value by ID
let colorOne = document.getElementById("color-one");
let colorTwo = document.getElementById("color-two");
let currentDirection = "to bottom";
let ResultCode = document.getElementById("code");

// Set The Direction for Color gradient
const setDirection = (value, _this) => {
  let directions = document.querySelectorAll(".buttons button");
  directions.forEach((element) => {
    element.classList.remove("active");
  });

  // Set active Direction
  _this.classList.add("active");
  currentDirection = value;
};

// Generate Code
const generateCode = () => {
  ResultCode.value = `background-image: linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
  document.getElementsByTagName(
    "BODY"
  )[0].style.backgroundImage = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
};

// Copy Code Button
const copyText = () => {
  ResultCode.select();
  document.execCommand("copy");
  alert("Gradient Copied!");
};

generateCode();
// console.log(setDirection());
