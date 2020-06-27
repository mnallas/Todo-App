$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  console.log(urlParams.get("id"));
  const id = urlParams.get("id");

  $.ajax({
    type: "GET",
    url: `/api/find/${id}`,
  }).then((todo) => {
    console.log(todo);
    $("#deleteTodoText").text(todo[0].todo);
  });

  $("#cancelBtn").on("click", () => {
    console.log("working");
    window.location.href = `/`;
  });

  $("#deleteBtn").on("click", () => {
    $.ajax({
      type: "DELETE",
      url: `/api/delete/${id}`,
    }).then((delRes) => {
      console.log(delRes);
      window.location.href = `/`;
    });
  });
});
