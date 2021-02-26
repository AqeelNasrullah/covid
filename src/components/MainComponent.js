import React, { useEffect, useState } from "react";
import Header from "./layout/HeaderComponent";
import Footer from "./layout/FooterComponent";
import { Route, Switch } from "react-router-dom";
import Home from "./HomeComponent";
import Global from "./GlobalComponent";
import Advisory from "./AdvisoryComponent";

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
            <Route path="/advisory" component={ Advisory } />
            <Route path="/stats/country/:country" component={ props => {
              return (
                <>
                  <div className="container">
                    <h1>{ props.match.params.country.replace(/\b\w/g, s => s.toUpperCase()) }</h1>
                  </div>
                </>
              )
            } } />
    
          {/* 404 Route */}
          <Route
            component={() => {
              return (
                <div className="container py-5">
                  <h1 className="text-center font-weight-bolder">404 - Not Found</h1>
                  <p className="text-center font-weight-bolder">The page you requested is not found on server.</p>
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
