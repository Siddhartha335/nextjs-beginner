import Link from 'next/link'

const PostList = (props) => {
    return (
        <>
            <h1>Here are the posts!</h1>
            {props.posts.map((post)=> {
                return (
                    <div>
                    <Link href={`posts/${post.id}`}>
                        <h3>{post.id}</h3>
                        <p>{post.body}</p><br />
                    </Link>
                    </div>
                )
            })}

        </>
    )
}

export default PostList;
export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    return {
        props:{
            posts:data.slice(0,3)
        }
    }
} 