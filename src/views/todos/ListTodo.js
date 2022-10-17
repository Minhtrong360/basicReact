import React from "react";
import Addtodo from "./Addtodo";
import "./listTodo.scss";
import { toast } from "react-toastify";

class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "doing homework" },
      { id: "todo2", title: "doing housework" },
      { id: "todo3", title: "doing work" },
    ],
    editTodo: {},
  };
  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("Add success");
  };
  handleDeleteTodo = (todo) => {
    console.log("delete OK", todo);
    let currentTodo = this.state.listTodos;

    currentTodo = currentTodo.filter((item) => item.id !== todo.id);
    console.log("delete 3", currentTodo);
    this.setState({
      listTodos: currentTodo,
    });
    toast.success("Delete success");
  };
  handleEditTodo = (todo) => {
    let { listTodos, editTodo } = this.state;
    // save
    let isEmptyObj = Object.keys(editTodo).length === 0;
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodoCopy = [...listTodos];
      let indexOfTodo = listTodoCopy.findIndex(
        (item) => item.id === editTodo.id
      );
      listTodoCopy[indexOfTodo].title = editTodo.title;
      this.setState({
        listTodos: listTodoCopy,
        editTodo: {},
      });
      toast.success("Updated success");
      return;
    }
    //edit
    this.setState({
      editTodo: todo,
    });
  };
  handleOnchangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };

  render() {
    let { listTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    return (
      <>
        <p>Simple todo app with ReactJS.</p>
        <div className="list-todo-container">
          <Addtodo addNewTodo={this.addNewTodo} />
          <div className="list-todo-content">
            {listTodos &&
              listTodos.length > 0 &&
              listTodos.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {isEmptyObj === true ? (
                      <span>
                        {index + 1} - {item.title}
                      </span>
                    ) : (
                      <>
                        {editTodo.id === item.id ? (
                          <span>
                            {index + 1} -{" "}
                            <input
                              value={editTodo.title}
                              onChange={(event) =>
                                this.handleOnchangeEditTodo(event)
                              }
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1} - {item.title}
                          </span>
                        )}
                      </>
                    )}
                    <button
                      className="edit"
                      onClick={() => this.handleEditTodo(item)}
                    >
                      {isEmptyObj === false && editTodo.id === item.id
                        ? "Save"
                        : "Edit"}
                    </button>{" "}
                    <button
                      className="delete"
                      onClick={() => this.handleDeleteTodo(item)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}
export default ListTodo;
