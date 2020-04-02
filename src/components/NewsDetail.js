import React, { Component } from "react";
import data from "../data/data.json";
import "../App.css";
import NewsItem from "./NewsItem";
export default class NewsDetail extends Component {
  dem = 1;
  tinKhac = data.map((value, key) => {
    if (value.id !== parseInt(this.props.match.params.id,12)) {
      if (this.dem <= 3) {
        this.dem++;
        return (
          <NewsItem
            tinId={value.id}
            linkAnh={value.linkAnh}
            tieuDe={value.tieuDe}
            key={key}
          />
        );
      }
    }
    return null;
  });
  render() {
    console.log(this.props.match.params.id);
    console.log("ham detail da chay");
    return (
      <div className="img-new-detail">
        {data.map((value, key) => {
          if (value.id === parseInt(this.props.match.params.id,20))
            return (
              <div className="card" key={key}>
                <img className="card-img-top" src={value.linkAnh} alt='sdad'/>
                <div className="card-body">
                  <h4 className="card-title">{value.tieuDe}</h4>
                  <p className="card-text">{value.noiDung}</p>
                </div>
              </div>
            );
        })}
        <h3>Tin khác</h3>
        <div className="row">{this.tinKhac}</div>
      </div>
    );
  }
}
