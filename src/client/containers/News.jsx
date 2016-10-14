import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

export default class News extends React.Component {

  render() {
    const articles = this.props.state.posts;
    const language = this.props.params.language;
    const labels = this.props.state.labels;
    let lang, langLink, articleLink = '';
    lang = language === 'zh-t' ? 'chinese_traditional' : language === 'zh-s' ? 'chinese_simplified' : 'english';
    langLink = (language === 'zh-t' || language === 'zh-s') ? `/${language}` : '';
    if(articles) {
      return(
        <div>
          <div className="row">
            <div className="col-xs-12">
              <ol className="breadcrumb">
                <li><Link className="grey underline" to={{pathname: `${langLink}/`}}>{labels.home[lang]}</Link></li>
                <li className="active">{labels.whats_new[lang]}</li>
              </ol>
            </div>
            <div className="col-xs-12 text-body news">
              {articles.map((article) => {
                const articleDate = new Date(article.publishedDate);
                let date = "";
                const monthNumber = articleDate.getMonth();
                if(language === 'zh-t' || language === 'zh-s') {
                  date = `${articleDate.getYear()+1900}${labels.year[lang]}${labels.months[lang][monthNumber]}${articleDate.getDate()}${labels.date[lang]}`;
                } else {
                  date = `${articleDate.getDate()} ${labels.months[lang][monthNumber]}, ${articleDate.getYear()+1900}`;
                }
                articleLink = (language === 'zh-t' || language === 'zh-s') ? `${langLink}/whats-new/${article.key}` : `/whats-new/${article.key}`;
                const image = article.image || "http://res.cloudinary.com/fglorywebsite2016/image/upload/v1475778631/firstglory_logo.jpg";
    
                $(document).ready(() => {
                  const $articleKey = $(`#${article.key}`);
                  const html = $.parseHTML( article.content.brief[lang] );
                  $articleKey.empty();
                  $articleKey.append( html );
                })
                return(
                  <div className="col-xs-12">
                    <div className="col-xs-4 col-sm-3 news-img-container">
                      <Link to={{pathname: articleLink}} className="thumbnail">
                        <img src={image}/>
                      </Link>
                    </div>
                    <div className="col-xs-12 col-sm-9 news-text-container">
                      <h4><Link to={{pathname: articleLink}}>{article.title[lang]}</Link></h4>
                      <p>{date}</p>
                      <div id={article.key}></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )
    } else {
      // $.get('/api/posts', posts => {
      //   this.props.updateAppState({ posts });
      // })
      return(
        <div className="row">
          <div className="col-xs-12">
            <ol className="breadcrumb">
              <li><Link className="grey underline" to={{pathname: `${langLink}/`}}>{labels.home[lang]}</Link></li>
              <li className="active">{labels.whats_new[lang]}</li>
            </ol>
          </div>
        </div>
      )
    }
  }
  
}