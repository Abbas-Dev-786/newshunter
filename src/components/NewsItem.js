import React from "react";

export default function NewsItem(props) {
  const randomLikes = () => {
    return Math.ceil(Math.random() * 200);
  };

  const like = (e) => {
    let like = true;
    const btn = e.target.closest(".btn");
    const heart = btn.querySelector(".bi");

    if (!btn) return;

    if (heart.classList.contains("bi-heart") && like) {
      heart.classList.remove("bi-heart");
      heart.classList.add("bi-heart-fill");

      heart.textContent = ` ${+heart.textContent + 1}`;
      like = false;
    }

    if (!heart.classList.contains("bi-heart") && like) {
      heart.classList.remove("bi-heart-fill");
      heart.classList.add("bi-heart");

      heart.textContent = ` ${+heart.textContent - 1}`;
    }
  };

  const bookmark = (e) => {
    let bookmark = true;
    const btn = e.target.closest(".btn");
    const bookmarkIcon = btn.querySelector(".bi");

    if (!btn) return;

    if (bookmarkIcon.classList.contains("bi-bookmark") && bookmark) {
      bookmarkIcon.classList.remove("bi-bookmark");
      bookmarkIcon.classList.add("bi-bookmark-fill");
      bookmark = false;
    }

    if (!bookmarkIcon.classList.contains("bi-bookmark") && bookmark) {
      bookmarkIcon.classList.remove("bi-bookmark-fill");
      bookmarkIcon.classList.add("bi-bookmark");
    }
  };

  return (
    <div>
      <div className="card h-100">
        <div className="img-container position-relative">
          <img src={props.imgUrl} className="card-img-top" alt="news-img" />
          <button
            className="btn btn-secondary position-absolute"
            style={{ top: "0px", right: "0px" }}
          >
            <i className="bi bi-bookmark" onClick={bookmark}></i>
          </button>
          <button
            className="btn btn-danger position-absolute"
            style={{ top: "80px", right: "0px" }}
          >
            <i className="bi bi-heart" onClick={like}>
              {" "}
              {randomLikes()}
            </i>
          </button>
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a
            href={props.url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Read More
          </a>
        </div>
        <div className="card-footer text-muted">Written by {props.author}</div>
      </div>
    </div>
  );
}
