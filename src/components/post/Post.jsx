import { useParams } from "react-router-dom";

export default function Post(props) {
    const { postId } = useParams();

    console.log(postId);
    return (
        <div>{postId}</div>
    );
}