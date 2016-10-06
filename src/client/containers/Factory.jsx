import React from 'react';
import { Link } from 'react-router';
import $ from "jquery";

export default class Factories extends React.Component {

  render() {
    const factories = this.props.state.factories;
    const language = this.props.params.language;
    const labels = this.props.state.labels;
    let lang, langLink = '';
    lang = language === 'zh-t' ? 'chinese_traditional' : language === 'zh-s' ? 'chinese_simplified' : 'english';
    langLink = (language === 'zh-t' || language === 'zh-s') ? `/${language}` : '';
    if(factories){
      return(
        <div>
          <div className="row">
            <div className="col-xs-12">
              <ol className="breadcrumb">
                <li><Link className="grey underline" to={{pathname: `${langLink}/`}}>{labels.home[lang]}</Link></li>
                <li><Link className="grey underline" to={{pathname: `${langLink}/people`}}>{labels.people[lang]}</Link></li>
                <li className="active">{labels.our_factories[lang]}</li>
              </ol>
            </div>
          </div>
          <div className="frame row">
            <ul>
              {factories.map(factory => {
                if(!factory.description[lang]) { factory.description[lang] = factory.description.english };
                if(!factory.name[lang]) { factory.name[lang] = factory.name.english };
                if(!factory.products[lang]) { factory.products[lang] = factory.products.english };
                if(!factory.services[lang]) { factory.services[lang] = factory.services.english };
                if(!factory.address[lang]) { factory.address[lang] = factory.address.english };
                const link = '/people/factories/' + factory.description.english;
                return( 
                  <li className="picture-link factory col-xs-12 col-sm-6">
                    <Link to={{ pathname: link }}>
                      <div className="text">
                        <p className="picture-des">{factory.description[lang]}</p>
                      </div>
                      <div className="picture-container rectangle mid-no-rectangle">
                        <img className="picture" src={factory.thumbnail}/>
                      </div>
                    </Link>
                    <h4>{factory.name[lang]}</h4>
                    <h5 className="factory-title">{labels.year_founded[lang]}</h5>
                    <p className="factory-detail">{factory.year}</p>
                    <h5 className="factory-title">{labels.products[lang]}</h5>
                    <p className="factory-detail">{factory.products[lang]}<br/><Link to={{pathname: `${langLink}/products/category`}}>{labels.see_category[lang]}</Link></p>
                    <h5 className="factory-title">{labels.services[lang]}</h5>
                    <p className="factory-detail">{factory.services[lang]}</p>
                    <h5 className="factory-title">{labels.address[lang]}</h5>
                    <p className="factory-detail">{factory.address[lang]}<br/><Link to={{pathname: `${langLink}/contact-us`}}>{labels.contact_us[lang]}</Link></p>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      )
    } else {
      $.get('/api/factories', factories => {
        this.props.updateAppState({ factories });
      })
      return(
        <div>
          <div className="row">
            <div className="col-xs-12">
              <ol className="breadcrumb">
                <li><Link className="grey underline" to={{pathname: `${langLink}/`}}>{labels.home[lang]}</Link></li>
                <li><Link className="grey underline" to={{pathname: `${langLink}/people`}}>{labels.people[lang]}</Link></li>
                <li className="active">{labels.our_factories[lang]}</li>
              </ol>
            </div>
          </div>
        </div>
      )
    }
  }
}
