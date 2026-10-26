import Newsletter from "../../components/Newsletter";
import { useState } from "react";
import { ProductFiltersDialog } from "../../components/ProductFiltersDialog";
import Typography from "../../components/Typography";

function About() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  return (
    <>
      <hr />
      <main
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "justify",
          paddingTop: "50px",
        }}
      >
        <Typography variant="h4">Sobre a HQSHOP</Typography>
        <Typography variant="p">
          Bem-vindo à HQSHOP, o ponto de encontro definitivo para
          colecionadores, leitores apaixonados e admiradores da nona arte. Nossa
          história começou com a mesma paixão que move você: o fascínio pelo
          cheiro do papel, a nostalgia das páginas amareladas pelo tempo e a
          busca incessante por aquela edição lendária que parecia impossível de
          encontrar. O que nasceu como um acervo pessoal e um sonho de fã
          transformou-se em uma curadoria especializada em Histórias em
          Quadrinhos raras, históricas e de coleção.
        </Typography>
        <Typography variant="h4">O Que Nos Move</Typography>
        <Typography variant="p">
          Acreditamos que uma HQ rara vai muito além de um item físico — ela é
          um pedaço da história da cultura pop, uma obra de arte preservada e um
          portal para memórias inesquecíveis. Nosso objetivo não é apenas vender
          quadrinhos, mas conectar colecionadores às histórias que marcaram
          épocas e gerações. Seja uma primeira aparição icônica, uma edição
          limitada e esgotada, um formatinho clássico das décadas passadas ou
          uma graphic novel importada e autografada, nosso compromisso é trazer
          até você tesouros que enriquecem qualquer coleção.
        </Typography>
        <Typography variant="h4">
          Nosso Compromisso com o Colecionador
        </Typography>
        <Typography variant="p">
          Sabemos o quanto cada detalhe importa para quem coleciona. Por isso, a
          HQSHOP opera sob pilares fundamentais:
        </Typography>
        <Typography variantStyle="psmall">
          Curadoria e Autenticidade: Cada item do nosso acervo passa por uma
          avaliação criteriosa de estado de conservação, garantindo
          transparência total sobre a raridade e as condições da peça.
        </Typography>
        <Typography variantStyle="psmall">
          Cuidado Extremo no Envio: Tratamos sua HQ como se fosse nossa. Todos
          os produtos são embalados com proteção reforçada (bags, boards e
          embalagens rígidas) para que cheguem impecáveis até suas mãos.
        </Typography>
        <Typography variantStyle="psmall">
          Atendimento de Fã para Fã: Nossa equipe é formada por especialistas
          que entendem a linguagem, o valor e o respeito que o mercado de
          colecionáveis exige.
        </Typography>
      </main>
      <Newsletter />
      <ProductFiltersDialog
        isOpen={isFiltersOpen}
        onClose={() => setIsFiltersOpen(false)}
      />
    </>
  );
}

export default About;
