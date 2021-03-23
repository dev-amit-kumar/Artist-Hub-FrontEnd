import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import PageNotFound from "./common/PageNotFound";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ArtistPage from "./ArtistProfilePage/ArtistPage";
import UserProfile from "./UserProfilePage/UserProfile";

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/register" component={Register} />
        <Route path="/artist/:id" component={ArtistPage} />
        <Route path="/user" component={UserProfile} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;