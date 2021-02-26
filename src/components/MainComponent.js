import React, { useEffect, useState } from "react";
import Header from "./layout/HeaderComponent";
import Footer from "./layout/FooterComponent";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./HomeComponent";
import Global from "./GlobalComponent";

const Main = () => {
    const [footerHeight, setFooterHeight] = useState(0);

    useEffect(() => {
        let foot = document.getElementById('footer').clientHeight;
        setFooterHeight(foot);
    }, [])

  return (
    <div>
      <header>
        <Header />
      </header>

      <main style={{ marginBottom: `${footerHeight}px` }} className="py-5">
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/global" component={ Global } />
    
          {/* 404 Route */}
          <Route
            component={() => {
              return (
                <div className="container py-5">
                  <h1 className="text-center font-weight-bolder">404 - Not Found</h1>
                  <p className="text-center font-weight-bolder">The page you requested is not found on server.</p>
                  <p className="text-center"><Link to="/" className="text-danger"><i className="bi bi-arrow-left"></i> Go to Home</Link></p>
                </div>
              );
            }}
          />
        </Switch>
      </main>

      <footer style={{ width: "100%", position: "fixed", bottom: "0px" }} id="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Main;
