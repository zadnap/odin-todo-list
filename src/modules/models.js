class CheckListItem {
  constructor(title) {
    this.title = title;
    this.isChecked = false;
  }

  toggleCheck() {
    this.isChecked = !this.isChecked;
  }
}

class Todo {
  constructor(title, description, dueDate, priority, checklist = []) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checklist = checklist;
    this.isComplete = false;
  }

  toggleComplete() {
    this.isComplete = !this.isComplete;
  }

  addCheckListItem(item) {
    this.checklist.push(item);
  }

  discardCheckListItem(index) {
    this.checklist.splice(index, 1);
  }
}

class Project {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  discardTodo(index) {
    this.todos.splice(index, 1);
  }
}

export { CheckListItem, Todo, Project };
