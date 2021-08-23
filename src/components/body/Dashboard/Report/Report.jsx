import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import currentDate from '../../../../helper/Date';

const Chart = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        let date = new Date()
        const formatedDate1 = currentDate(date)
        date.setDate(date.getDate() - 7)
        const formatedDate2 = currentDate(date)
        date.setDate(date.getDate() - 7)
        const formatedDate3 = currentDate(date)
        date.setDate(date.getDate() - 7)
        const formatedDate4 = currentDate(date)

        Promise.all([
            fetch(`https://covid-193.p.rapidapi.com/history?country=Nepal&day=${formatedDate1}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": process.env.REACT_APP_RAPID_API_COVID_KEY,
                    "x-rapidapi-host": "covid-193.p.rapidapi.com"
                }
            }),
            fetch(`https://covid-193.p.rapidapi.com/history?country=Nepal&day=${formatedDate2}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": process.env.REACT_APP_RAPID_API_COVID_KEY,
                    "x-rapidapi-host": "covid-193.p.rapidapi.com"
                }
            }),
            fetch(`https://covid-193.p.rapidapi.com/history?country=Nepal&day=${formatedDate3}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": process.env.REACT_APP_RAPID_API_COVID_KEY,
                    "x-rapidapi-host": "covid-193.p.rapidapi.com"
                }
            }),
            fetch(`https://covid-193.p.rapidapi.com/history?country=Nepal&day=${formatedDate4}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": process.env.REACT_APP_RAPID_API_COVID_KEY,
                    "x-rapidapi-host": "covid-193.p.rapidapi.com"
                }
            }),
        ]).then(responses => {
            return ({
                dataSet1: responses[0].json().then(res => res.response),
                dataSet2: responses[1].json().then(res => res.response),
                dataSet3: responses[2].json().then(res => res.response),
                dataSet4: responses[3].json().then(res => res.response),
            })
        }).then(datas => {
            datas.dataSet4.then(data => setData(prevData => [...prevData, {
                name: data[0].day.slice(5),
                newCases: data[0].cases.new,
                newDeaths: data[0].deaths.new,
            }]))
            datas.dataSet3.then(data => setData(prevData => [...prevData, {
                name: data[0].day.slice(5),
                newCases: data[0].cases.new,
                newDeaths: data[0].deaths.new,
            }]))
            datas.dataSet2.then(data => setData(prevData => [...prevData, {
                name: data[0].day.slice(5),
                newCases: data[0].cases.new,
                newDeaths: data[0].deaths.new,
            }]))
            datas.dataSet1.then(data => setData(prevData => [...prevData, {
                name: data[0].day.slice(5),
                newCases: data[0].cases.new,
                newDeaths: data[0].deaths.new,
            }]))
        })
    }, [])

    return (
      <ResponsiveContainer width="95%" height="95%">
        <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 20,
                right: 10,
                left: 10,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="2 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="newCases" stroke="#8884d8" activeDot={{ r: 5 }} />
            <Line type="monotone" dataKey="newDeaths" stroke="rgba(251, 37, 40, 0.847)" />
        </LineChart>
      </ResponsiveContainer>
    );
}

export default Chart;
