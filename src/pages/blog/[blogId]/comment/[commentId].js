import { useRouter } from 'next/router'
import React from 'react'

function CommentDetails() {
    const router = useRouter();
    const { blogId, commentId } = router.query;
    return (
        <div>
            <h1>{commentId} comment for blog: {blogId}</h1>
        </div>
    )
}

export default CommentDetails