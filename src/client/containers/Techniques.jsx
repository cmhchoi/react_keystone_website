import React from 'react';
import { Link } from 'react-router';
import Bulletin from '../components/Bulletin.jsx';

export default class Techniques extends React.Component {

  render() {
    const techniques = this.props.state.techniques;
    const language = this.props.params.language;
    const labels = this.props.state.labels;
    let lang = '';
    lang = language === 'zh-t' ? 'chinese_traditional' : language === 'zh-s' ? 'chinese_simplified' : 'english';
    if(techniques){
      return(
        <div>
          <div className="row">
            <div className="col-xs-12">
              <ol className="breadcrumb">
                <li><Link className="grey underline" to={{pathname: "/"}}>{labels.home[lang]}</Link></li>
                <li><Link className="grey underline" to={{pathname: "/products"}}>{labels.products[lang]}</Link></li>
                <li className="active">{labels.techniques[lang]}</li>
              </ol>
            </div>
          </div>
          <Bulletin items={ techniques } language={ lang }/>
        </div>
      )
    } else {
      return(
        <div className="row">
          <div className="col-xs-12">
            <ol className="breadcrumb">
              <li><Link className="grey underline" to={{pathname: "/"}}>{labels.home[lang]}</Link></li>
              <li><Link className="grey underline" to={{pathname: "/products"}}>{labels.products[lang]}</Link></li>
              <li className="active">{labels.techniques[lang]}</li>
            </ol>
          </div>
        </div>
      )
    }
  }
  
}