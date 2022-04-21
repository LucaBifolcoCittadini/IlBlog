import React from 'react';

export default class CategoriesRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card mt-2 mb-2">
                            <div className="card-body">
                                <h5 className="card-title">{this.props.categories.name}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}