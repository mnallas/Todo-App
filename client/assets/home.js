$(document).ready(function () {
  getTodos().then((allTodos) => {
    renderTodos(allTodos);
  });

  $("#submitBtn").on("click", () => {
    const todoText = $("#userInput").val();
    $("#userInput").val("");
    console.log(todoText);

    $.ajax({
      type: "POST",
      url: "/api",
      data: { todo: todoText },
    }).then((response) => {
      console.log(response);
    });
  });
});

const getTodos = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "GET",
      url: "/api",
    })
      .then((allTodos) => {
        resolve(allTodos);
      })
      .catch((err) => reject(err));
  });
};

const renderTodos = (arr) => {
  $("#card-container").html("");
  arr.forEach((todo) => {
    let msg = todo.completed ? "✔ Finished todo" : "❌ Need to do!";
    $("#card-container").prepend(
      `
      <div class="card mb-2">
        <div class="card-body">
          <h6 class="card-subtitle mb-2 text-muted">
            ${msg}
          </h6>
          <p class="card-text mt-2">
            ${todo.todo}
          </p>
          <div class="text-center">
            <button data-id=${todo.id} style="width: 150px;" class="btn btn-outline-success btnUpdate">
              Edit
            </button>
            <button data-id=${todo.id} style="width: 150px;" class="btn btn-outline-danger btnDelete">
              Delete
            </button>
          </div>
        </div>
      </div>
      `
    );
  });
};
$(document).on("click", ".btnUpdate", function () {
  const todoId = $(this).attr("data-id");
  window.location.href = `/edit?id=${todoId}`;
});
$(document).on("click", ".btnDelete", function () {
  const todoId = $(this).attr("data-id");
  window.location.href = `/delete?id=${todoId}`;
});
