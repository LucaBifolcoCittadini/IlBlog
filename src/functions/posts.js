import { Post } from "../models/Post";

export const getPosts = () => {
    return fetch('http://wordpress.test/wp-json/wp/v2/posts')
        .then(resp => resp.json())
        .then(posts => posts.map(post => new Post(post.id, post.title, post.content, post.categories)))
        .catch(err => console.log(err));
};
