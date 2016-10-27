import React from 'react';
import { Link } from 'react-router';
import Frame from '../components/Frame.jsx';

export default class Gender extends React.Component {
  
  render() {
    const product_men = this.props.state.product_men;
    const product_women = this.props.state.product_women;
    const product_children = this.props.state.product_children;
    let displayProducts = '';
    if(this.props.params.gender === 'men') displayProducts = product_men;
    if(this.props.params.gender === 'women') displayProducts = product_women;
    if(this.props.params.gender === 'children') displayProducts = product_children;
    const language = this.props.params.language;
    const labels = this.props.state.labels;
    let lang, langLink = '';
    lang = language === 'zh-t' ? 'chinese_traditional' : language === 'zh-s' ? 'chinese_simplified' : 'english';
    langLink = (language === 'zh-t' || language === 'zh-s') ? `/${language}` : '';
    if(product_men, product_women, product_children) {
      return(
        <div>
          <div className="row">
            <div className="col-xs-12">
              <ol className="breadcrumb">
                <li><Link className="grey underline" to={{pathname: `${langLink}/`}}>{labels.home[lang]}</Link></li>
                <li><Link className="grey underline" to={{pathname: `${langLink}/products`}}>{labels.products[lang]}</Link></li>
                <li><Link className="grey underline" to={{pathname: `${langLink}/products/category`}}>{labels.category[lang]}</Link></li>
                <li className="active">{labels[this.props.params.gender][lang]}</li>
              </ol>
            </div>
          </div>
          <Frame pictures={ displayProducts } language={ lang }/>
        </div>
      )
    } else {
      return(
        <div>
          <div className="row">
            <div className="col-xs-12">
              <ol className="breadcrumb">
                <li><Link className="grey underline" to={{pathname: `${langLink}/`}}>{labels.home[lang]}</Link></li>
                <li><Link className="grey underline" to={{pathname: `${langLink}/products`}}>{labels.products[lang]}</Link></li>
                <li><Link className="grey underline" to={{pathname: `${langLink}/products/category`}}>{labels.category[lang]}</Link></li>
                <li className="active">{labels[this.props.params.gender][lang]}</li>
              </ol>
            </div>
          </div>
        </div>
      )
    }
  }
  
}