import React from "react";
import axios from "axios";
import NavbarRow from "../navbar-row/NavbarRow";

export default class Navbar extends React.Component {
  state = {
    categories: []
  }
  componentDidMount() {
    axios.get(`http://wordpress.test/wp-json/wp/v2/categories`)
      .then(res => this.setState({
        categories: res.data
      }))
      .catch(err => console.log(err));
  }
  render() {
    console.log(this.state);
    const rows = this.state.categories.map(categories => <NavbarRow key={categories.id} categories={categories} />);
    return (
      [rows]
    );
  }
}