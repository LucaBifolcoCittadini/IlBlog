import React from "react";
import axios from "axios";
import PostsCardRow from "../posts-card-row/PostsCardRow";
import { getPosts } from "../../functions/posts";

export default class PostsCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }
    componentDidMount() {
        getPosts().then(posts => this.setState({ posts }));

    }
    render() {
        console.log(this.state);

        const rows = this.state.posts.map(post => <PostsCardRow key={post.id} post={post} />);

        return (
            <div className="container">
                <div className="row">
                    {rows}
                </div>
            </div>
        );
    }
}


