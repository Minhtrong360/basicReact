import React from "react";

class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };
  handleChangetitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  handleChangesalary = (e) => {
    this.setState({
      salary: e.target.value,
    });
  };
  handleClick = (e) => {
    e.preventDefault();
    if (!this.state.title || !this.state.salary) {
      alert("Missing parameters");
      return;
    }
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
      salary: this.state.salary,
    });
    this.setState({
      title: "",
      salary: "",
    });
    console.log("check state:", this.state);
  };
  render() {
    return (
      <form>
        <label htmlFor="fname">Job title:</label>
        <br />
        <input
          type="text"
          value={this.state.title}
          onChange={(e) => this.handleChangetitle(e)}
        />
        <br />
        <label htmlFor="lname">Salary:</label>
        <br />
        <input
          type="text"
          value={this.state.salary}
          onChange={(e) => this.handleChangesalary(e)}
        />
        <br />
        <br />
        <input
          type="submit"
          value="Submit"
          onClick={(e) => this.handleClick(e)}
        />
      </form>
    );
  }
}

export default AddComponent;
