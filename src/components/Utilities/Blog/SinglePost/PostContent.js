import { Link } from "react-router-dom";

import img1 from '../../../../assets/img/blog/b_details01.jpg'
import img2 from '../../../../assets/img/blog/b_details02.jpg'
import { Blogs} from "../blogs-data";

const PostContent = () => {
     const params = new URLSearchParams(window.location.search);
     const id = params.get('id');
     const data = Blogs
     const matchingPost = data.find(post => post.id === parseInt(id));
    return (
        <div className="details__content pb-30">
            <h1>{matchingPost.heading}</h1>
             <div className="details__content-img">
                <img src={matchingPost.imageUrl} alt="" />
            </div>
            
            <h3>{matchingPost.title}</h3>
            <p>{matchingPost.excerpt}.</p>
            <p>{matchingPost.body}</p><blockquote>
                <h3>{matchingPost.title}</h3>
            </blockquote>
            <p>{matchingPost.excerpt}</p>
           
            <p>{matchingPost.body}</p>
           
           
        </div>
    );
}

export default PostContent;