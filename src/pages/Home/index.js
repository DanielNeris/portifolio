import React from "react";
import { useSpring } from "react-spring";
import { Container, TitleWrapper, StyledButton, Imagem } from "./styles";
import img from "../../assets/a.jpeg";

import Layout from "../../components/Layout";
import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";

export default function Home() {
  const Fade = useSpring({
    delay: 400,
    opacity: 1,
    from: { opacity: 0 }
  });

  return (
    <Layout vh id="home">
      <Container>
        <TitleWrapper style={Fade}>
          <Title>Hi,</Title>
          <Title>We're I.D Vegan,</Title>
          <SubTitle>A Vegan App</SubTitle>

          <StyledButton
            activeClass="active"
            to="about"
            smooth
            spy
            offset={-70}
            duration={700}
          >
            Sobre nós
          </StyledButton>
        </TitleWrapper>

        <Imagem src={img} />
      </Container>
    </Layout>
  );
}
