import { Component } from "react";
import "./index.css";

class Streams extends Component {
  state = {
    streamsData: { 0: [1, 2, 3] },
  };

  componentDidMount = async () => {
    const { eventCourse } = this.props;
    console.log(eventCourse);
    const api = `/streams/${eventCourse}`;
    const options = {
      method: "GET",
    };
    const response = await fetch(api, options);
    const fetchedData = await response.json();
    const streamResponse = fetchedData.map((each) => ({
      courseName: each.course_name,
      stream1: each.stream1,
      stream2: each.stream2,
      stream3: each.stream3,
    }));
    this.setState({ streamsData: streamResponse });
  };

  streamFun = (event) => {
    const { param } = event.target.dataset;
    const { selectStream } = this.props;
    selectStream(param);
  };

  render() {
    const { streamsData } = this.state;
    const { stream1, stream2, stream3 } = streamsData[0];
    return (
      <div>
        <div className="stream-container">
          <p className="stream-heading">Stream</p>
          <p className="see-all">See all</p>
        </div>
        <div className="each-stream">
          <p
            className="each-stream-name"
            data-param={stream1}
            onClick={this.streamFun}
          >
            {stream1}
          </p>
        </div>
        <div className="each-stream">
          <p
            className="each-stream-name"
            data-param={stream2}
            onClick={this.streamFun}
          >
            {stream2}
          </p>
        </div>
        <div className="each-stream">
          <p
            className="each-stream-name"
            data-param={stream3}
            onClick={this.streamFun}
          >
            {stream3}
          </p>
        </div>
      </div>
    );
  }
}

export default Streams;
