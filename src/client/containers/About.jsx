import React from 'react';
import { Link } from 'react-router';
import Frame from '../components/Frame.jsx';
import $ from "jquery";

export default class About extends React.Component {

  render() {
    const language = this.props.params.language;
    const labels = this.props.state.labels;
    const who_we_are = this.props.state.who_we_are;
    let lang, langLink = '';
    lang = language === 'zh-t' ? 'chinese_traditional' : language === 'zh-s' ? 'chinese_simplified' : 'english';
    langLink = (language === 'zh-t' || language === 'zh-s') ? `/${language}` : '';
    if(who_we_are) {
      return(
        <div>
          <div className="row">
            <div className="col-xs-12">
              <ol className="breadcrumb grey underline">
                <li><Link className="grey underline" to={{pathname: `${langLink}/`}}>{labels.home[lang]}</Link></li>
                <li className="active">{labels.who_we_are[lang]}</li>
              </ol>
            </div>
            <div className="col-xs-12 text-body">
            	<h3>{labels.overview[lang]}</h3>
            	<p>Established in 2001, First Glory Group is a well experienced textiles trading and
              garment manufacturing company with offices and manufacturing facilities located in
              Hong Kong, Mainland China and in the Philippines. First Glory has been a pioneer
              garment manufacturer; providing the best quality garments that entails the most
              comfortable, durable and fashionable attributes that go beyond the needs of our
              customers.<br/><br/>
              With over 2000 direct employees, each and every one of us are very keen in offering
              the best service and product to our customers around the world. We also believe that
              staff training and development is key within First Glory group, hence we work closely
              with customers to understand the demands of the marketplace.</p>
            </div>
          </div>
          <Frame pictures={ who_we_are } language={ lang }/>
        </div>
      )
    } else {
      return(
        <div className="row">
          <div className="col-xs-12">
            <ol className="breadcrumb grey underline">
              <li><Link className="grey underline" to={{pathname: `${langLink}/`}}>{labels.home[lang]}</Link></li>
              <li className="active">{labels.who_we_are[lang]}</li>
            </ol>
          </div>
        </div>
      )
    }
  }
  
}