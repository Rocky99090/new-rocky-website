import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PostPagination from "../../Utilities/Blog/ArchivePost/PostPagination";
import SideBar from "../../Utilities/Blog/ArchivePost/SideBar";
import Breadcrumb from "../../Utilities/Breadcrumb/Breadcrumb";

import postThumb1 from '../../../assets/img/blog/inner_b1.jpg';
import postThumb2 from '../../../assets/img/blog/inner_b2.jpg';
import postThumb3 from '../../../assets/img/blog/inner_b3.jpg';
import HeroThree from "../../Utilities/Hero/HeroThree/HeroThree";
import { Blogs } from "../../Utilities/Blog/blogs-data";
import SectionTitle from "../../Utilities/SectionTitle/SectionTitle";
const psots = Blogs

const BlogPost = () => {
    useEffect(() => {
        const windowHeight = window.innerHeight;
        const targetPosition = 0;
    
        // Scroll to the calculated position
        window.scrollTo(0, targetPosition);
      }, []);
    return (
        <React.Fragment>
            <HeroThree />

            <section className="inner-blog pb-90">
            <div className="row align-items-center mb-0 wow fadeInUp animated" data-animation="fadeInRight" data-delay=".4s">
                        <div className="col-lg-12 text-center">
                            <SectionTitle
                                titlefirst='OUR'
                                titleSec='BLOGS' />
                        </div>
                    </div>
                    <section id="work" className="pt-0 pb-10" >
                <div className="portfolio ">
                    
                    <div className="grid col4 ">
                        {
                              psots.map((data, index) => {
                                const { imageUrl, admin, title, excerpt,id, handle } = data;
                                return (
                                    <div className="grid-item1 ml-4" key={index}>
                                        <Link to={`/single-post/${handle}`}>
                                            <figure className="gallery-image">
                                                <img src={imageUrl} alt="img" className="img" />
                                                <figcaption>
                                                    <h4>{title}</h4>
                                                </figcaption>
                                            </figure>
                                            </Link>
                                    </div>
                                    
                                )
                            })
                        }
                    </div>
                   
                </div>
           
        </section>
                        {/* Right Sidebar */}
                        
            </section>
           
        </React.Fragment>
    );

}
export default BlogPost;