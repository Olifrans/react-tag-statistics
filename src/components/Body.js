import React, { Component } from "react";
import youtube from "../supports/youtube";
import Youtube from "../supports/youtube";
import Form from "./Form";
import Result from "./Result";

export default class Body extends Component {
  state = {};

  handleSubmit = async (term) => {
    const response = await youtube.get("/videos", {
      params: {
        id: term,
      },
    });

    this.setState({
      everything: response.data.items,
    });
  };



  render() {
    return (
      <div className="w-full container mx-auto my-12">

        <Form handleFormSubmit={this.handleSubmit} />

        <Result />

        <Youtube />

      </div>
    );
  }
}
