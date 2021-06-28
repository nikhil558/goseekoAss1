import { Component } from "react";

class EachCourse extends Component {
  state = {
    clickingStyle: "each-course-container",
  };

  clickEachCourse = () => {
    const { eachFun, eachData } = this.props;
    eachFun(eachData.courseName);
    this.setState({ clickingStyle: "each-course-container2" });
  };

  render() {
    const { clickingStyle } = this.state;
    const { eachData } = this.props;
    return (
      <div className={clickingStyle} onClick={this.clickEachCourse}>
        <p className="each-course">{eachData.courseName}</p>
      </div>
    );
  }
}

export default EachCourse;
