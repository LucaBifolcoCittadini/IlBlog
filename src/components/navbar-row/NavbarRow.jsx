import React from "react";
import { Link } from "react-router-dom";

export default class NavbarRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="nav-item">
                {/* <Link className="nav-link" to="/posts-card">Home</Link> */}
                <a className="nav-link" href="/">{this.props.categories.name}</a>
            </li>
        );
    }
}