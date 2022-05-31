import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [isCategory, setCategory] = useState(true);

  const check = (val) => {
    if (isCategory) props.setProgress(val);
  };

  const closeRequest = (s) => {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };

  const ajax = async (page = 1, arr = []) => {
    try {
      setLoading(true);

      check(50);

      document.title = `NewsMonkey - ${
        props.category[0].toUpperCase() + props.category.slice(1)
      } News`;
      const fetchData = fetch(
        `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.items}`
      );
      const response = await Promise.race([fetchData, closeRequest(3)]);
      check(75);

      const data = await response.json();

      check(100);

      const refactoredData = data.articles.map((el) => {
        return {
          title: !el.title ? "" : el.title,
          description: !el.description ? "" : el.description,
          urlToImage: !el.urlToImage
            ? "https://st1.bgr.in/wp-content/uploads/2022/02/realme-gt-2-pro.jpg"
            : el.urlToImage,
          url: !el.url ? "#" : el.url,
          author: !el.author ? "Abbas Bhanpura wala" : el.author,
        };
      });

      props.setProgress(100);

      setArticles([...arr, ...refactoredData]);
      setCurrentPage(page);
      setTotalResults(data.totalResults);
      setLoading(false);
      setCategory(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    ajax();
    //eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    await ajax(currentPage + 1, articles);
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <div className="container mt-5">
        <h1 className="mb-4 text-center">
          NewsMonkey - Top{" "}
          {props.category === "general"
            ? ""
            : props.category[0].toUpperCase() + props.category.slice(1) + " "}
          Headlines
        </h1>
        {isLoading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
              {articles.map((element) => {
                return (
                  <div className="col" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={
                        element.description.split(" ").length > 30
                          ? element.description
                              .split(" ")
                              .slice(0, 30)
                              .join(" ") + "..."
                          : element.description
                      }
                      imgUrl={element.urlToImage}
                      author={element.author}
                      url={element.url}
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

News.propTypes = {
  country: PropTypes.string,
  items: PropTypes.number,
  category: PropTypes.string,
  setProgress: PropTypes.func,
};

News.defaultProps = {
  country: "in",
  items: 8,
  category: "general",
  setProgress: 50,
};
