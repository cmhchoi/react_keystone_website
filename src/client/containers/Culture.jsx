import React from 'react';
import { Link } from 'react-router';
import List from '../components/List.jsx';
import $ from "jquery";

export default class Culture extends React.Component {

  render() {
    const cultures = this.props.state.cultures;
    const language = this.props.params.language;
    const labels = this.props.state.labels;
    let lang, langLink = '';
    lang = language === 'zh-t' ? 'chinese_traditional' : language === 'zh-s' ? 'chinese_simplified' : 'english';
    langLink = (language === 'zh-t' || language === 'zh-s') ? `/${language}` : '';
    if(cultures){
      return(
        <div>
          <div className="row">
            <div className="col-xs-12">
              <ol className="breadcrumb">
                <li><Link className="grey underline" to={{pathname: `${langLink}/`}}>{labels.home[lang]}</Link></li>
                <li><Link className="grey underline" to={{pathname: `${langLink}/who-we-are`}}>{labels.who_we_are[lang]}</Link></li>
                <li className="active">{labels.culture_core_values[lang]}</li>
              </ol>
            </div>
          </div>
          <List items={cultures} language={lang}/>
        </div>
      )
    } else {
      // $.get('/api/cultures', cultures => {
      //   this.props.updateAppState({ cultures });
      // })
      return(
        <div className="row">
          <div className="col-xs-12">
            <ol className="breadcrumb">
              <li><Link className="grey underline" to={{pathname: `${langLink}/`}}>{labels.home[lang]}</Link></li>
              <li><Link className="grey underline" to={{pathname: `${langLink}/who-we-are`}}>{labels.who_we_are[lang]}</Link></li>
              <li className="active">{labels.culture_core_values[lang]}</li>
            </ol>
          </div>
        </div>
      )
    }
  }
  
}