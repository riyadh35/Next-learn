function Post({ data }) {
    console.log("post", data)
    return (
        <div>
            <h1>Single Post</h1>
            <p>{data.title}</p>
            <h2>{data.body}</h2>
        </div>
    );
}

export async function getStaticProps(ctx) {

    const { params } = ctx;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const data = await res.json();

    return {
        props: {
            data: data,
        }
    }
}
export async function getStaticPaths() {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    const paths = data.map((post) => {
        return {
            params: { id: `${post.id}` }
        }
    })
    return {
        paths,
        fallback: false, // can also be true or 'blocking'
    }
}
export default Post;