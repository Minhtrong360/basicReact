import React from "react";
import AddComponent from "./AddComponent";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
  state = {
    arrJobs: [
      { id: "1", title: "Dev", salary: "50000" },
      { id: "2", title: "Tester", salary: "5000" },
      { id: "3", title: "Fresher", salary: "500" },
    ],
  };
  addNewJob = (job) => {
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };
  deleteAJob = (job) => {
    let currentJob = this.state.arrJobs;
    currentJob = currentJob.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currentJob,
    });
  };
  componentDidUpdate(prevProps, prevState) {
    console.log("run did update:", "previous state:", prevState);
    console.log("current state:", this.state);
  }
  componentDidMount() {
    console.log("run component did mount");
  }

  render() {
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteAJob={this.deleteAJob}
        />
      </>
    );
  }
}

export default MyComponent;
