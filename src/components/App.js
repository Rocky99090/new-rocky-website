import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Utilities/Header/Header';
import Home from './Pages/Home/HomeMain/HomeMain';
import HomeTwo from './Pages/Home/HomeTwo/HomeTwo';
import HomeThree from './Pages/Home/HomeThree/HomeThree';
import Footer from './Utilities/Footer/Footer';
import AboutUs from './Pages/AboutUs/AboutUs';
import Gallery from './Pages/Gallery/Gallery';
import Teams from './Pages/Team/Team';
import Faqs from './Pages/Faq/Faq';
import Games from './Pages/Games/Games';
import Matchese from './Pages/Matchese/Matchese';
import MatcheseDetails from './Pages/MatcheseDetails/MatcheseDetails';
import LiveStreaming from './Pages/LiveStreaming/LiveStreaming';
import Error404 from './Pages/404';
import BlogPost from './Pages/Blog/Blog';
import ContactUs from './Pages/ContactUs/ContactUs';
import SinglePost from './Pages/SinglePost/SinglePost';
import { ParallaxProvider } from 'react-scroll-parallax';


const App = () => {
  return (
    <ParallaxProvider>
    <Router>
      <div className="App">

        {/* Header */}
        <Header />

        <Switch>

          <Route exact path="/new-rocky-website/" component={Home} />
          <Route exact path="/" component={Home} />
          <Route exact path="/home-two" component={HomeTwo} />
          <Route exact path="/home-three" component={HomeThree} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/team" component={Teams} />
          <Route exact path="/faq" component={Faqs} />
          <Route exact path="/game" component={Games} />
          <Route exact path="/matchese" component={Matchese} />
          <Route exact path="/matchese-details" component={MatcheseDetails} />
          <Route exact path="/live-streaming" component={LiveStreaming} />
          <Route exact path="/404" component={Error404} />
          <Route exact path="/blog" component={BlogPost} />
          <Route exact path="/single-post" component={SinglePost} />
          <Route exact path="/contact" component={ContactUs} />
          /new-rocky-website/
        </Switch>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
    </ParallaxProvider>
  );
}

export default App;
