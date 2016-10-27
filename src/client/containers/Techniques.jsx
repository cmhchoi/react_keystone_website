import React from 'react';
import { Link } from 'react-router';
import Bulletin from '../components/Bulletin.jsx';
import $ from "jquery";

export default class Techniques extends React.Component {

  render() {
    const language = this.props.params.language;
    let techniqueDyeing = this.props.state.techniqueDyeing;
    let techniquePrinting = this.props.state.techniquePrinting;
    let techniqueWashing = this.props.state.techniqueWashing;
    const labels = this.props.state.labels;
    let lang, langLink = '';
    lang = language === 'zh-t' ? 'chinese_traditional' : language === 'zh-s' ? 'chinese_simplified' : 'english';
    langLink = (language === 'zh-t' || language === 'zh-s') ? `/${language}` : '';
    if(techniqueDyeing && techniquePrinting && techniqueWashing){
      return(
        <div>
          <div className="row">
            <div className="col-xs-12">
              <ol className="breadcrumb">
                <li><Link className="grey underline" to={{pathname: `${langLink}/`}}>{labels.home[lang]}</Link></li>
                <li><Link className="grey underline" to={{pathname: `${langLink}/products`}}>{labels.products[lang]}</Link></li>
                <li className="active">{labels.techniques[lang]}</li>
              </ol>
            </div>
          </div>
          <Bulletin items={ techniqueDyeing } language={ lang } banner={ true } title={ labels.dyeing[lang] } image={ "http://res.cloudinary.com/fglorywebsite2016/image/upload/c_scale,w_2480/v1477407745/320598202013655556_cwxjdd_x7ndei.jpg" }/>
          <Bulletin items={ techniquePrinting } language={ lang }  banner={ false } title={ labels.printing[lang] } image={ "" }/>
          <Bulletin items={ techniqueWashing } language={ lang }  banner={ false } title={ labels.washing[lang] } image={ "" }/>
        </div>
      )
    } else {
      // $.get('/api/techniques', technique => {
      //   const techniqueDyeing = [];
      //   const techniqueWashing = [];
      //   const techniquePrinting = [];
      //   techniques.map(technique => {
      //     if(technique.type = 'Dyeing') techniqueDyeing.push(technique);
      //     if(technique.type = 'Washing') techniqueWashing.push(technique);
      //     if(technique.type = 'Printing') techniquePrinting.push(technique);
      //   })
      //   this.props.updateAppState({ techniqueDyeing, techniqueWashing, techniquePrinting });
      // })
      return(
        <div className="row">
          <div className="col-xs-12">
            <ol className="breadcrumb">
              <li><Link className="grey underline" to={{pathname: `${langLink}/`}}>{labels.home[lang]}</Link></li>
              <li><Link className="grey underline" to={{pathname: `${langLink}/products`}}>{labels.products[lang]}</Link></li>
              <li className="active">{labels.techniques[lang]}</li>
            </ol>
          </div>
        </div>
      )
    }
  }
  
}