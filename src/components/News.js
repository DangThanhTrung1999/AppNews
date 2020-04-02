import React, { Component } from "react";
import NewsItem from "./NewsItem";
import "../App.css";
import data from '../data/data.json';
export default class News extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {data.map((value, key)=>{
              return <NewsItem 
              tinId={value.id}
              linkAnh={value.linkAnh} 
              tieuDe={value.tieuDe} 
              key={key}/>
          })}
        </div>
      </div>
    );
  }
}
