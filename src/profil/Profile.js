import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
class Profile extends Component {
  static defaultProps = {
    fullName: "amal",
    bio: "check the project and let as now your opinion",
    profession: "Developer",
  };

  handleName = () => {
    alert(`Profile user name is ${this.props.fullName}`);
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">
            <span className="card-subtitle mb-2 text-muted">FullName : </span>
            {this.props.fullName}
          </h4>
          <p className="card-text">
            <span className="card-subtitle mb-2 text-muted">Bio : </span>
            {this.props.bio}
          </p>
          <p className="card-title">
            <span className="card-subtitle mb-2 text-muted">
              Profession :{" "}
            </span>
            {this.props.profession}
          </p>
          <button
            className="btn btn-outline-dark"
            onClick={this.handleName}
          >
            handleName
          </button>
        </div>
      </div>
    );
  }
}

export default Profile;
