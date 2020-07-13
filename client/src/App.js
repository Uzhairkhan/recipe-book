import React from "react";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";
import Home from "./components/Home";
import Login from "./components/login/loginShow";
import Register from "./components/register/Show";
import Recipe from "./components/recipe/recipeShow";
import PrivateRoute from "./private";

function App(props) {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Container id="nav">
            <Link className="navbar-brand" id="heading" to="/">
              Recipe Book
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {localStorage.getItem("authToken") ? (
                <ul className="navbar-nav mr-auto ">
                  <li className="nav-item active ">
                    <Link className="nav-link" to="/">
                      Home <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/recipe/add">
                      Add
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/"
                      onClick={() => {
                        localStorage.clear();
                        window.location.href = "/";
                      }}
                    >
                      LogOut
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul className="navbar-nav mr-auto ">
                  <li className="nav-item active ">
                    <Link className="nav-link" to="/">
                      Home <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Sign In
                    </Link>
                  </li>
                </ul>
              )}

              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </Container>
        </nav>

        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} exact={true} />
          <PrivateRoute path="/recipe/add" component={Recipe} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
