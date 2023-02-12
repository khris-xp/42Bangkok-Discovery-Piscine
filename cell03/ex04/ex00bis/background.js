$("#change").on("click", () => {
  let newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  let p = $("body").css("background-color", newColor);
});