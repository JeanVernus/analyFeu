import React, { Component } from "react";
// import { Document, Page } from "react-pdf";

class Catalogue extends Component {
  state = { 
    // numPages: null,
    // pageNumber: 1 
  };

  // onDocumentLoadSuccess = ({ numPages }) => {
  //   this.setState({ numPages });
  // };

  // goToPrevPage = () =>
  //   this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  // goToNextPage = () =>
  //   this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    // const { pageNumber, numPages } = this.state;

    return (
      <div className="notFoundPadding">
        {/* <nav>
          <button onClick={this.goToPrevPage}>Prev</button>
          <button onClick={this.goToNextPage}>Next</button>
        </nav>

        <div style={{ width: 600 }}>
          <Document
            file="../../public/catalogue_3.pdf"
            onLoadSuccess={this.onDocumentLoadSuccess}>
          </Document>
        </div>
        <p>
          Page {pageNumber} of {numPages}
        </p> */}
        <div className="notFound"><img  src="https://i.ytimg.com/vi/GY8PkikQ8ZE/maxresdefault.jpg" alt="" width="1000px" height="550px"/></div>
      </div>
    );
  }
}
export default Catalogue;