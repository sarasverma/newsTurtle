import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    // array destructing
    let { title, description, imgUrl, url } = this.props;
    return (
      <div className="card">
        <img
          src={
            imgUrl
              ? imgUrl
              : "https://upload.wikimedia.org/wikipedia/commons/5/5a/No_image_available_500_x_500.svg"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a
            rel="noreferrer"
            href={url}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Details
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
