import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import img1 from '../../../assets/img/blog/b_details01.jpg'
import img2 from '../../../assets/img/blog/b_details02.jpg'
import img3 from '../../../assets/img/blog/b_details03.jpg'
import img4 from '../../../assets/img/blog/b_details04.jpg'

const BlogCard = ({ blogData }) => {
    return (
        <Fragment>
            {
                blogData.map(data => {
                    const { id, imageUrl, title, admin, date, excerpt } = data;
                    return (
                        <div className="col-lg-6 col-md-6" key={id}>
                            <div className="single-post2 mb-30  p-relative wow fadeInDown animated" data-animation="fadeInRight" data-delay=".4s">
                                <div className="blog-thumb2">
                                    <Link to = {`/single-post?id=${id}`}>
                                        <img src={imageUrl} alt="img" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </Fragment>
    )
}
export default BlogCard;