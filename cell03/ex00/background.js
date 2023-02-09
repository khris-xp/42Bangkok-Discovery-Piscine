const changeColor = (color) => {
  document.body.style.backgroundColor = color;
};

const change_background_color = () => {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  changeColor("#" + randomColor);
};
