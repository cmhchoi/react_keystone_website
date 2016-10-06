import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
//import ReactHtmlParser from 'react-html-parser';

export default class Article extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      article: undefined,
      parsedHTML: false,
    };
  }

  componentWillMount() {
    if(!this.state.article) {
      if(this.props.state.posts) {
        this.props.state.posts.map((article) => {
          if(this.props.params.article === article.key) {
            this.setState({ article });
          }
        })
      } else {
        $.get(`/api/posts/${this.props.params.article}`, article => {
          this.setState({ article: article[0] });
        })
      }
    }
  }

  imageDiv(images) {
    if(images.length === 1) {
      return(
        <div className='article-image-wrapper-main'>
          <img src={images[0]}/>
        </div>
      )
    } else if(images.length > 1) {
      return(
        <div>
          <div className='article-image-wrapper-main'>
            <img src={images[0]}/>
          </div>
          {images.slice(1).map((image) => {
            return(
              <div className='col-xs-6 article-image-wrapper'>
                <img src={image}/>
              </div>
            )
          })}
        </div>
      )
    }
  }

  render() {
    const article = this.state.article;
    const language = this.props.params.language;
    const labels = this.props.state.labels;

    let lang, langLink = '';
    lang = language === 'zh-t' ? 'chinese_traditional' : language === 'zh-s' ? 'chinese_simplified' : 'english';
    langLink = (language === 'zh-t' || language === 'zh-s') ? `/${language}` : ''; 
    let firstRender = true;

    $(document).ready(() => {
      const $articleContent = $("#article-content");
      if(article) { 
        const html = $.parseHTML( article.content.extended );
        $articleContent.append( html ) 
      }
    })

    if(article){
      const articleDate = new Date(article.publishedDate);
      let date = "";
      const monthNumber = articleDate.getMonth();
      date = `${articleDate.getDate()} ${labels.months[lang][monthNumber]}, ${articleDate.getYear()+1900}`
      
      return(
        <div>
          <div className="row">
            <div className="col-xs-12">
              <ol className="breadcrumb">
                <li><Link className="grey underline" to={{pathname: "/"}}>Home</Link></li>
                <li className="active">What's New</li>
              </ol>
            </div>
            <div className="col-xs-12 text-body news article">
              <div className="col-xs-12">
                <div className="col-xs-12">
                  <h4>{article.name}</h4>
                  <p>{date}</p>
                  <div id="article-content"></div>
                  {this.imageDiv([article.image])}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return(
        <div className="row">
          <div className="col-xs-12">
            <ol className="breadcrumb">
              <li><Link className="grey underline" to={{pathname: "/"}}>Home</Link></li>
              <li className="active">What's New</li>
            </ol>
          </div>
        </div>
      )
    }
  }
  
}