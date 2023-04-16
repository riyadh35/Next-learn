function Postlist({ data }) {
    return (
        <div>
            <h1>Post list page</h1>
            {
                data.map((post) => {
                    return (
                        <div key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export async function getStaticProps(ctx) {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();

    return {
        props: {
            data: data,
        }
    }
}

export default Postlist;