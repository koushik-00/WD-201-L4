
const todoList = require("../todo");
const { all, add, markAsComplete, overdue, dueToday, dueLater } = todoList();

describe("Todo_list test ", () => {
  // Before starting all tests
  beforeAll(() => {
    add({
      title: "Test_1todo",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
  });

  //add function
  test("Add a new_todo to the given todo-list", () => {
    const todoLea = all.length;
    add({
      title: "Test_2todo",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(all.length).toBe(todoLea + 1);
  });

  //markAsComplete function
  test("Mark the todo-list as complete", () => {
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  //overdue function
  test("Overdue-todos from the todo-list", () => {
    add({
      title: "Test the overdue from the given todo-list",
      dueDate: new Date(
        new Date().setDate(new Date().getDate() - 1)
      ).toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(overdue().length).toBe(1);
  });

  //dueToday function
  test("Due-today-todos from the todo-list", () => {
    
    expect(dueToday().length).toBe(2);
  });

  //dueLater function
  test("Due-later-todos", () => {
    add({
      title: "Testing the due later from the todo-list",
      dueDate: new Date(
        new Date().setDate(new Date().getDate() + 1)
      ).toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(dueLater().length).toBe(1);
  });
});