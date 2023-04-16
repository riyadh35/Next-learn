import Link from 'next/link'

function Error() {
    return (
        <div>
            <h1>This is error page . Go to home page</h1>
            <Link href="/">
                <h1>Home</h1>
            </Link>
        </div>
    )
}

export default Error;