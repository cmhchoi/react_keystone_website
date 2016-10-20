import React from 'react';
import { Link } from 'react-router';
import List from '../components/List.jsx';
import $ from "jquery";

export default class CSRCategory extends React.Component {

  render() {
    const CSR_responsibility = this.props.state.CSR_responsibility;
    const CSR_charity = this.props.state.CSR_charity;
    const CSR_practices = this.props.state.CSR_practices;
    const CSR_sustainability = this.props.state.CSR_sustainability;
    const CSR_collaboration = this.props.state.CSR_collaboration;
    const language = this.props.params.language;
    const labels = this.props.state.labels;
    let CSR_Category = '';
    if(this.props.params.category === 'sustainability') CSR_Category = CSR_sustainability;
    if(this.props.params.category === 'charitable-programmes') CSR_Category = CSR_charity;
    if(this.props.params.category === 'practices') CSR_Category = CSR_responsibility;
    if(this.props.params.category === 'responsibility') CSR_Category = CSR_practices;
    if(this.props.params.category === 'collaboration') CSR_Category = CSR_collaboration;
    let lang, langLink = '';
    lang = language === 'zh-t' ? 'chinese_traditional' : language === 'zh-s' ? 'chinese_simplified' : 'english';
    langLink = (language === 'zh-t' || language === 'zh-s') ? `/${language}` : '';
    if(CSR_responsibility && CSR_charity && CSR_practices && CSR_sustainability && CSR_collaboration){
      if(this.props.params.category === 'charitable-programmes') this.props.params.category = 'charitable_programmes';
      return(
        <div>
          <div className="row">
            <div className="col-xs-12">
              <ol className="breadcrumb">
                <li><Link className="grey underline" to={{pathname: `${langLink}/`}}>{labels.home[lang]}</Link></li>
                <li><Link className="grey underline" to={{pathname: `${langLink}/csr`}}>{labels.csr[lang]}</Link></li>
                <li className="active">{labels[this.props.params.category][lang]}</li>
              </ol>
            </div>
          </div>
          <List items={ CSR_Category} language={lang}/>
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
              <li className="active">{labels[this.props.params.category][lang]}</li>
            </ol>
          </div>
        </div>
      )
    }
  }
  
}