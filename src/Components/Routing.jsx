import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import PageNotFound from "./Common/PageNotFound";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import { connect } from "react-redux";
import { setUser } from "../Redux/Actions";
import "../css/index.css";
import MainContainer from "./MainContainer";
class Routing extends React.Component {
  componentDidMount() {
    if (localStorage.getItem("auth-token")) {
      this.props.setUser();
    }
  }
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={MainContainer} />
          <Route exact path="/explore" component={MainContainer} />
          {/* <Route exact path="/quotation" component={MainContainer} /> */}
          <Route exact path="/save/:id" component={MainContainer} />
          <Route exact path="/profile/:id" component={MainContainer} />
          <Route exact path="/setting" component={MainContainer} />
          <Route exact path="/edit/:id" component={MainContainer} />
          <Route exact path="/quotation" component={MainContainer} />
          <Route exact path="/artist/:id" component={MainContainer} />
          <Route exact path="/auth/login" component={Login} />
          <Route exact path="/auth/register" component={Register} />
          <Route exact path="/newpost/image/:id" component={MainContainer} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.UserAuth.user,
  };
};

export default connect(mapStateToProps, { setUser })(Routing);
