import { Link } from "react-router-dom";

import img1 from '../../../../assets/img/blog/b_details01.jpg'
import img2 from '../../../../assets/img/blog/b_details02.jpg'
import { Blogs} from "../blogs-data";
import SectionTitle from "../../SectionTitle/SectionTitle";

const PostContent = () => {
     const params = new URLSearchParams(window.location.search);
     const id = params.get('id');
     const data = Blogs
     const matchingPost = data.find(post => post.id === parseInt(id));
     const renderedContent = [];

    for (let i = 0; i < matchingPost.totalHeads; i++) {
        const headKey = `head${i}`;
        const bodyKey = `body${i}`;

        renderedContent.push(
        <div key={i}>
            <SectionTitle titlefirst={matchingPost[headKey]} className="text-center" />
            <p>{matchingPost[bodyKey]}</p>
        </div>
        );
    }
    return (
        <div className="details__content pb-30">
            {/* <h1>{matchingPost.heading}</h1> */}
            <SectionTitle titleSec={matchingPost.heading} className="text-center" />
             <div className="details__content-img">
                <img src={matchingPost.imageUrl} alt="" />
            </div>
            
            <h3>{matchingPost.title}</h3>
            <p>{matchingPost.excerpt}</p>

            <div>{renderedContent}</div>
            <p>{matchingPost.conclusion}</p>
           
        </div>
    );
}

export default PostContent;