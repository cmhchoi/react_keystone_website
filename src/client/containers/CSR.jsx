import React from 'react';
import { Link } from 'react-router';
import Frame from '../components/Frame.jsx';

export default class CSR extends React.Component {
  
  render() {
    const language = this.props.params.language;
    const labels = this.props.state.labels;
    const csr = this.props.state.csr;
    let lang, langLink = '';
    lang = language === 'zh-t' ? 'chinese_traditional' : language === 'zh-s' ? 'chinese_simplified' : 'english';
    langLink = (language === 'zh-t' || language === 'zh-s') ? `/${language}` : '';
    if(csr) {
      return(
        <div>
          <div className="row">
            <div className="col-xs-12">
              <ol className="breadcrumb">
                <li><Link className="grey underline" to={{pathname: `${langLink}/`}}>{labels.home[lang]}</Link></li>
                <li className="active">{labels.csr[lang]}</li>
              </ol>
            </div>
          </div>
          <Frame pictures={ csr } language={ lang }/>
        </div>
      )
    } else {
      return(
        <div className="row">
          <div className="col-xs-12">
            <ol className="breadcrumb">
              <li><Link className="grey underline" to={{pathname: `${langLink}/`}}>{labels.home[lang]}</Link></li>
              <li className="active">{labels.csr[lang]}</li>
            </ol>
          </div>
        </div>
      )
    }
  }
  
}