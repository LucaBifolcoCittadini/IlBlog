import React from 'react';
import { Link } from 'react-router-dom';

export default function PostsListRow(props) {
    return (
        <tr>
            <td>{ props.post.title }</td>
            <td></td>
            <td className="text-end">
                <Link className='btn btn-primary' to={`/post/${props.post.title}/comments`}>Category</Link>
            </td>
        </tr>
    );

}