import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imgSrc: "https://example.com/profile.jpg",
        profession: "Software Engineer"
      },
      shows: false,
      mountTime: new Date()
    };
  }

  toggleProfile = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        mountTime: new Date()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { person, shows, mountTime } = this.state;
    return (
      <div>
        <button onClick={this.toggleProfile}>Toggle Profile</button>
        {shows && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time since mount: {Math.round((new Date() - mountTime) / 1000)} seconds</p>
      </div>
    );
  }
}

export default App;
