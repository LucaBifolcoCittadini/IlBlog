import { useState } from "react";
import { useParams } from "react-router";
import { getCategories } from "../../functions/categories";
import CategoriesListRow from "../categories-list-row/CategoriesListRow";


export   default function CategoriesList() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const [categories, setCategories] = useState([]);
    const {categoriesId} = useParams();

    if(!hasLoaded) {
        getCategories(categoriesId).then(categories => {
            setCategories(categories);
            setHasLoaded(true);
        });

    }
    return(
        <section>
            <h1>Lista Post Category</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { categories.map(categories => <CategoriesListRow key={categories.id} categories={categories} />) }
                </tbody>
            </table>
        </section>
    )


}