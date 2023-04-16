import Link from "next/link";

function Blog({ blogId = 443 }) {
    return (
        <div>

            <h1> This is Blog list page</h1>
            <Link href="/blog/1">
                <p>Blog 1</p>
            </Link>
            <Link href="/blog/2">
                <p>Blog 2</p>
            </Link>
            <Link href="/blog/3" replace>
                <p>Blog 3</p>
            </Link>
            {/* Practise Dynamic Router */}

            <Link href={`/blog/${blogId}`}>
                <h1>Blog4</h1>
            </Link>

        </div>
    )
}

export default Blog;