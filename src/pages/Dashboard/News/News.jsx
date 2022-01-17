import React, { useEffect, useState } from 'react'
import { NewsDiv, NewsHolder, NewsHolderLoading } from './News.styled'
import { useFetch } from '../../../custom-hooks/UseFetch'
 
const News = ({ isDarkMode, language }) => {
    const { loading, responses } = useFetch(`https://free-news.p.rapidapi.com/v1/search?q=covid&lang=${language}&page_size=3`, "free-news.p.rapidapi.com")
    const [ news, setNews ] = useState([])

    useEffect(() => {
        setNews(responses.articles)
    }, [responses])

    return (
        <NewsDiv isDarkMode={isDarkMode}>
            <h2>Latest News</h2>
            <hr />
            {
                loading ? (
                    <div style={{ width:"100%", padding:"1em 0", height:"300px", textAlign:"center" }}>
                        {
                            [...Array(3)].map((_, i) => (<div key={i}><NewsHolderLoading /><br /></div>))
                        }
                    </div>
                ) : news?.map((news, i) => (
                    <NewsHolder key={i}>
                        <h4 style={{ 
                            overflow: "hidden", 
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: "1",
                            WebkitBoxOrient: "vertical",
                            }}
                        >
                            <a href={news.link} rel="noreferrer" target="_blank" style={{ color: isDarkMode ? "#e2e2e2" : "#000", }}>{news.title}</a>
                        </h4>
                        <p style={{ 
                            overflow: "hidden", 
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: "2",
                            WebkitBoxOrient: "vertical", 
                            }}>{news.summary || <a href={news.link} rel="noreferrer" target="_blank">Video Source</a>}</p>
                    </NewsHolder>
                ))
            }
        </NewsDiv>
    )
}

export default News
