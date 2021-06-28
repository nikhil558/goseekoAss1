import { Component } from "react";
import { Steps } from "rsuite";
import Streams from "../Streams";
import EachCourse from "../EachCourse";
import "./index.css";

class MainApplication extends Component {
  state = {
    coursesData: [],
    streamsData: [],
    universitiesData: [],
    courseClicked: false,
    streamClicked: true,
    showData: false,
    eventCourse: "BE",
    eventStream: "",
  };

  componentDidMount() {
    this.fullData();
  }

  fullData = async () => {
    const dataForCourse = await this.getData("/course");
    const dataForUniversities = await this.getData("/universitys");
    const courseResponse = dataForCourse.map((each) => ({
      courseName: each.course_name,
    }));

    const universitiesResponse = dataForUniversities.map((each) => ({
      universityName: each.university_name,
    }));

    this.setState({
      coursesData: courseResponse,
      universitiesData: universitiesResponse,
    });
  };

  getData = async (api) => {
    const options = {
      method: "GET",
    };
    const response = await fetch(api, options);
    const fetchedData = await response.json();
    return fetchedData;
  };

  clickCourse = (course) => {
    this.setState({
      courseClicked: true,
      eventCourse: course,
    });
  };

  selectStream = (selectValue) => {
    this.setState({
      streamClicked: false,
      eventStream: selectValue,
      courseClicked: false,
      showData: true,
    });
  };

  render() {
    const {
      coursesData,
      eventCourse,
      eventStream,
      universitiesData,
      courseClicked,
      streamClicked,
      showData,
    } = this.state;
    const styles = {
      width: "200px",
      display: "inline-table",
      verticalAlign: "top",
    };
    return (
      <div>
        <nav>
          <div className="bg_nav_container">
            <img
              src="https://res.cloudinary.com/dsqwm3c9a/image/upload/v1624688355/Blue_logo_goseeko_1_vy4j0t.svg"
              alt="logo"
              className="image_logo"
            />
            <div className="combine_container">
              <p className="nav_para1">Engineering</p>
              <img
                src="https://res.cloudinary.com/dsqwm3c9a/image/upload/v1624689948/Vector_2_gs9ibc.svg"
                alt="downward1"
                className="downward1"
              />
              <p className="nav_para2">Course material</p>
              <img
                src="https://res.cloudinary.com/dsqwm3c9a/image/upload/v1624689948/Vector_2_gs9ibc.svg"
                alt="downward2"
                className="downward2"
              />
              <p className="nav_para3">Upskill</p>
              <img
                src="https://res.cloudinary.com/dsqwm3c9a/image/upload/v1624689948/Vector_2_gs9ibc.svg"
                alt="downward3"
                className="downward3"
              />
              <p className="nav_para4">Books</p>
              <p className="nav_para5">Universities</p>
              <img
                src="https://res.cloudinary.com/dsqwm3c9a/image/upload/v1624689948/Vector_2_gs9ibc.svg"
                alt="downward4"
                className="downward4"
              />
            </div>
            <div className="menu_container">
              <img
                src="https://res.cloudinary.com/dsqwm3c9a/image/upload/v1624695545/Rectangle_192_uovvsq.svg"
                alt="rectagle1"
                className="rectagle1"
              />
              <img
                src="https://res.cloudinary.com/dsqwm3c9a/image/upload/v1624695545/Rectangle_192_uovvsq.svg"
                alt="rectagle2"
                className="rectagle2"
              />
              <img
                src="https://res.cloudinary.com/dsqwm3c9a/image/upload/v1624695545/Rectangle_192_uovvsq.svg"
                alt="rectagle3"
                className="rectagle3"
              />
            </div>
            <button type="button" className="login_btn">
              Log in
            </button>
          </div>
        </nav>
        <div className="profile_details_container">
          <div className="profile_container">
            <img
              src="https://res.cloudinary.com/dsqwm3c9a/image/upload/v1624698674/Title_cs36it.jpg"
              alt="profile"
              className="profile_img"
            />
            <hr className="horizontal_line" />
            <h1 className="profile_name">Nikhil</h1>
            <p className="profile_text">CCBP Learner</p>
            <p className="profile_description">
              lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s,
            </p>
            <img
              src="https://res.cloudinary.com/dsqwm3c9a/image/upload/v1624699354/Rectangle_268_ylydcz.svg"
              alt="rectangle268"
              className="rectangle268"
            />
            <img
              src="https://res.cloudinary.com/dsqwm3c9a/image/upload/v1624699385/Rectangle_269_up02ie.svg"
              alt="rectangle269"
              className="rectangle269"
            />
          </div>
          <div className="information-card">
            <h1 className="card-heading">Try SmartStudy</h1>
            <hr className="card-horizontal-line" />
            <div className="student-data-container">
              <p className="step1">Step 1</p>
              <p className="courses-heading">Courses</p>
              {streamClicked && (
                <div className="courses-container">
                  {coursesData.map((each) => (
                    <EachCourse
                      eachData={each}
                      eachFun={this.clickCourse}
                      key={each.courseName}
                    />
                  ))}
                </div>
              )}
              {courseClicked && (
                <Streams
                  eventCourse={eventCourse}
                  selectStream={this.selectStream}
                  key={0}
                />
              )}
              {showData && (
                <div className="container-result">
                  <p className="streamResult">{eventStream}</p>
                  <p className="edit-button">Edit</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainApplication;
