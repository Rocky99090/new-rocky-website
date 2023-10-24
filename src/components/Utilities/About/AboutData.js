import { Link } from 'react-router-dom';
import aboutBgImg from '../../../assets/img/bg/about-bg.png';
import experienceImg from '../../../assets/img/features/experience-years.png';
import features1 from '../../../assets/img/features/about-final.jpg';
import features2 from '../../../assets/img/features/about-final1.jpg';
import features3 from '../../../assets/img/features/about-img3.png';
import SectionTitle from '../SectionTitle/SectionTitle';
import reactVideo from '../../../assets/10000000_5064819053625905_5200073652305046777_n.mp4'
import ReactPlayer from 'react-player'
import thumbnail from '../../../assets/img/thumb.jpeg'
import JsonData from './AboutUsData.json'
import HeroThree from '../Hero/HeroThree/HeroThree';
import useMediaQuery from '@mui/material/useMediaQuery';
const AboutData = () => {
    const mobile = useMediaQuery('(max-width:792px)');
    const web = useMediaQuery('(min-width:793px)');
    const id = 1;
    const data = JsonData.AboutUs
    const openWhatsapp = () => {
        window.location.href = "https://wa.link/rockybook?text=I want Id"
    }
    return (
        <section id="about" className="about-area about-p  pt-30  p-relative">
            <div className="container ">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="details__content">
                    {mobile?
                        <blockquote className='pt-3 pb-2 '>
                            
                            <h1 style={{ fontSize:"22px" }} className='text-center'>{data.heading}</h1>
                      
                        </blockquote>
                        :
                        <blockquote  >
                        <h1 style={{ fontSize:"32px" }} className='text-center'>{data.heading}</h1>
                        </blockquote>
                    }
                        <div className="details__content-img">
                        <HeroThree />
                        </div>
                        {mobile?
                            <blockquote className='pt-3 pb-2 '>
                                <h3 style={{ fontSize:"22px" }}>{data.title}</h3>
                            </blockquote>
                            :
                            <blockquote  >
                                <h3>{data.title}</h3>
                            </blockquote>
                        }
                        <h5>{data.excerptAbout}.</h5>
                        <p>{data.body1About}</p>
                        <p>{data.body2About}</p>
                        <p>{data.body3About}</p>
                        <p>{data.body4About}</p>
                        {mobile?
                            <blockquote className='pt-3 pb-2 '>
                                <h3 style={{ fontSize:"22px" }}>{data.title2}</h3>
                            </blockquote>
                            :
                            <blockquote  >
                                <h3 >{data.title2}</h3>
                            </blockquote>
                        }
                        <h5>{data.excerptMission}</h5>
                        <p>{data.body1Mission}</p>
                        <p>{data.body2Mission}</p>
                        <p>{data.body3Mission}</p>

                        {mobile?
                            <blockquote className='pt-3 pb-2 '>
                                <h3 style={{ fontSize:"22px" }}>{data.titleJoin}</h3>
                            </blockquote>
                            :
                            <blockquote  >
                                <h3>{data.titleJoin}</h3>
                            </blockquote>
                        }
                        <ul><h5>{data.excerptJoin}</h5>
                            <li><p>{data.body1Join}</p></li>
                            <li><p>{data.body2Join}</p></li>
                            <li><p>{data.body3Join}</p></li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutData;