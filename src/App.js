import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default function App() {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  const [progress, setProgress] = useState(0);

  return (
    <div className="container-fluid pb-3">
      <Router>
        <LoadingBar color="#0D6EFD" height={3} progress={progress} />
        <br />
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            replace
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="general"
                items={pageSize}
                category="general"
                country="in"
              />
            }
          />
          <Route
            exact
            path="/business"
            replace
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="business"
                items={pageSize}
                category="business"
                country="in"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            replace
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="entertainment"
                items={pageSize}
                category="entertainment"
                country="in"
              />
            }
          />
          <Route
            exact
            path="/health"
            replace
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="health"
                items={pageSize}
                category="health"
                country="in"
              />
            }
          />
          <Route
            exact
            path="/science"
            replace
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="science"
                items={pageSize}
                category="science"
                country="in"
              />
            }
          />
          <Route
            exact
            path="/technology"
            replace
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="technology"
                items={pageSize}
                category="technology"
                country="in"
              />
            }
          />
          <Route
            exact
            path="/sports"
            replace
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="sports"
                items={pageSize}
                category="sports"
                country="in"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
