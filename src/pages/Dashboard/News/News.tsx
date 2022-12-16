import React, { useEffect, useState } from 'react'
import { NewsDiv, NewsHolder, NewsHolderLoading } from './News.styled'
import { dynamicObject, useFetch } from '../../../custom-hooks/UseFetch'
 
const News = ({ isDarkMode }: { isDarkMode: boolean }) => {
    const { loading, responses } = useFetch(`https://covid-news5.p.rapidapi.com/news?limit=3`, "covid-news5.p.rapidapi.com")
    const [ news, setNews ] = useState([])

    useEffect(() => {
        if(responses.status&&responses.status==='success')
            setNews(responses?.data?.articles)
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
                ) : news?.map((news: dynamicObject, i) => (
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
                        }}>
                            <a href={news.url} rel="noreferrer" target="_blank">{news.source}</a>
                        </p>
                    </NewsHolder>
                ))
            }
        </NewsDiv>
    )
}

export default News
