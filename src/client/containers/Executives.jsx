import React from 'react';
import { Link } from 'react-router';
import $ from "jquery";

export default class Executives extends React.Component {

  render() {
    const executives = this.props.state.executives;
    const language = this.props.params.language;
    const labels = this.props.state.labels;
    let lang, langLink = '';
    lang = language === 'zh-t' ? 'chinese_traditional' : language === 'zh-s' ? 'chinese_simplified' : 'english';
    langLink = (language === 'zh-t' || language === 'zh-s') ? `/${language}` : '';
    if(executives) {
      return(
        <div>
          <div className="row">
            <div className="col-xs-12">
              <ol className="breadcrumb grey underline">
                <li><Link className="grey underline" to={{pathname: `${langLink}/`}}>{labels.home[lang]}</Link></li>
                <li><Link className="grey underline" to={{pathname: `${langLink}/who-we-are`}}>{labels.who_we_are[lang]}</Link></li>
                <li className="active">{labels.executive_officers[lang]}</li>
              </ol>
            </div>
          </div>
          <div className="row">
    		    <div className="col-xs-12 executives">
              <ul>
                {(executives.map((executive) => {
                  return(
                    <li>
                      <div className="exec">
                        <div className="col-xs-offset-2 col-xs-8 col-sm-offset-0 col-sm-4 exec-img-container">
                          <img className="exec-img" src={executive.image}/>
                        </div>
                        <div className="col-xs-12 col-sm-8 exec-bio">
                          <h4>{executive.name[lang]}</h4>
                          <h4>{executive.title[lang]}</h4>
                          <p>{executive.description[lang]}</p>
                        </div>
                      </div>
                    </li>
                  )
                }))}
              </ul>
    		    </div>
          </div>     
        </div>
      )
    } else {
      $.get('/api/executives', executives => {
        this.props.updateAppState({ executives });
      })
      return(
        <div>
          <div className="row">
            <div className="col-xs-12">
              <ol className="breadcrumb grey underline">
                <li><Link className="grey underline" to={{pathname: `${langLink}/`}}>{labels.home[lang]}</Link></li>
                <li><Link className="grey underline" to={{pathname: `${langLink}/who-we-are`}}>{labels.who_we_are[lang]}</Link></li>
                <li className="active">{labels.executive_officers[lang]}</li>
              </ol>
            </div>
          </div>
        </div>
      )
    }
  }
  
}
