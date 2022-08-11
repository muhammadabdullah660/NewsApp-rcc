import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
            zIndex: 1,
          }}
        >
          <span className="badge rounded-pill bg-info"> {source} </span>
        </div>{" "}
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="blank" className="btn btn-sm btn-dark">
              Read More
            </a>
            <p className="card-text">
              <small className="text-danger">
                By {author} on {new Date(date).toUTCString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
