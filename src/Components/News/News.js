import React, { Component } from "react";
import NewsItem from "../NewsItem/NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container my-3 ">
        <div className="row">
          <h2>Top HeadLines</h2>
        </div>
        <div className="row py-4">
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <NewsItem title="myTitle" description="xyz" />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <NewsItem title="myTitle" description="xyz" />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <NewsItem title="myTitle" description="xyz" />
          </div>
        </div>{" "}
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <NewsItem title="myTitle" description="xyz" />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <NewsItem title="myTitle" description="xyz" />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <NewsItem title="myTitle" description="xyz" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
