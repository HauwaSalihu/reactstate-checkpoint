import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "John Doe",
        bio: "A passionate developer and avid learner.",
        imgSrc:
          "https://images.pexels.com/photos/1597690/pexels-photo-1597690.jpeg?auto=compress&cs=tinysrgb&w=600",
        profession: "Software Engineer",
      },
      shows: false,
      mountedTime: 0,
    };

    this.timer = null;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleShow = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  render() {
    const { Person, shows, mountedTime } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>
        {shows && (
          <div>
            <img src={Person.imgSrc} alt={Person.fullName} />
            <h1>{Person.fullName}</h1>
            <p>{Person.bio}</p>
            <h2>{Person.profession}</h2>
          </div>
        )}
        <footer>
          <p>Time since component mounted: {mountedTime} seconds</p>
        </footer>
      </div>
    );
  }
}

export default App;
