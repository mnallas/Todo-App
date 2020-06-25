const express = require("express");
const router = express.Router();
const {
  seeAllTodos,
  showTodo,
  addTodo,
  deleteTodo,
  editTodo,
} = require("../config/orm");

router.get("/api", (req, res) => {
  seeAllTodos()
    .then((allTodos) => res.send(allTodos))
    .catch((err) => res.json(err));
});

router.get("/api/find/:id", (req, res) => {
  const id = parseInt(req.params.id);
  showTodo(id)
    .then((todo) => res.json(todo))
    .catch((err) => res.json(err));
});

router.post("/api", (req, res) => {
  addTodo(req.body.todo)
    .then((submitResult) => res.json(submitResult))
    .catch((err) => res.json(err));
});

router.delete("/api/delete/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  deleteTodo(todoId)
    .then((deleted) => res.json(deleted))
    .catch((err) => res.json(err));
});

router.patch("/api", (req, res) => {
  editTodo({
    todoText: req.body.todoText,
    todoId: parseInt(req.body.todoId),
    todoCompleted: req.body.todoCompleted === "false" ? false : true,
  })
    .then((editResponse) => res.json(editResponse))
    .catch((err) => res.json(err));
});
module.exports = router;
