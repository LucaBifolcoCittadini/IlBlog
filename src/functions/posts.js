import { Post } from "../models/Post";
import axios from "axios";

export const getPosts = (categories = []) => {
    return fetch('http://wordpress.test/wp-json/wp/v2/posts')
    .then(posts => posts.map(post => postObjModel(post)))
    .catch(err => console.log(err));
}

export const postObjModel = post => new Post(post.id, post.title, post.content, post.categories);