import { Categories } from "../models/Categories";

export const getCategories = () => {
    return fetch('http://wordpress.test/wp-json/wp/v2/categories')
        .then(resp => resp.json())
        .then(categories => categories.map(categories => new Categories(categories.id, categories.name)))
        .catch(err => console.log(err));
};
