import Link from "next/link";

function Postlist({ data }) {
    return (
        <div>
            <h1>Post list page</h1>
            {
                data.map((post) => {
                    return (
                        <div key={post.id}>
                            <Link href={`/data/{post.id}`} passHref>
                                <h1>{post.title}</h1>
                            </Link>
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
3
export default Postlist;