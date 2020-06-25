const connection = require("./connection");

connection.connect((err) => {
  if (err) throw err;
});

const seeAllTodos = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM todos", (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
};

const showTodo = (todoId) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM todos WHERE ?",
      [{ id: todoId }],
      (err, data) => {
        err ? reject(err) : resolve(data);
      }
    );
  });
};

const addTodo = (userText) => {
  return new Promise((resolve, reject) => {
    connection.query("INSERT INTO todos SET ?", [{ todo: userText }], (err) => {
      err ? reject(err) : resolve({ msg: "success" });
    });
  });
};

const deleteTodo = (todoId) => {
  return new Promise((resolve, reject) => {
    connection.query("DELETE FROM todos WHERE ?", [{ id: todoId }], (err) => {
      err ? reject(err) : resolve({ msg: "Todo deleted" });
    });
  });
};

const editTodo = (obj) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "UPDATE todos SET ? WHERE ?",
      [
        { todo: obj.todoText, completed: obj.todoCompleted },
        { id: obj.todoId },
      ],
      (err) => {
        err ? reject(err) : resolve({ msg: "Update Success!" });
      }
    );
  });
};

module.exports = { seeAllTodos, showTodo, addTodo, deleteTodo, editTodo };
