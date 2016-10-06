import React from 'react';
import { Link } from 'react-router';

export default class Contact extends React.Component {
  
  render() {
    const language = this.props.params.language;
    const labels = this.props.state.labels;
    let lang, langLink = '';
    lang = language === 'zh-t' ? 'chinese_traditional' : language === 'zh-s' ? 'chinese_simplified' : 'english';
    langLink = (language === 'zh-t' || language === 'zh-s') ? `/${language}` : '';
    return(
      <div>
        <div className="row">
          <div className="col-xs-12">
            <ol className="breadcrumb">
              <li><Link className="grey underline" to={{pathname: `${langLink}/`}}>{labels.home[lang]}</Link></li>
              <li className="active">{labels.contact_us[lang]}</li>
            </ol>
          </div>
          <div className="col-xs-12 text-body">
            <h4>{labels.email[lang]}</h4>
            <p>
              <a className="grey underline" href="mailto:info@firstglory.com">info@firstglory.com</a>
            </p>
            <h4>{labels.hong_kong[lang]}</h4>
            <p>
              {labels.hk_address[lang]}
            </p>
            <p>
              (852) 23073020/ (852) 23073091
            </p>
            <h4>{labels.zhongshan[lang]}, {labels.china[lang]}</h4>
            <p>
              {labels.zhongshan_address[lang]}
            </p>
            <p>
              (86) 0760-87326630 / 0760-87330330
            </p>
            <h4>{labels.cebu[lang]}, {labels.philippines[lang]}</h4>
            <p>
              {labels.cebu_address[lang]}
            </p>
            <p>
              (63) 32-495-5177
            </p>
          </div>
        </div>
      </div>
    )
  }
  
}