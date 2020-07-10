import React from "react";
import Layout from "../../components/Layout";
import Title from "../../components/Title";
import Paragraph from "../../components/Paragraph";

import { Container, TechList, TechItem } from "./styles";

const techItem = ["Node.js", "ReactJS", "React Native", "Express.js", "Redux"];

export default function About() {
  return (
    <Layout center id="about">
      <Title>Sobre</Title>
      <Container>
        <Paragraph>
          Nosso projeto será um aplicativo mobile de e-commerce e delivery,
          focado no público vegano e empresas que seguem a regra “Cruelty-Free”.
          Oferecemos um serviço de compra e venda de produtos cuja origem é
          vegana. Queremos para um futuro próximo que a comunidade vegana
          encontre tudo que almeja, de maneira mais fácil, levando em conta que
          o Brasil encontra-se entre os 10 países com o maior número de
          vegetarianos e veganos do mundo, segundo a EuroMonitor e 14% da
          população brasileira se declara vegetariana ou vegana de acordo com o
          Ibope Inteligência, em pesquisa realizada em abril de 2018. Nosso
          segmento de mercado consiste em: alimentício e MarketPlace
          (e-commerce). Nossos clientes possuem os seguintes perfis: Demográfico
          – Classe média alta, para qualquer idade e sexo. Geográfico – Qualquer
          pessoa em território brasileiro que seja vegana. Comportamental –
          atribuinte do veganismo Psicográfico – pessoas aderentes da ideia
          “Cruelty-Free” e veganismo.
        </Paragraph>
        {/* <TechList>
          {techItem.map(tech => (
            <TechItem key={tech}>{tech}</TechItem>
          ))}
        </TechList> */}
      </Container>
    </Layout>
  );
}
