$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  $.ajax({
    type: "GET",
    url: `/api/find/${id}`,
  }).then((todo) => {
    console.log(todo);
    $("#editTodo").text(todo[0].todo);
  });

  $("#editBtn").on("click", () => {
    const editTodo = $("#editTodo").val();
    console.log(editTodo);
    let checkBox = $("#completedCheck").is(":checked") ? "true" : "false";

    $.ajax({
      type: "PATCH",
      url: "/api",
      data: {
        todoText: editTodo,
        todoId: id,
        todoCompleted: checkBox,
      },
    })
      .then((res) => {
        console.log(res);
        window.location.href = "/";
      })
      .catch((err) => console.log(err));
  });

  // $.ajax({
  //   type: "PATCH",
  //   url: `/api`,
  //   data: {}
  // }).then((todo) => {
  //   console.log(todo);
  //   $("#deleteTodoText").text(todo[0].todo);
  // });

  $("#cancelBtn").on("click", () => {
    console.log("working");
    window.location.href = `/`;
  });
});
