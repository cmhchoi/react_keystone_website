import React from 'react';
import { IndexLink, Link } from 'react-router';
import $ from "jquery";
import labels from '../assets/labels.js';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = null;
  }

  componentWillMount() {
    $(window).scroll(() => {
      if ($(document).scrollTop() > 20) {
        $('.navbar-brand').removeClass('large-logo');
        $('#navbar2').removeClass('large-nav');
        $('#navdropdown').removeClass('large-nav-dropdown');
      } else {
        $('.navbar-brand').addClass('large-logo');
        $('#navbar2').addClass('large-nav');
        $('#navdropdown').addClass('large-nav-dropdown');
      }
    });
    $.get('/api/factories', factories => {
      this.setState({ factories });
      console.log('factories');
    })
    $.get('/api/executives', executives => {
      this.setState({ executives });
      console.log('exec')
    })
    $.get('/api/cultures', cultures => {
      this.setState({ cultures });
      console.log('cultures')
    })
    $.get('/api/partners', partners => {
      this.setState({ partners });
      console.log('partners')
    })
    $.get('/api/fabrics', fabrics => {
      const fabricContent = [];
      const fabricType = [];
      fabrics.map(fabric => {
        fabric.fabric_ === 'content' ? fabricContent.push(fabric) : fabricType.push(fabric);
      })
      this.setState({ fabricContent, fabricType });
      console.log('fabrics')
    })
    this.setState({ labels })
  }

  updateAppState(object) {
    this.setState(object);
  }

  navLogoAndDropdown(language, path) {
    if(language === 'zh-t' || language === 'zh-s') {
      path = path.slice(5);
    }
    let lang, currentPage, langLink = '';
    lang = language === 'zh-t' ? 'chinese_traditional' : language === 'zh-s' ? 'chinese_simplified' : 'english';
    if(path.split('/')[1] === "") {
      currentPage = labels.home[lang] + " ";
    }
    if(path.split('/')[1] === "who-we-are") {
      currentPage = labels.who_we_are[lang] + " ";
    }
    if(path.split('/')[1] === "products") {
      currentPage = labels.products[lang] + " ";
    }
    if(path.split('/')[1] === "people") {
      currentPage = labels.people[lang] + " ";
    }
    if(path.split('/')[1] === "global-community-initiatives") {
      currentPage = labels.global_community_initiatives[lang] + " ";
    }
    if(path.split('/')[1] === "whats-new") {
      currentPage = labels.whats_new[lang] + " ";
    }
    langLink = (language === 'zh-t' || language === 'zh-s') ? `/${language}` : '';
    
    return(
      <div className="navbar-header">
        <div className="dropdown hidden-sm hidden-md hidden-lg large-nav-dropdown" id='navdropdown'>
          <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            {currentPage}
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
            <li><Link to={{ pathname: `${langLink}/who-we-are` }}>{labels.who_we_are[lang]}</Link></li>
            <li><Link to={{ pathname: `${langLink}/products` }}>{labels.products[lang]}</Link></li>
            <li><Link to={{ pathname: `${langLink}/people` }}>{labels.people[lang]}</Link></li>
            <li><Link to={{ pathname: `${langLink}/global-community-initiatives` }}>{labels.global_community_initiatives[lang]}</Link></li>
            <li><Link to={{ pathname: `${langLink}/whats-new` }}>{labels.whats_new[lang]}</Link></li>
          </ul>
        </div>
        <IndexLink className="navbar-brand large-logo" to={{ pathname: `${langLink}/` }}>
          <img className="nav-logo-img" src="/assets/images/logo2.jpg" alt="First Glory" />
        </IndexLink>
      </div>
    )
  }

  navMenuList(language) {
    let lang, currentPage, langLink = '';
    lang = language === 'zh-t' ? 'chinese_traditional' : language === 'zh-s' ? 'chinese_simplified' : 'english';
    langLink = (language === 'zh-t' || language === 'zh-s') ? `/${language}` : '';
    
    return(
      <ul className="nav navbar-nav navbar-right">
        <li className="dropdown">
          <Link to={{ pathname: `${langLink}/who-we-are` }}>{labels.who_we_are[lang]}</Link>
          <ul className="dropdown-menu">
            <li><Link to={{ pathname: `${langLink}/who-we-are/history` }}>{labels.history[lang]}</Link></li>
            <li><Link to={{ pathname: `${langLink}/who-we-are/executive-officers` }}>{labels.executive_officers[lang]}</Link></li>
            <li><Link to={{ pathname: `${langLink}/who-we-are/our-partners` }}>{labels.our_partners[lang]}</Link></li>
            <li><Link to={{ pathname: `${langLink}/who-we-are/culture-core-values` }}>{labels.culture_core_values[lang]}</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <Link to={{ pathname: `${langLink}/products` }}>{labels.products[lang]}</Link>
          <ul className="dropdown-menu">
            <li><Link to={{ pathname: `${langLink}/products/category` }}>{labels.category[lang]}</Link></li>
            <li><Link to={{ pathname: `${langLink}/products/materials` }}>{labels.materials_used[lang]}</Link></li>
            <li><Link to={{ pathname: `${langLink}/products/techniques` }}>{labels.techniques[lang]}</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <Link to={{ pathname: `${langLink}/people` }}>{labels.people[lang]}</Link>
          <ul className="dropdown-menu">
            <li><Link to={{ pathname: `${langLink}/people/factories` }}>{labels.our_factories[lang]}</Link></li>
            <li><Link to={{ pathname: `${langLink}/people/story` }}>{labels.our_people[lang]}</Link></li>
            <li><Link to={{ pathname: `${langLink}/people/jobs` }}>{labels.work_with_us[lang]}</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <Link to={{ pathname: `${langLink}/global-community-initiatives` }}>{labels.global_community_initiatives[lang]}</Link>
          <ul className="dropdown-menu">
            <li><Link to={{ pathname: `${langLink}/global-community-initiatives/sustainability` }}>{labels.sustainability[lang]}</Link></li>
            <li><Link to={{ pathname: `${langLink}/global-community-initiatives/charitable-programmes` }}>{labels.charitable_programmes[lang]}</Link></li>
            <li><Link to={{ pathname: `${langLink}/global-community-initiatives/practices` }}>{labels.practices[lang]}</Link></li>
            <li><Link to={{ pathname: `${langLink}/global-community-initiatives/responsibility` }}>{labels.responsibility[lang]}</Link></li>
            <li><Link to={{ pathname: `${langLink}/global-community-initiatives/collaboration` }}>{labels.collaboration[lang]}</Link></li>
          </ul>
        </li>
        <li><Link to={{ pathname: `${langLink}/whats-new` }}>{labels.whats_new[lang]}</Link></li>
      </ul>
    )
  }

  footer(language, path) {
    let lang, englishLink, chineseTraditionalLink, chineseSimplifiedLink, contactLink = '';
    lang = language === 'zh-t' ? 'chinese_traditional' : language === 'zh-s' ? 'chinese_simplified' : 'english';
    englishLink = language === 'zh-t' || language === 'zh-s' ? path.slice(5) : path;
    chineseTraditionalLink = language === 'zh-t' || language === 'zh-s' ? '/zh-t' + path.slice(5) : '/zh-t' + path;
    chineseSimplifiedLink = language === 'zh-t' || language === 'zh-s' ? '/zh-s' + path.slice(5) : '/zh-s' + path;

    const footList = (language) => {
      if(language === 'zh-t') {
        return(
          <ul className="nav navbar-nav navbar-right">
            <li className="foot-list"><Link to={{pathname: chineseSimplifiedLink}}>简</Link></li>
            <li className="foot-list"><Link to={{pathname: englishLink}}>English</Link></li>
            <li className="foot-list"><Link to={{pathname: `/${language}/contact-us`}}>{labels.contact_us[lang]}</Link></li>
            <li className="foot-list"><Link to={{pathname: `/${language}/sitemap`}}>{labels.site_map[lang]}</Link></li>
            <li className="foot-list"><Link to={{pathname: `/${language}/terms-of-use`}}>{labels.terms_of_use[lang]}</Link></li>
            <li className="foot-list"><Link to={{pathname: `/${language}/privacy`}}>{labels.privacy_policy[lang]}</Link></li>
            <li className="foot-list"><a href="https://www.facebook.com/firstgloryltd/">Facebook</a></li>
          </ul>
        )
      } else if (language === 'zh-s') {
        return(
          <ul className="nav navbar-nav navbar-right">
            <li className="foot-list"><Link to={{pathname: chineseTraditionalLink}}>繁</Link></li>
            <li className="foot-list"><Link to={{pathname: englishLink}}>English</Link></li>
            <li className="foot-list"><Link to={{pathname: `/${language}/contact-us`}}>{labels.contact_us[lang]}</Link></li>
            <li className="foot-list"><Link to={{pathname: `/${language}/sitemap`}}>{labels.site_map[lang]}</Link></li>
            <li className="foot-list"><Link to={{pathname: `/${language}/terms-of-use`}}>{labels.terms_of_use[lang]}</Link></li>
            <li className="foot-list"><Link to={{pathname: `/${language}/privacy`}}>{labels.privacy_policy[lang]}</Link></li>
            <li className="foot-list"><a href="https://www.facebook.com/firstgloryltd/">Facebook</a></li>
          </ul>
        )
      } else {
        return(
          <ul className="nav navbar-nav navbar-right">
            <li className="foot-list"><Link to={{pathname: chineseTraditionalLink}}>繁</Link></li>
            <li className="foot-list"><Link to={{pathname: chineseSimplifiedLink}}>简</Link></li>
            <li className="foot-list"><Link to={{pathname: "/contact-us"}}>{labels.contact_us[lang]}</Link></li>
            <li className="foot-list"><Link to={{pathname: "/sitemap"}}>{labels.site_map[lang]}</Link></li>
            <li className="foot-list"><Link to={{pathname: "/terms-of-use"}}>{labels.terms_of_use[lang]}</Link></li>
            <li className="foot-list"><Link to={{pathname: "/privacy"}}>{labels.privacy_policy[lang]}</Link></li>
            <li className="foot-list"><a href="https://www.facebook.com/firstgloryltd/">Facebook</a></li>
          </ul>
        )
      }
    }
    
    return(
      <footer className="footer">
        <nav className="navbar navbar-default">
          <div className="" id="footer-body">
            {footList(language)}
          </div>
        </nav>
        <p>{labels.rights_reserved[lang]}</p>
      </footer>
    )
  }

  render() {
    console.log('appy', this.state)
    const language = this.props.params.language || '';
    const path = this.props.location.pathname;
    return (
      <div>
        <div className="container">
          <div className="content col-lg-offset-1 col-lg-10 col-xs-12 col-sm-12">
            <nav className="top-nav navbar navbar-default fixed">
              {this.navLogoAndDropdown(language, path)}
              <div id="navbar2" className="navbar-collapse collapse large-nav">
                {this.navMenuList(language)}
              </div>
            </nav>
            <div className="bumper"></div>
            <div className="content">
              {React.cloneElement(this.props.children, { state: this.state, updateAppState: this.updateAppState.bind(this), language})}
            </div>
            {this.footer(language, path)}
          </div>
        </div>
      </div>
    )
  }
}


