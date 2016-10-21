import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './containers/App.jsx';
import Home from './containers/Home.jsx';
import About from './containers/About.jsx';
import Products from './containers/Products.jsx';
import People from './containers/People.jsx';
import Story from './containers/Story.jsx';
import CSR from './containers/CSR.jsx';
import CSRCategory from './containers/CSRCategory.jsx';
import News from './containers/News.jsx';
import History from './containers/History.jsx';
import Culture from './containers/Culture.jsx';
import Gender from './containers/Gender.jsx';
import Partners from './containers/Partners.jsx';
import Category from './containers/Category.jsx';
import Factory from './containers/Factory.jsx';
import Materials from './containers/Materials.jsx';
import Techniques from './containers/Techniques.jsx';
import Terms from './containers/Terms.jsx';
import Contact from './containers/Contact.jsx';
import Privacy from './containers/Privacy.jsx';
import Sitemap from './containers/Sitemap.jsx';
import Executives from './containers/Executives.jsx';
import Article from './containers/Article.jsx';
import Location from './containers/Location.jsx';

require('./styles/app.scss');
require('./styles/frame.scss');
require('./styles/list.scss');
require('./styles/bulletin.scss');
require('./styles/executives.scss');
require('./styles/factory.scss');
require('./styles/news.scss');
require('./styles/article.scss');
require('./styles/story.scss');

const innerRoutes = (
  <Route>
    <IndexRoute component={Home} />
    <Route path="who-we-are" component={About} />
    <Route path="who-we-are/history" component={History} />
    <Route path="who-we-are/culture-core-values" component={Culture} />
    <Route path="who-we-are/executive-officers" component={Executives} />
    <Route path="who-we-are/our-partners" component={Partners} />
    <Route path="products" component={Products} />
    <Route path="products/category" component={Category} />
    <Route path="products/category/:gender" component={Gender} />
    <Route path="products/materials" component={Materials} />
    <Route path="products/techniques" component={Techniques} />
    <Route path="people" component={People} />
    <Route path="people/factories" component={Factory} />
    <Route path="people/factories/:location" component={Location} />
    <Route path="people/story" component={Story} />
    <Route path="people/jobs" component={People} />
    <Route path="csr" component={CSR} />
    <Route path="csr/:category" component={CSRCategory} />
    <Route path="whats-new" component={News} />
    <Route path="whats-new/:article" component={Article} />
    <Route path="terms-of-use" component={Terms} />
    <Route path="contact-us" component={Contact} />
    <Route path="privacy" component={Privacy} />
    <Route path="sitemap" component={Sitemap} />
  </Route>
)

render(
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={App}>
      {innerRoutes}
      <Route path="/:language">
        {innerRoutes}
      </Route>
    </Route>
  </Router>
  , document.getElementById('app')
);
