import React from "react";

class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };
  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };
  handleDelete = (job) => {
    this.props.deleteAJob(job);
  };

  render() {
    console.log("Check props", this.props);
    // let name = this.props.name;
    // let age = this.props.age;
    let { arrJobs } = this.props;
    let { showJobs } = this.state;
    return (
      <>
        {!showJobs ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div className="job-list">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary} $ <></>
                    <span onClick={() => this.handleDelete(item)}> x </span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default ChildComponent;
