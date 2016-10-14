import React from 'react';
import { Link } from 'react-router';

export default class Sitemap extends React.Component {
  
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
              <li className="active">{labels.site_map[lang]}</li>
            </ol>
          </div>
          <div className="col-xs-12 text-body sitemap">
            <ul>
              <li className="col-xs-12 col-sm-3">
                <Link to={{pathname: `${langLink}/who-we-are`}}><h5>{labels.who_we_are[lang]}</h5></Link>
                <ul>
                  <li><Link to={{pathname: `${langLink}/who-we-are/history`}}>{labels.history[lang]}</Link></li>
                  <li><Link to={{pathname: `${langLink}/who-we-are/executive-officers`}}>{labels.executive_officers[lang]}</Link></li>
                  <li><Link to={{pathname: `${langLink}/who-we-are/our-partners`}}>{labels.our_partners[lang]}</Link></li>
                  <li><Link to={{pathname: `${langLink}/who-we-are/culture-core-values`}}>{labels.culture_core_values[lang]}</Link></li>
                </ul>
              </li>
              <li className="col-xs-12 col-sm-3">
                <Link to={{pathname: `${langLink}/products`}}><h5>{labels.products[lang]}</h5></Link>
                <ul>
                  <li>
                    <Link to={{pathname: `${langLink}/products/category`}}>{labels.category[lang]}</Link>
                    <ul>
                      <li><Link to={{pathname: `${langLink}/products/category/men`}}>{labels.men[lang]}</Link></li>
                      <li><Link to={{pathname: `${langLink}/products/category/women`}}>{labels.women[lang]}</Link></li>
                      <li><Link to={{pathname: `${langLink}/products/category/children`}}>{labels.children[lang]}</Link></li>
                    </ul>
                  </li>
                  <li><Link to={{pathname: `${langLink}/products/materials`}}>{labels.materials_used[lang]}</Link></li>
                  <li><Link to={{pathname: `${langLink}/products/techniques`}}>{labels.techniques[lang]}</Link></li>
                </ul>
              </li>
              <li className="col-xs-12 col-sm-3">
                <Link to={{pathname: `${langLink}/people`}}><h5>{labels.people[lang]}</h5></Link>
                <ul>
                  <li><Link to={{pathname: `${langLink}/people/factories`}}>{labels.our_factories[lang]}</Link></li>
                  <li><Link to={{pathname: `${langLink}/people/story`}}>{labels.our_people[lang]}</Link></li>
                  <li><Link to={{pathname: `${langLink}/people/jobs`}}>{labels.work_with_us[lang]}</Link></li>
                </ul>
              </li>
              <li className="col-xs-12 col-sm-3">
                <Link to={{pathname: `${langLink}/csr`}}><h5>{labels.csr[lang]}</h5></Link>
                <ul>
                  <li><Link to={{pathname: `${langLink}/csr/sustainability`}}>{labels.sustainability[lang]}</Link></li>
                  <li><Link to={{pathname: `${langLink}/csr/charitable-programmes`}}>{labels.charitable_programmes[lang]}</Link></li>
                  <li><Link to={{pathname: `${langLink}/csr/practices`}}>{labels.practices[lang]}</Link></li>
                  <li><Link to={{pathname: `${langLink}/csr/responsibility`}}>{labels.responsibility[lang]}</Link></li>
                  <li><Link to={{pathname: `${langLink}/csr/collaboration`}}>{labels.collaboration[lang]}</Link></li>
                </ul>
              </li>
              <div className="hidden-xs"></div>
              <li className="col-xs-12 col-sm-3"><Link to={{pathname: `${langLink}/whats-new`}}><h5>{labels.whats_new[lang]}</h5></Link></li>
              <li className="col-xs-12 col-sm-3"><Link to={{pathname: `${langLink}/terms-of-use`}}><h5>{labels.terms_of_use[lang]}</h5></Link></li>
              <li className="col-xs-12 col-sm-3"><Link to={{pathname: `${langLink}/privacy`}}><h5>{labels.privacy_policy[lang]}</h5></Link></li>
              <li className="col-xs-12 col-sm-3"><Link to={{pathname: `${langLink}/contact-us`}}><h5>{labels.contact_us[lang]}</h5></Link></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
  
}