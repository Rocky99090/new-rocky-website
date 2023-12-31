import React, { Fragment, useEffect } from 'react';
import BlogThree from '../../../Utilities/Blog/BlogThree/BlogThree';
import Team from '../../../Utilities/Team/Team';
import Testimonial from '../../../Utilities/Testimonial/Testimonial';
import UpcomingMatch from '../../../Utilities/UpcomingMatch/UpcomingMatch';

import LiveStreamingVideoTwo from '../../../Utilities/LiveStreamingVideo/LiveStreamingVideoTwo/LiveStreamingVideoTwo';
import Brannds from '../../../Utilities/Brands/Brands'
import TrendingGames from '../../../Utilities/TrendingGames/TrendingGames'
import HeroThree from '../../../Utilities/Hero/HeroThree/HeroThree';

const HomeThree = () => {
    useEffect(() => {
        const windowHeight = window.innerHeight;
        const targetPosition = 0;
    
        // Scroll to the calculated position
        window.scrollTo(0, targetPosition);
      }, []);
    return (
        <Fragment>
            {/* Testimonial Component */}
            <HeroThree/>
            {/* Brand Component */}
            <TrendingGames/>
            {/* Brand Component */}
            <Brannds/>
            {/* Live Streaming video Component */}
            <LiveStreamingVideoTwo/>
            {/* Testimonial Component */}
            <UpcomingMatch/>
            {/* Testimonial Component */}
            <Testimonial/>
            {/* Team Component */}
            <Team/>
            {/* Blog Component */}
            <BlogThree/>
        </Fragment>
    );
}

export default HomeThree;