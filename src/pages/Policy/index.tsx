import Newsletter from "../../components/Newsletter";
import { useState } from "react";
import { ProductFiltersDialog } from "../../components/ProductFiltersDialog";
import Typography from "../../components/Typography";

function PrivacyPolicy() {
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
        <Typography variant="h4">Política de Privacidade</Typography>
        <Typography variant="p">
          Na HQSHOP, a sua privacidade e a segurança dos seus dados são
          prioridades absolutas. Esta Política de Privacidade descreve como
          coletamos, usamos, armazenamos e protegemos as informações fornecidas
          por você ao utilizar o nosso site e serviços. Ao navegar em nossa
          plataforma, você concorda com as práticas descritas neste documento,
          em total conformidade com a Lei Geral de Proteção de Dados (LGPD).
        </Typography>

        <Typography variant="h4">Informações que Coletamos</Typography>
        <Typography variantStyle="psmall">
          Dados Cadastrais: Nome completo, CPF, e-mail, telefones de contato e
          endereço de entrega, fornecidos no momento do seu cadastro ou
          checkout.
        </Typography>
        <Typography variantStyle="psmall">
          Dados de Navegação: Informações coletadas automaticamente sobre o seu
          dispositivo, endereço IP, páginas visitadas e interações com o site,
          utilizadas para melhorar a nossa plataforma.
        </Typography>

        <Typography variant="h4">Como Utilizamos Seus Dados</Typography>
        <Typography variant="p">
          As informações coletadas são utilizadas exclusivamente para propósitos
          essenciais à nossa operação e ao atendimento de excelência que você
          merece:
        </Typography>
        <Typography variantStyle="psmall">
          Processamento de Pedidos: Para gerenciar suas compras, emitir notas
          fiscais e acompanhar o envio rigoroso das suas HQs com segurança.
        </Typography>
        <Typography variantStyle="psmall">
          Comunicação e Suporte: Para enviar atualizações sobre o status do seu
          pedido, responder dúvidas e prestar atendimento personalizado de fã
          para fã.
        </Typography>
        <Typography variantStyle="psmall">
          Ofertas e Novidades: Envio de informativos sobre lançamentos de
          edições raras e promoções exclusivas, caso você tenha optado por
          recebê-los.
        </Typography>

        <Typography variant="h4">
          Segurança e Proteção das Informações
        </Typography>
        <Typography variant="p">
          Adotamos rigorosos padrões de segurança da informação e criptografia
          para impedir o acesso não autorizado, alteração ou vazamento dos seus
          dados pessoais. O seu acervo de leituras e os seus dados financeiros
          estão protegidos sob as normas mais rígidas do mercado digital.
        </Typography>

        <Typography variant="h4">Seus Direitos (LGPD)</Typography>
        <Typography variant="p">
          Você tem direito ao acesso, correção, atualização ou solicitação de
          exclusão dos seus dados pessoais armazenados em nossa base. Para
          qualquer dúvida ou exercício dos seus direitos, entre em contato
          conosco através dos canais de atendimento oficiais da HQSHOP.
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

export default PrivacyPolicy;
