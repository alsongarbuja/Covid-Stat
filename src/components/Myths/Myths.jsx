import React, { useState, useEffect, useCallback } from 'react'
import { MythDiv, MythLoader } from './Myths.style'

const Myths = () => {
    const [loading, setLoading] = useState(true)
    const [myths, setMyths] = useState([])

    const getData = useCallback(
        async () => {
            await fetch('https://corona.askbhunte.com/api/v1/myths')
                    .then(response => response.json())
                    .then(res => {
                        setMyths(res)
                        setLoading(false)
                    })
        }, [])

    useEffect(() => {
        getData()
    }, [getData])

    return (
        <div style={{ padding:"1.5em 2em" }}>
            <h2>Myths About Covid</h2>
            <div style={{ display:"flex", flexWrap:"wrap" }}>
                {
                    loading ? [...Array(4)].map((_, i) => <MythLoader key={i} />)
                    : (
                        myths.data?.slice(25, 40).map((myth, i) => (
                            <MythDiv key={i}>
                                <h3>{myth.myth}</h3>
                                <br />
                                <p>
                                    {myth.reality}
                                </p>
                            </MythDiv>
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default Myths
