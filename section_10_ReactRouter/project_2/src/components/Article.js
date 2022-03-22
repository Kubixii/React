import React from 'react'

const Article = ({ title, author, contents }) => {
    return (
        <article>
            <h1>{title}</h1>
            <p>{author}</p>
            <div className="articleContents">
                <p>{contents}</p>
            </div>
        </article>
    )
}

export default Article