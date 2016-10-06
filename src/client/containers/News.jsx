import React from 'react';
import { Link } from 'react-router';

export default class News extends React.Component {

  render() {
    const articles = this.props.state.posts;
    const language = this.props.params.language;
    const labels = this.props.state.labels;
    let lang, langLink = '';
    lang = language === 'zh-t' ? 'chinese_traditional' : language === 'zh-s' ? 'chinese_simplified' : 'english';
    langLink = (language === 'zh-t' || language === 'zh-s') ? `/${language}` : '';
    if(articles) {
      return(
        <div>
          <div className="row">
            <div className="col-xs-12">
              <ol className="breadcrumb">
                <li><Link className="grey underline" to={{pathname: "/"}}>Home</Link></li>
                <li className="active">What's New</li>
              </ol>
            </div>
            <div className="col-xs-12 text-body news">
              {articles.map((article) => {
                const articleDate = new Date(article.publishedDate);
                let date = "";
                const monthNumber = articleDate.getMonth();
                date = `${articleDate.getDate()} ${labels.months[lang][monthNumber]}, ${articleDate.getYear()+1900}`
                
                const articleLink = `/whats-new/${article.key}`;
                const image = article.image || "/assets/images/logo2.jpg";
    
                $(document).ready(() => {
                  console.log($(`#${article.key}`))
                  const $articleKey = $(`#${article.key}`);
                  const html = $.parseHTML( article.content.brief );
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
                      <h4><Link to={{pathname: articleLink}}>{article.name}</Link></h4>
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
              <li><Link className="grey underline" to={{pathname: "/"}}>Home</Link></li>
              <li className="active">What's New</li>
            </ol>
          </div>
        </div>
      )
    }
  }
  
}