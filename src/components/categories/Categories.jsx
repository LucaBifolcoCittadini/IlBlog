import React from "react";
import { getCategories } from "../../functions/categories";
import CategoriesRow from "../categories-row/CategoriesRow";

export default class Categories extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: []
        };
    }
    componentDidMount() {
        getCategories().then(categories => this.setState({ categories }));

    }
    render() {
        console.log(this.state);

        const rows = this.state.categories.map(categories => <CategoriesRow key={categories.id} categories={categories} />);

        return (
            <div>
                {rows}
            </div>
        );
    }
}