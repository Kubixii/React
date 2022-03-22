import React from 'react'
import Article from '../Article'
import '../../css/Pages/MainPage.css'

const articles = [
    {
        id: 0,
        title: "Lorem ipsum dolor",
        author: "Jan Kowalski",
        contents: "sit amet consectetur adipisicing elit. Libero cum a sunt quos mollitia, itaque aspernatur adipisci doloremque quae tempora repellat! Fuga quis ratione tempora, corporis maiores molestiae omnis et!"
    },
    {
        id: 1,
        title: "Lorem ipsum dolor",
        author: "Jan Kowalski",
        contents: "sit amet consectetur adipisicing elit. Libero cum a sunt quos mollitia, itaque aspernatur adipisci doloremque quae tempora repellat! Fuga quis ratione tempora, corporis maiores molestiae omnis et!"
    },
    {
        id: 2,
        title: "Lorem ipsum dolor",
        author: "Jan Kowalski",
        contents: "sit amet consectetur adipisicing elit. Libero cum a sunt quos mollitia, itaque aspernatur adipisci doloremque quae tempora repellat! Fuga quis ratione tempora, corporis maiores molestiae omnis et!"
    },
    {
        id: 3,
        title: "Lorem ipsum dolor",
        author: "Jan Kowalski",
        contents: "sit amet consectetur adipisicing elit. Libero cum a sunt quos mollitia, itaque aspernatur adipisci doloremque quae tempora repellat! Fuga quis ratione tempora, corporis maiores molestiae omnis et!"
    }

]
const MainPage = () => {
    const aritclesList = articles.map(article => {
        return (
            <Article
                key={article.id}
                title={article.title}
                author={article.author}
                contents={article.contents}
            />
        )
    })
    return (
        <>
            {aritclesList}
        </>
    );
}

export default MainPage;