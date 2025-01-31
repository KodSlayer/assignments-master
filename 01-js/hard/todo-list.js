/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todoList=[];
  }
  add(todo) {
    this.todoList.push(todo);
  }
  remove(indexOfTodo) {
    this.todoList.splice(indexOfTodo,1);
  }
  update(index,updatedTodo) {
    if (index >= 0 && index < this.todoList.length) { // Check if index is valid
      this.todoList[index] = updatedTodo; // Update the element at the specified index
  }
}
  getAll() {
    return this.todoList;
  }
  get(indexOfTodo) {
    if (indexOfTodo < 0 || indexOfTodo >= this.todoList.length) {
      return null; // Return null for out-of-bounds indices
  }
  return this.todoList[indexOfTodo]; // Return the element at the specified index
  }
  clear() {
    return this.todoList=[];
  }

}

module.exports = Todo;
