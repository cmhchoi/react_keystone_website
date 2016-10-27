import React from 'react';
import { Link } from 'react-router';
import Bulletin from '../components/Bulletin.jsx';
import $ from "jquery";

export default class Partners extends React.Component {

  render() {
    const partners = this.props.state.partners;
    const language = this.props.params.language;
    const labels = this.props.state.labels;
    let lang, langLink = '';
    lang = language === 'zh-t' ? 'chinese_traditional' : language === 'zh-s' ? 'chinese_simplified' : 'english';
    langLink = (language === 'zh-t' || language === 'zh-s') ? `/${language}` : '';
    if(partners) {
      return(
        <div>
          <div className="row">
            <div className="col-xs-12">
              <ol className="breadcrumb">
                <li><Link className="grey underline" to={{pathname: `${langLink}/`}}>{labels.home[lang]}</Link></li>
                <li><Link className="grey underline" to={{pathname: `${langLink}/who-we-are`}}>Who We Are</Link></li>
                <li className="active">Our Partners</li>
              </ol>
            </div>
          </div>
          <Bulletin items={this.props.state.partners} language={lang} banner={ true } image={ "http://res.cloudinary.com/fglorywebsite2016/image/upload/c_scale,w_2480/v1476081009/product_category.jpg" }/>
        </div>
      )
    } else {
      return(
        <div className="row">
          <div className="col-xs-12">
            <ol className="breadcrumb">
              <li><Link className="grey underline" to={{pathname: `${langLink}/`}}>{labels.home[lang]}</Link></li>
              <li><Link className="grey underline" to={{pathname: `${langLink}/who-we-are`}}>Who We Are</Link></li>
              <li className="active">Our Partners</li>
            </ol>
          </div>
        </div>
      )
    }
  }
  
}