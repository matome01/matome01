import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import UserLinks from "../UserLinks";
import config from "../../../data/SiteConfig";
import "./About.scss";

import Test from "../mycustom/test"

class About extends Component {
  render() {
    return (
      <div className="about-container md-grid mobile-fix">
        <Card className="md-grid md-cell--8">
          <div className="about-wrapper">
            <img
              src={config.userAvatar}
              className="about-img"
              alt={config.userName}
            />
            <CardText>
              <p className="about-text md-body-1">{config.userDescription}</p>
              <input type="checkbox" id="reverse" /><span id="asdf">가나다라마바사</span><div id="zxcv">아자차카타파하</div><div id="qwer">아야어여오요우유으이</div><div id="wert">あいうえおかきくけこ</div>
              <p>c<span className="hidden_">a</span>oca<span className="hidden_">a</span>usi<span className="hidden_">a</span>an bo<span className="hidden_">a</span>lle
              <span className="hidden_">a</span>ay his<span className="hidden_">a</span>tan<span className="hidden_">a</span>tr<span className="hidden_">a</span>y o<span className="hidden_">a</span>mp
              <span className="hidden_">a</span>oko<span className="hidden_">a</span>ka</p>
              <p><span>horo</span><span className="hidden_">a</span><span>morp</span><span className="hidden_">a</span><span>ha an</span><span className="hidden_">a</span>
              <span>de</span><span className="hidden_">a</span><span>ius geve</span><span className="hidden_">a</span>
              <span>qi</span><span className="hidden_">a</span><span>sh xo</span><span className="hidden_">a</span><span>ph</span><span className="hidden_">a</span><span>ia</span></p>
              <Test />
            </CardText>
            <UserLinks labeled config={config} />
          </div>
        </Card>
      </div>
    );
  }
}

export default About;
