import React from "react";
import { Link } from "react-router-dom";

export default class NavbarRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Home</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <Link to={`/`} */}
                                <a className="nav-link" href="/">{this.props.categories.name}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}