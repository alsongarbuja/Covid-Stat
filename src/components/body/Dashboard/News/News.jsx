import React, { useEffect, useState } from 'react'
import { NewsDiv, NewsHolder, NewsHolderLoading } from './News.styled'
import { useFetchApi } from '../../../../custom-hooks/UseFetch'
 
const News = ({ isDarkMode }) => {
    const { loading, responses } = useFetchApi(`http://api.mediastack.com/v1/news?access_key=${process.env.REACT_APP_MEDIASTACK_NEWS_API_KEY}&languages=en&keywords=covid&limit=3`)
    const [ news, setNews ] = useState([])

    useEffect(() => {
        setNews(responses.data)
    }, [responses])

    return (
        <NewsDiv isDarkMode={isDarkMode}>
            <h2>Latest News</h2>
            <hr />
            {
                loading ? (
                    <div style={{ width:"100%", padding:"1em 0", height:"300px", textAlign:"center" }}>
                        {
                            [...Array(3)].map((_, i) => (<><NewsHolderLoading key={i} /><br /></>))
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
                            <a href={news.url} rel="noreferrer" target="_blank" style={{ color: isDarkMode ? "#e2e2e2" : "#000", }}>{news.title}</a>
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
            }
        </NewsDiv>
    )
}

export default News
