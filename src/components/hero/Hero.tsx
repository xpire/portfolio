import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useTransition, animated } from 'react-spring';

import Section from '../section/Section';
import AvatarLogo from '../../avatar.svg';
import GithubLogo from '../../github.svg';
import LinkedinLogo from '../../linkedin.svg';
import GmailLogo from '../../email.svg';

const Box = styled.div`
display: flex;
position: absolute;
`;

const TopLeftBox = styled(Box)`
    flex-direction: column;
    align-items: flex-start;
    padding-left: 5vw;
    padding-top: 5vh;
    pointer-events: none;
`;

const BottomRightBox = styled(Box)`
    align-items: flex-start;
`;


const Line = styled(Grid)`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    position: relative;
`;

const Animation = styled(Box)`
// position: relative;
`;

const AnimationInsides = styled(Box)`
display: flex;
align-items: flex-start;
flex-direction: row;
white-space: nowrap;
word-wrap: break-word;
// position: absolute;
    flex-wrap: wrap; 
`;

const Hero = () => {

    const data = [
        {name: "name is", value: "Justin Or", left: "", right: "", href: "/", key:0, src: AvatarLogo, style: {width: "150px", height: "150px"}},
        {name: "Linkedin is", value: "justinor", left: "linkedin.com/in/", right: "/", href:"https://au.linkedin.com/in/justinor", key:1, src:LinkedinLogo, style: {width: "150px", height: "150px"}},
        {name: "Github is", value: "xpire", left: "github.com/", right:"/", href: "https://github.com/xpire", key:2, src: GithubLogo, style: {width: "150px", height: "150px"}},
        {name: "email is", value: "justin.or.mail", left:"", right:"@gmail.com", href: "mailto:justin.or.mail@gmail.com", key:3, src: GmailLogo,style: {width: "150px", height: "150px"}},
    ];

    const [current, setCurrent] = useState(0);
    const onClick = useCallback( () => setCurrent(current => (current + 1) % data.length), [])

    const transitions = useTransition(current, item => item, {
        from: { opacity: 0, transform: 'translate3d(0, -40px, 0)'},
        enter: { opacity: 1, transform: 'translate3d(0, 0px, 0)'},
        leave: { opacity: 0, transform: 'translate3d(0, 40px, 0)'},    
    })

    const backgroundTransitions = useTransition(current, item => item, {
        from: { opacity: 0, transform: 'translate3d(40px, 0, 0)'},
        enter: { opacity: 1, transform: 'translate3d(0, 0, 0)'},
        leave: { opacity: 0, transform: 'translate3d(-40px, 0, 0)'},    
    })

    return (
        <Section onClick={onClick}>
            <TopLeftBox>
                <Line container spacing={3}>
                    <Grid item>
                        <Typography variant="h1">{`Hi my `}</Typography>
                    </Grid>
                    <Grid item>
                        <Animation>
                            {transitions.map(({item, props, key}) => {
                            return (
                                <AnimationInsides>
                                    <animated.div key={key} style={{...props}}>
                                        <Typography key={key} variant="h1">{data[item].name}</Typography>
                                    </animated.div>
                                </AnimationInsides>
                            )
                            })}
                        </Animation>
                    </Grid>
                </Line>
                <Line>
                    <Animation>
                        {transitions.map(({item, props, key}) => {
                            return (
                                <AnimationInsides>
                                    <animated.div key={key} style={{...props, display: 'flex', flexDirection: 'row'}}>
                                        <Typography variant="h1" color="textSecondary">{data[item].left}</Typography>
                                        <Typography key={key} variant="h1">{data[item].value}</Typography>
                                        <Typography variant="h1" color="textSecondary">{data[item].right}</Typography>
                                    </animated.div>
                            </AnimationInsides>
                            )
                        })}
                    </Animation>
                </Line>
                <Typography variant="h3">
                    Advanced Maths / Computer Science / UNSW
                </Typography>
            </TopLeftBox>
            <Animation>
                {backgroundTransitions.map(({item, props, key}) => {
                    return (
                        <AnimationInsides>
                            <animated.div key={key} style={{...props}}>
                                <img src={data[item].src} style={{...data[item].style}}/>
                            </animated.div>
                        </AnimationInsides>
                    )
                })}
            </Animation>
        </Section>
    );
}

const styledHero = styled(Hero)`
    display: flex;
    flex-direction: column; 
`;

export default styledHero;