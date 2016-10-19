import React from 'react';
import { Link } from 'react-router';
import Bulletin from '../components/Bulletin.jsx';
import $ from "jquery";

export default class Materials extends React.Component {

  render() {
    const language = this.props.params.language;
    let fabricContent = this.props.state.fabricContent;
    let fabricType = this.props.state.fabricType;
    const labels = this.props.state.labels;
    console.log('content',fabricContent);
    console.log('type',fabricType);
    let lang, langLink = '';
    lang = language === 'zh-t' ? 'chinese_traditional' : language === 'zh-s' ? 'chinese_simplified' : 'english';
    langLink = (language === 'zh-t' || language === 'zh-s') ? `/${language}` : '';
    if(fabricContent && fabricType){
      return(
        <div>
          <div className="row">
            <div className="col-xs-12">
              <ol className="breadcrumb">
                <li><Link className="grey underline" to={{pathname: `${langLink}/`}}>{labels.home[lang]}</Link></li>
                <li><Link className="grey underline" to={{pathname: `${langLink}/products`}}>{labels.products[lang]}</Link></li>
                <li className="active">{labels.materials_used[lang]}</li>
              </ol>
            </div>
          </div>
          <Bulletin items={ fabricContent } language={ lang } banner={ true } title={ labels.fabric_content[lang] }/>
          <Bulletin items={ fabricType } language={ lang }  banner={ false } title={ labels.type_of_fabric[lang] }/>
        </div>
      )
    } else {
      // $.get('/api/fabrics', fabrics => {
      //   fabricContent = [];
      //   fabricType = [];
      //   fabrics.map(fabric => {
      //     fabric.fabric_ === 'content' ? fabricContent.push(fabric) : fabricType.push(fabric);
      //   })
      //   this.props.updateAppState({ fabricContent, fabricType });
      // })
      return(
        <div className="row">
          <div className="col-xs-12">
            <ol className="breadcrumb">
              <li><Link className="grey underline" to={{pathname: `${langLink}/`}}>{labels.home[lang]}</Link></li>
              <li><Link className="grey underline" to={{pathname: `${langLink}/products`}}>{labels.products[lang]}</Link></li>
              <li className="active">{labels.materials_used[lang]}</li>
            </ol>
          </div>
        </div>
      )
    }
  }
  
}