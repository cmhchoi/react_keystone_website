import React from 'react';
import { Link } from 'react-router';
import List from '../components/List.jsx';
import $ from "jquery";

export default class History extends React.Component {

  render() {
    const histories = this.props.state.histories;
    const language = this.props.params.language;
    const labels = this.props.state.labels;
    let lang, langLink = '';
    lang = language === 'zh-t' ? 'chinese_traditional' : language === 'zh-s' ? 'chinese_simplified' : 'english';
    langLink = (language === 'zh-t' || language === 'zh-s') ? `/${language}` : '';
    if(histories){
      return(
        <div>
          <div className="row">
            <div className="col-xs-12">
              <ol className="breadcrumb">
                <li><Link className="grey underline" to={{pathname: `${langLink}/`}}>{labels.home[lang]}</Link></li>
                <li><Link className="grey underline" to={{pathname: `${langLink}/who-we-are`}}>{labels.who_we_are[lang]}</Link></li>
                <li className="active">{labels.history[lang]}</li>
              </ol>
            </div>
          </div>
          <List items={histories} language={lang}/>
        </div>
      )
    } else {
      // $.get('/api/cultures', cultures => {
      //   this.props.updateAppState({ histories });
      // })
      return(
        <div className="row">
          <div className="col-xs-12">
            <ol className="breadcrumb">
              <li><Link className="grey underline" to={{pathname: `${langLink}/`}}>{labels.home[lang]}</Link></li>
              <li><Link className="grey underline" to={{pathname: `${langLink}/who-we-are`}}>{labels.who_we_are[lang]}</Link></li>
              <li className="active">{labels.history[lang]}</li>
            </ol>
          </div>
        </div>
      )
    }
  }
  
}