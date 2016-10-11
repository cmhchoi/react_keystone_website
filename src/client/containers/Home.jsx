import React from 'react';
import Frame from '../components/Frame.jsx';

export default class Home extends React.Component {
  
  render() {
    const language = this.props.params.language;
    const labels = this.props.state.labels;
    const home = this.props.state.home;
    let lang, langLink = '';
    lang = language === 'zh-t' ? 'chinese_traditional' : language === 'zh-s' ? 'chinese_simplified' : 'english';
    langLink = (language === 'zh-t' || language === 'zh-s') ? `/${language}` : '';
    if(home) {
      return(
        <div>
          <Frame pictures={ home } language={ lang }/>
        </div>
      )
    } else {
      return(
        <div></div>
      )
    }
  }
  
}