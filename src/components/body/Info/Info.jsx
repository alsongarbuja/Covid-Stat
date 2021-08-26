import React from 'react'

import { HandWashSvg, StayHome, SocialDistance } from './Svgs'

import { AirlineSeatFlat, SentimentVeryDissatisfied, VoiceOverOff, ArrowBack } from '@material-ui/icons'
import { InfoMainWrapper, InfoSingleHolder, LinkBack } from './Info.style'

import { Link } from 'react-router-dom'

const Info = () => {
    return (
        <div style={{ padding:"1.5em 2em" }}>
            <Link to="/" component={LinkBack}>
                <ArrowBack />
                Back To DashBoard
            </Link>
            <h1>Symptoms</h1>
            <InfoMainWrapper>
                <InfoSingleHolder>
                    <AirlineSeatFlat style={{ fontSize:"5rem" }} /><br /><br />
                    <h3>Fever</h3><br />
                    <p>Fever is one of the symptoms you have to be aware of but having fever doesn't mean corona ulimately.</p>
                </InfoSingleHolder>
                <InfoSingleHolder>
                    <SentimentVeryDissatisfied style={{ fontSize:"5rem" }} /><br /><br />
                    <h3>Frequent and Sudden Headaches</h3><br />
                    <p>Sudden headaches are also the symptoms of the covid.</p>
                </InfoSingleHolder>
                <InfoSingleHolder>
                    <VoiceOverOff style={{ fontSize:"5rem" }} /><br /><br />
                    <h3>Sore Throat</h3><br />
                    <p>One of the major symptom is sore throat. Continous sore throat might point to covid.</p>
                </InfoSingleHolder>
            </InfoMainWrapper>
            <h1>Preventions</h1>
            <InfoMainWrapper>
                <InfoSingleHolder>
                    <HandWashSvg /><br /><br />
                    <h3>Wash Hands</h3><br />
                    <p>Wash your hands in regular interval as well as after and before leaving house.</p>
                </InfoSingleHolder>
                <InfoSingleHolder>
                    <SocialDistance /><br /><br />
                    <h3>Keep Social Distance</h3><br />
                    <p>Keep social distancing and wear marks most of the time when outside or near someone who is suffering from covid</p>
                </InfoSingleHolder>
                <InfoSingleHolder>
                    <StayHome /><br /><br />
                    <h3>Stay Home</h3><br />
                    <p>Be at home and only go oustide on absoulte need with all the gears you need like masks, sanitizers,etc</p>
                </InfoSingleHolder>
            </InfoMainWrapper>
        </div>
    )
}

export default Info
