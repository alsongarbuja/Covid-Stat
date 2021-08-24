import React, { useEffect, useState } from 'react'
import { NewsDiv, NewsHolder, NewsHolderLoading } from './News.styled'
import { useFetchApi } from '../../../../custom-hooks/UseFetch'
 
const News = () => {
    // const { loading, responses } = useFetchApi("https://newsapi.org/v2/everything?q=covid&sortBy=relevancy")
    // const [ news, setNews ] = useState([])

    useEffect(() => {
        setNews(responses.articles)
    }, [responses])

    return (
        <NewsDiv>
            <h2>Latest News</h2>
            <hr />
            {/* {
                loading ? ( */}
                    <div style={{ width:"100%", padding:"1em 0", height:"300px", textAlign:"center" }}>
                        {
                            [...Array(3)].map((_, i) => (<><NewsHolderLoading key={i} /><br /></>))
                        }
                    </div>
                {/* ) : news?.slice(0, 3).map((news, i) => (
                    <NewsHolder key={i}>
                        <h4 style={{ 
                            overflow: "hidden", 
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: "1",
                            WebkitBoxOrient: "vertical",
                            }}
                        >
                            <a href={news.url} rel="noreferrer" target="_blank" style={{ color:"#000" }}>{news.title}</a>
                        </h4>
                        <p style={{ 
                            overflow: "hidden", 
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: "2",
                            WebkitBoxOrient: "vertical", 
                            }}>{news.description}</p>
                    </NewsHolder>
                ))
            } */}
        </NewsDiv>
    )
}

export default News
