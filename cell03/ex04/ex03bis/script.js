$(document).ready(() => {
  const check = document.cookie;
  let ft_list = $("#ft_list");
  $("#create").click(() => {
    let txt = prompt("Please Enter TODO LIST :");
    const name = new Date().getTime();
    document.cookie = `${name}=${txt}`;
    let list = $("<div></div>").text(txt);
    list.click(() => {
      const check = confirm("Do you want to delete");
      if (check) {
        list.remove();
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
      }
    });
    ft_list.prepend(list);
  });
  if (check.length > 0) {
    const cookie = check.split(";");
    cookie.forEach((element) => {
      let list = $("<div></div>").text(element.split("=")[1]);
      list.click(() => {
        const check = confirm("Do you want to delete");
        if (check) {
          list.remove();
          document.cookie =
            element.split("=")[0] + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        }
      });
      ft_list.prepend(list);
    });
  }
});
