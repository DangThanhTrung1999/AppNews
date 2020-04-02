import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import News from "../components/News";
import Home from "../components/Home";
import NewsDetail from "../components/NewsDetail";
import Contact from "../components/Contact";
import '../App.css'
export default class DieuHuongURL extends Component {
  render() {
    return (
      <div className='mt-50'>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/news" component={News}/>
          <Route path="/news-detail/:slug.:id.html" component={NewsDetail}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
        </div>
    );
  }
}
