import React, { useState } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { motion } from 'framer-motion';

import Section from '../section/Section';
import Button from '../common/Button';

const Box = styled.div`
display: flex;
position: absolute;
`;

const BottomLeftBox = styled(Box)`
    flex-direction: column;
    align-items: flex-start;
    bottom: 15vh;
    padding; 5vw; 
`;

const ButtonArray = styled(Box)`
    flex-direction: row;
    align-items: flex-start;
    bottom: 10vh;
    margin-left: 5vw;
`;

const Hero = () => {
    const [account, setAccount] = useState("name");
    const [name, setName] = useState("Justin Or");

    const handleClickFor = (id:string) => {
        return (e:React.MouseEvent) => {
            console.log(id);
            setAccount(id);
            if (id === "Github") {
                setName("xpire");
            } else if (id === "Linkedin") {
                setName("justinor")
            } else if (id === "Email") {
                setName("justin.or.mail")
            }
        }
    }

    return (
        <Section>
            <BottomLeftBox>
                <Typography variant="h1">Hi, my {account} is</Typography>
                <Typography variant="h1">{name}.</Typography>
                <Typography variant="h4">A cool one liner.</Typography>
            </BottomLeftBox>
            <ButtonArray>  
                <Button onClick={handleClickFor("Github")} id={"Github"}>Github</Button>
                <Button onClick={handleClickFor("Linkedin")} id={"Linkedin"}>Linkedin</Button>
                <Button onClick={handleClickFor("Email")} id={"Email"}>Email</Button>
            </ButtonArray>
        </Section>
    );
}

const styledHero = styled(Hero)`
    display: flex;
    flex-direction: column; 
`;

export default styledHero;