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
    $.get('/api/catelogs', catelogs => {
      const home = [];
      const who_we_are = []; 
      const product_category = [];
      const products = [];
      const people = [];
      const csr = [];
      catelogs.map(catelog => {
        if(catelog.type === 'home') home.push(catelog)
        if(catelog.type === 'who-we-are') who_we_are.push(catelog)
        if(catelog.type === 'product_category') product_category.push(catelog)
        if(catelog.type === 'products') products.push(catelog)
        if(catelog.type === 'people') people.push(catelog)
        if(catelog.type === 'csr') csr.push(catelog)
      })
      this.setState({ home, who_we_are, product_category, products, people, csr });
      console.log('catelogs');
    })
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
        if(fabric.type === 'Content') fabricContent.push(fabric);
        if(fabric.type === 'Type') fabricType.push(fabric)
      })
      this.setState({ fabricContent, fabricType });
      console.log('fabrics')
    })
    $.get('/api/posts', posts => {
      this.setState({ posts });
      console.log('posts')
    })
    $.get('/api/techniques', techniques => {
      const techniqueDyeing = [];
      const techniqueWashing = [];
      const techniquePrinting = [];
      techniques.map(technique => {
        if(technique.type === 'Dyeing') techniqueDyeing.push(technique);
        if(technique.type === 'Washing') techniqueWashing.push(technique);
        if(technique.type === 'Printing') techniquePrinting.push(technique);
      })
      this.setState({ techniqueDyeing, techniqueWashing, techniquePrinting });
      console.log('techniques')
    })
    $.get('/api/histories', histories => {
      this.setState({ histories });
      console.log('histories')
    })
    $.get('/api/employees', employees => {
      this.setState({ employees });
      console.log('employees')
    })
    $.get('/api/CSRs', CSRs => {
      const CSR_responsibility = [];
      const CSR_charity = [];
      const CSR_practices = [];
      const CSR_sustainability = [];
      const CSR_collaboration = [];
      CSRs.map(CSR => {
        if(CSR.category === 'Sustainability') CSR_sustainability.push(CSR);
        if(CSR.category === 'Charitable Programme') CSR_charity.push(CSR);
        if(CSR.category === 'Responsibility') CSR_responsibility.push(CSR);
        if(CSR.category === 'Practices') CSR_practices.push(CSR);
        if(CSR.category === 'Collaboration') CSR_collaboration.push(CSR);
      })
      this.setState({ CSR_responsibility, CSR_charity, CSR_practices, CSR_sustainability, CSR_collaboration })
      console.log('CSRs')
    })
    $.get('/api/products', products => {
      const product_men = [];
      const product_women = [];
      const product_children = [];
      products.map(product => {
        if(product.gender === 'Men') product_men.push(product);
        if(product.gender === 'Women') product_women.push(product);
        if(product.gender === 'Children') product_children.push(product);
      })
      this.setState({ product_men, product_women, product_children })
      console.log('products')
    })
    this.setState({ labels })
  }

  componentDidMount() {
    $(window).resize(() => {
      $('.squareText').css("height", $("img.home_whats-new").width());
      $('.squareText').css("width", $("img.home_whats-new").width());
      $('.squareText').css("height", $("img.products_techniques").width());
      $('.squareText').css("width", $("img.products_techniques").width());
      $('.squareText').css("height", $("img.product_category_children").width());
      $('.squareText').css("width", $("img.product_category_children").width());
      $('.squareText').css("height", $("img.csr_collaboration").width());
      $('.squareText').css("width", $("img.csr_collaboration").width());
      $('.squareText').css("height", $("img.people_jobs").width());
      $('.squareText').css("width", $("img.people_jobs").width());
      $('.squareText').css("height", $("img.who-we-are_partners").width());
      $('.squareText').css("width", $("img.who-we-are_partners").width());
      $('.squareText').css("height", $("img.Noel").width());
      $('.squareText').css("width", $("img.Noel").width());
      $('div.text').css("height", $("img.factoryImage").height());
      $('.squareText').css("height", $("img.men_pants").width());
      $('.squareText').css("width", $("img.men_pants").width());
      $('.squareText').css("height", $("img.women_jackets").width());
      $('.squareText').css("width", $("img.women_jackets").width());
      $('.squareText').css("height", $("img.children_pants").width());
      $('.squareText').css("width", $("img.children_pants").width());
      if($(window).width() < 768) {
        $('.rectangleText').css("width", $("img.home_whats-new").height());
        $('.rectangleText').css("height", $("img.home_whats-new").height());
        $('.rectangleText').css("height", $("img.products_techniques").height());
        $('.rectangleText').css("width", $("img.products_techniques").height());
        $('.rectangleText').css("width", $("img.product_category_children").height());
        $('.rectangleText').css("height", $("img.product_category_children").height());
        $('.rectangleText').css("width", $("img.csr_collaboration").height());
        $('.rectangleText').css("height", $("img.csr_collaboration").height());
        $('.rectangleText').css("width", $("img.people_jobs").height());
        $('.rectangleText').css("height", $("img.people_jobs").height());
        $('.rectangleText').css("width", $("img.who-we-are_partners").height());
        $('.rectangleText').css("height", $("img.who-we-are_partners").height());
        $('.rectangleText').css("width", $("img.men_pants").height());
        $('.rectangleText').css("height", $("img.men_pants").height());
        $('.rectangleText').css("width", $("img.women_jackets").width());
        $('.rectangleText').css("height", $("img.women_jackets").width());
        $('.rectangleText').css("height", $("img.children_pants").width());
        $('.rectangleText').css("width", $("img.children_pants").width());
      } else {
        $('.rectangleText').css("height", $("img.home_who-we-are").height());
        $('.rectangleText').css("height", $("img.products_category").height());
        $('.rectangleText').css("height", $("img.product_category_men").height());
        $('.rectangleText').css("height", $("img.csr_sustainability").height());
        $('.rectangleText').css("height", $("img.people_factory").height());
        $('.rectangleText').css("height", $("img.who-we-are_history").height());
        $('.rectangleText').css("height", $("img.men_jackets").height());
        $('.rectangleText').css("height", $("img.women_tops").height());
        $('.rectangleText').css("height", $("img.children_dresses").height());
        $('.rectangleText').css("width", $("div.picture-container.rectangle").width());
        $('.rectangleText').css("width", $("div.picture-container.rectangle.large-no-rectangle").width());
        $('.rectangleText').css("width", $("div.picture-container.rectangle.mid-no-rectangle").width());
      }
      if($(window).width() > 1200) {
        $('div.text').css("width", $("img.factoryImage").width());
      } else {
        $('div.text').css("width", $("img.factoryImage").height());
      }
    })
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
    if(path.split('/')[1] === "" || path.split('/')[1] === "contact-us" || path.split('/')[1] === "sitemap" || path.split('/')[1] === "terms-of-use" || path.split('/')[1] === "privacy") {
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
    if(path.split('/')[1] === "csr") {
      currentPage = labels.csr[lang] + " ";
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
            <li><Link to={{ pathname: `${langLink}/csr` }}>{labels.csr[lang]}</Link></li>
            <li><Link to={{ pathname: `${langLink}/whats-new` }}>{labels.whats_new[lang]}</Link></li>
          </ul>
        </div>
        <IndexLink className="navbar-brand large-logo" to={{ pathname: `${langLink}/` }}>
          <img className="nav-logo-img" src="http://res.cloudinary.com/fglorywebsite2016/image/upload/v1475778631/firstglory_logo.jpg" alt="First Glory" />
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
          <Link to={{ pathname: `${langLink}/csr` }}>{labels.csr[lang]}</Link>
          <ul className="dropdown-menu">
            <li><Link to={{ pathname: `${langLink}/csr/sustainability` }}>{labels.sustainability[lang]}</Link></li>
            <li><Link to={{ pathname: `${langLink}/csr/charitable-programmes` }}>{labels.charitable_programmes[lang]}</Link></li>
            <li><Link to={{ pathname: `${langLink}/csr/practices` }}>{labels.practices[lang]}</Link></li>
            <li><Link to={{ pathname: `${langLink}/csr/responsibility` }}>{labels.responsibility[lang]}</Link></li>
            <li><Link to={{ pathname: `${langLink}/csr/collaboration` }}>{labels.collaboration[lang]}</Link></li>
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


