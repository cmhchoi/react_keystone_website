import React from 'react';
import { Link } from 'react-router';
import Frame from '../components/Frame.jsx';

export default class Home extends React.Component {
  
  render() {
    const language = this.props.params.language;
    const labels = this.props.state.labels;
    const products = this.props.state.products;
    let lang, langLink = '';
    lang = language === 'zh-t' ? 'chinese_traditional' : language === 'zh-s' ? 'chinese_simplified' : 'english';
    langLink = (language === 'zh-t' || language === 'zh-s') ? `/${language}` : '';
    if(products) {
      return(
        <div>
          <div className="row">
            <div className="col-xs-12">
              <ol className="breadcrumb">
                <li><Link className="grey underline" to={{pathname: `${langLink}/`}}>{labels.home[lang]}</Link></li>
                <li className="active">{labels.products[lang]}</li>
              </ol>
            </div>
          </div>
          <Frame pictures={ products } language={ lang }/>
        </div>
      )
    } else {
      return(
        <div className="row">
          <div className="col-xs-12">
            <ol className="breadcrumb">
              <li><Link className="grey underline" to={{pathname: `${langLink}/`}}>{labels.home[lang]}</Link></li>
              <li className="active">{labels.products[lang]}</li>
            </ol>
          </div>
        </div>
      )
    }
  }
  
}