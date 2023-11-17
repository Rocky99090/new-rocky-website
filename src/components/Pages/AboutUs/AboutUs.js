import React, { useEffect } from 'react';
import About from '../../Utilities/About/About';
import Breadcrumb from "../../Utilities/Breadcrumb/Breadcrumb";
import Team from '../../Utilities/Team/Team';
import UpComingGameTwo from '../../Utilities/UpComingGameTwo/UpComingGameTwo';
import WorkGallery from '../../Utilities/WorkGallery/WorkGallery';
import ReactPlayer from 'react-player/youtube'
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import thumbnail from "../../../assets/img/logo/logo-01.png"
import HeroThree from '../../Utilities/Hero/HeroThree/HeroThree';
import AboutData from '../../Utilities/About/AboutData';
const AboutUs = () => {
    useEffect(() => {
        const windowHeight = window.innerHeight;
        const targetPosition = 0;
    
        // Scroll to the calculated position
        window.scrollTo(0, targetPosition);
      }, []);
    const videoUrls = [
        "https://www.youtube.com/watch?v=oXBj9528a9M",
        "https://www.youtube.com/watch?v=oXBj9528a9M",
        "https://www.youtube.com/watch?v=oXBj9528a9M",
        "https://www.youtube.com/watch?v=oXBj9528a9M",
        "https://www.youtube.com/watch?v=oXBj9528a9M",
        "https://www.youtube.com/watch?v=oXBj9528a9M"
      ];
    return (

        <React.Fragment>
            
            {/* Breadcrumb component */}
            
            {/* About component */}
            {/* <About/> */}
            <AboutData />
            <WorkGallery/>

        </React.Fragment>

    );
}

export default AboutUs;