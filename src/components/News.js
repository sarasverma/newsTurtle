import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  // default props
  static defaultProps = {
    pageSize: 18,
    country: "in",
    category: "general",
  };

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
    this.state = { articles: [], loading: false, page: 1, totalResults: 0 };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} | News turtle`;
  }

  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    this.props.setProgress(40);
    const data = await fetch(url);
    const parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
    console.log(parsedData);
  }

  async componentDidMount() {
    // this will run after render(check life cycle diagram for more)
    console.log("it is running now!");
    this.updateNews();
  }

  fetchMoreDate = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
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
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreDate}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row">
                {this.state.articles.map((element) => {
                  return (
                    <div className="col-md-4 my-2" key={element.url}>
                      <NewsItem
                        title={element.title}
                        description={element.description}
                        imgUrl={element.urlToImage}
                        url={element.url}
                        source={element.source.name}
                        publishedAt={new Date(
                          element.publishedAt
                        ).toGMTString()}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}
