import React from 'react';

export default class PostsCardRow extends React.Component {
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
                                <h5 className="card-title">{this.props.post.title.rendered}</h5>
                                <p className="card-text">{this.props.post.content.rendered}</p>
                                <p className="card-text">{this.props.post.categories}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}