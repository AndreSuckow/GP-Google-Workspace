import React from 'react'
import './index.css'

// Components
import Section from '../../components/Section';
import Carrousel from '../../components/Sections-Components/Carrousel';
import Container from '../../components/Container';
import DragAndDrop from '../../components/Sections-Components/DragAndDrop';
import FlipCards from '../../components/Sections-Components/FlipCards';
import Logo from '../../components/Sections-Components/Logo';
import CircularCarrousel from '../../components/Sections-Components/CircularCarrousel';
import SaibaMais from '../../components/Sections-Components/SaibaMais';
import ShowDownSlider from '../../components/Sections-Components/ShowDownSlider';
import TabView from '../../components/Sections-Components/TabView';
import ScrollableContent from '../../components/Sections-Components/ScrollableContent';
import TimeLine from '../../components/Sections-Components/TimeLine';
import Tooltip from '../../components/Sections-Components/Tooltip';
import VerticalAccordion from '../../components/Sections-Components/VerticalAccordion';

// Backgrounds
import bg1 from '../../assets/images/bg-1.png'

import bgWall from '../../assets/images/bg-wall.png'
import bgMan from '../../assets/images/bg-man.png'
import bgMaskPurpleDiagonal from '../../assets/images/bg-mask-purple-diagonal.png'
import bgMaskPurple from '../../assets/images/bg-mask-purple.png'
import bgAsian from '../../assets/images/bg-asian.png'

// Images

// retranca
import retrancaImg from '../../assets/images/logo/retranca.png'

// assinatura (final)
import sign from '../../assets/images/logo/logo.png'

const Home = () => {

    return (
        <>
            <img src={retrancaImg} alt="" className="retranca" />
            <Section bg={bg1} lineBG='#B3D682' id="start" customClass='wp-capa' >
                <Container>
                    <Logo />
                </Container>
            </Section>
            <Section bg={bgWall} bgMask={ bgMaskPurpleDiagonal } id="tab" >
                <Container>
                    <TabView />
                </Container>
            </Section>
            <Section bg={bgWall} lineBG='#bd4aff' id="carrousel" >
                <Container>
                    <Carrousel/>
                </Container>
            </Section>
            <Section bg={bgAsian} lineBG='#bd4aff' bgOrientation='center top' id="accordion" customClass='wp-asian' >
                <Container>
                    <VerticalAccordion />
                </Container>
            </Section>
            <Section bg={bgWall} id="circular-carrousel">
                <Container>
                    <CircularCarrousel />
                </Container>
            </Section>
            <Section bg={ bgWall } lineBG="#83d300" id="show-down-slider" >
                <Container>
                    <ShowDownSlider />
                </Container>
            </Section>
            <Section bg={ bgWall } bgMask={ bgMaskPurple } lineBG="#83d300" id="tooltip" >
                <Container>
                    <Tooltip />
                    <TimeLine />
                </Container>
            </Section>
            <Section bg={ bgWall } id="flip-cards" >
                <Container>
                    <FlipCards />
                </Container>
            </Section>
            <Section bg={ bgMan } id="saiba-mais" customClass='wp-sm' >
                <Container>
                    <SaibaMais />
                </Container>
            </Section>
            <Section bg={ bgWall } bgMask={ bgMaskPurple } lineBG="#B3D682" mt="-7.5rem" id="scrollable" >
                <Container>
                    <ScrollableContent />
                    <DragAndDrop />
                </Container>
            </Section>
            <Section bg={bgWall}>
                <Container>
                    <div className="sign-area">
                        <img src={ sign } alt="" />
                    </div>
                </Container>
            </Section>
        </>
    )
}

export default Home