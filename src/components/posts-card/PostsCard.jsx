import React from "react";
import axios from "axios";
import PostsCardRow from "../posts-card-row/PostsCardRow";

export default class PostsCard extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get(`http://wordpress.test/wp-json/wp/v2/posts`)
        .then(res => this.setState({
            posts: res.data
        }))
        .catch(err => console.log(err));
    }
    render() {
        console.log(this.state);
        
        const rows = this.state.posts.map(post => <PostsCardRow key={post.id} post={post} />);

        return(
            <div>
                { rows }
            </div>
        );
    }
}


