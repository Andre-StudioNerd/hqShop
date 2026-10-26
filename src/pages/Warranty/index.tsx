import Newsletter from "../../components/Newsletter";
import { useState } from "react";
import { ProductFiltersDialog } from "../../components/ProductFiltersDialog";
import Typography from "../../components/Typography";

function WarrantyPolicy() {
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
        <Typography variant="h4">Política de Garantia</Typography>
        <Typography variant="p">
          Na HQSHOP, o nosso compromisso é garantir que cada edição rara ou
          colecionável chegue até as suas mãos em perfeito estado de
          conservação. Sabemos o quanto a integridade de uma HQ importa para a
          sua estante, por isso trabalhamos com rigorosos padrões de avaliação e
          oferecemos total garantia caso ocorra qualquer imprevisto durante o
          processo de envio.
        </Typography>
        <Typography variant="p">
          Todos os produtos do nosso acervo passam por uma triagem detalhada
          para verificar o estado de conservação antes de serem cuidadosamente
          embalados. Oferecemos cobertura para situações específicas que afetem
          diretamente a qualidade do material recebido:
        </Typography>
        <Typography variantStyle="psmall">
          Danos de Transporte: Caso a sua HQ sofra algum dano estrutural grave
          causado pelo transporte (como rasgos profundos, dobras severas ou
          amassados na lombada), garantimos a troca ou o reembolso integral.
        </Typography>
        <Typography variantStyle="psmall">
          Inconsistência de Produto: Se você receber um item diferente daquele
          adquirido em seu pedido, nossa equipe fará a substituição imediata sem
          qualquer custo adicional de frete.
        </Typography>

        <Typography variant="h4">Prazos</Typography>
        <Typography variant="p">
          De acordo com o Código de Defesa do Consumidor e com as diretrizes da
          nossa loja, o prazo para reportar qualquer divergência, defeito ou
          dano relacionado ao transporte é de até 7 (sete) dias corridos a
          contar da data de recebimento da encomenda em seu endereço.
        </Typography>

        <Typography variant="h4">Como Acionar</Typography>
        <Typography variant="p">
          O processo para solicitar a troca ou acionar a garantia é simples e
          transparente. Basta entrar em contato com a nossa central de
          atendimento por e-mail ou pelos canais oficiais, enviando fotos
          nítidas do produto recebido e da embalagem original para que nossa
          equipe de suporte possa analisar o caso rapidamente.
        </Typography>

        <Typography variant="h4">Compromisso</Typography>
        <Typography variant="p">
          Nosso objetivo é construir uma relação de confiança duradoura com a
          comunidade de leitores e colecionadores. Se houver qualquer problema,
          estamos sempre prontos para resolver da melhor forma possível, com o
          atendimento humanizado e especializado de fã para fã.
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

export default WarrantyPolicy;
