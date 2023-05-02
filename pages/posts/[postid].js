function Post({post}) {
    return (
        <>
            <h1>Post data</h1>
            <p>{post.id} {post.title}</p>
            <p>{post.body}</p><br />
        </>
    )
}

export default Post;
export async function getStaticProps(context) {
    const { params } = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await response.json()

    return {
        props:{
            post:data
        }
    }
}