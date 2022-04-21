import React from 'react';

export default class PostsCardRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-6">
                <div className="card mt-2 mb-2">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.post.title.rendered}</h5>
                        <p className="card-text" dangerouslySetInnerHTML={{ __html: this.props.post.content.rendered }} />
                    </div>
                </div>
            </div>
        );
    }
}