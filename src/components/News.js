import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import Spinner from "./Spinner";

export default class News extends Component {
  // default props
  // static defaultProps = {
  //   pageSize: 18,
  //   country: "in",
  //   category: "general",
  // };

  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  };

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = { articles: [], loading: false, page: 1 };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} | News turtle`;
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d3ead335d8b341818851bbd018784538&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    console.log(parsedData);
  }

  async componentDidMount() {
    // this will run after render(check life cycle diagram for more)
    this.updateNews();
  }

  handlePrev = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNext = async () => {
    if (
      parseInt(
        this.state.totalResults / (this.props.pageSize * this.state.page)
      ) > 0
    ) {
      this.setState({
        page: this.state.page + 1,
      });
      this.updateNews();
    }
  };

  render() {
    return (
      <>
        <div className="container">
          <h1 className="text-center" style={{ margin: "1.5rem 0" }}>
            {`News turtle - Top ${this.capitalizeFirstLetter(
              this.props.category
            )} headlines !`}
          </h1>
          {this.state.loading && <Spinner />}
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-4 my-2" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imgUrl={element.urlToImage}
                      url={element.url}
                      source={element.source.name}
                      publishedAt={new Date(element.publishedAt).toGMTString()}
                    />
                  </div>
                );
              })}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrev}
            >
              Previous
            </button>
            <button
              disabled={
                parseInt(
                  this.state.totalResults /
                    (this.props.pageSize * this.state.page)
                ) === 0
              }
              type="button"
              className="btn btn-dark"
              onClick={this.handleNext}
            >
              Next
            </button>
          </div>
        </div>
      </>
    );
  }
}
