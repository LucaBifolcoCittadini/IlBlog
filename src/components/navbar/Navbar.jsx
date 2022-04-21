import React from "react";
import NavbarRow from "../navbar-row/NavbarRow";
import { getCategories } from "../../functions/categories";

export default class Navbar extends React.Component {
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
    const rows = this.state.categories.map(categories => <NavbarRow key={categories.id} categories={categories} />);
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Il Blog.com</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {rows}
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-success" type="submit">Registrati</button>
              <button className="btn btn-outline-success ms-3" type="submit">Accedi</button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}