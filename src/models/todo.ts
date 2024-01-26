class Todo {
  id: string;
  text: string;

  constructor(todoProp: string) {
    this.id = new Date().toISOString();
    this.text = todoProp;
  }
}

export default Todo;
