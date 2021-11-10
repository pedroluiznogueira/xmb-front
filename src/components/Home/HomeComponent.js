import "./HomeComponent.css";
import axios from "axios";
import React, { Component } from "react";
import AerodromeComponent from "../Aerodrome/AerodromeComponent";
import HeaderComponent from "../Header/HeaderComponent";

class HomeComponent extends Component {
  state = {
    selectedFile: null,
  };

  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "file",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    // Details of the uploaded file
    console.log(this.state.selectedFile);

    // Request made to the backend api
    // Send formData object
    axios.post("http://localhost:8080/upload-file", formData);
  };

  // File content to be displayed after
  // file upload is complete
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>
          <p>File Type: {this.state.selectedFile.type}</p>
          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Upload button won't work if you don't select a file</h4>
        </div>
      );
    }
  };

  aerodromeData = () => {
    if (this.state.selectedFile) {
      return <AerodromeComponent filename={this.state.selectedFile.name} />;
    }
  };

  render() {
    return (
      <>
        <HeaderComponent />
        <div className="main">
          <div className="file-input">
            <div class="file-input">
              <input
                className="file"
                id="file"
                type="file"
                onChange={this.onFileChange}
              />
              <label for="file">Select file</label>
            </div>
            <button onClick={this.onFileUpload}>Upload</button>
          </div>
          {/* {this.fileData()} */}
          {this.aerodromeData()}
        </div>
      </>
    );
  }
}

export default HomeComponent;
