import Newsletter from "../../components/Newsletter";
import { useState } from "react";
import { ProductFiltersDialog } from "../../components/ProductFiltersDialog";
import Typography from "../../components/Typography";

function ShippingPolicy() {
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
        <Typography variant="h4">Política de Entregas</Typography>
        <Typography variant="p">
          Na HQSHOP, sabemos que cada quadrinho é um tesouro precioso para a sua
          estante. Por isso, cuidamos de todo o processo logístico com o máximo
          de rigor e carinho, garantindo que a sua edição rara ou colecionable
          chegue até você em perfeito estado de conservação, exatamente como
          saiu do nosso acervo.
        </Typography>

        <Typography variant="h4">Prazos e Regiões de Atendimento</Typography>
        <Typography variant="p">
          Realizamos entregas para todo o território nacional através de
          parceiros logísticos de confiança. O prazo de entrega pode variar de
          acordo com o seu endereço de destino e a modalidade de envio escolhida
          no momento do checkout.
        </Typography>
        <Typography variantStyle="psmall">
          Cálculo do Frete: O prazo e o valor do frete são calculados
          automaticamente com base no CEP de destino e no peso/volume da
          encomenda antes da finalização do pagamento.
        </Typography>
        <Typography variantStyle="psmall">
          Postagem Ágil: Após a confirmação do pagamento, o seu pedido passa por
          uma triagem rigorosa e é preparado para postagem dentro do prazo de
          até 2 dias úteis.
        </Typography>
        <Typography variantStyle="psmall">
          O nosso compromisso com o colecionador reflete-se diretamente na forma
          como protegemos o seu produto contra os impactos do transporte:
        </Typography>
        <Typography variantStyle="psmall">
          Proteção Individual: As HQs são ensacadas individualmente (bags) e
          protegidas com papelão rígido (boards) para evitar amassados nas
          pontas e lombadas.
        </Typography>
        <Typography variant="p">
          Embalagens Reforçadas: Utilizamos caixas de papelão de alta
          resistência e materiais de amortecimento para garantir que o material
          não sofra com movimentações bruscas durante o percurso.
        </Typography>

        <Typography variant="h4">Rastreamento do Pedido</Typography>
        <Typography variant="p">
          Assim que o seu pedido for despachado, você receberá um código de
          rastreamento por e-mail para acompanhar cada etapa da jornada da sua
          encomenda, desde a saída do nosso centro de distribuição até a entrega
          no seu endereço.
        </Typography>

        <Typography variant="h4">Dúvidas sobre a Entrega?</Typography>
        <Typography variant="p">
          Caso tenha qualquer dúvida sobre o status do seu envio ou precise de
          suporte especializado, a nossa equipe de atendimento de fã para fã
          está pronta para ajudar através dos nossos canais oficiais de contato.
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

export default ShippingPolicy;
