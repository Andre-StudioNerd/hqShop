import Footer from ".";
import {
  InstagramIcon,
  VisaIcon,
  MastercardIcon,
  EloIcon,
  PixIcon,
  DinnersIcon,
  WhatsAppIcon,
  TiktokIcon,
} from "../../common/icons";

export default function FooterConfig() {
  const sections = [
    {
      title: "Funcionamento",
      items: [{ label: "sac@hqshop.com.br" }, { label: "0800 541 320" }],
    },
    {
      title: "Institucional",
      items: [
        { label: "Sobre nós", href: "/about" },
        { label: "Política de Privacidade", href: "/policy" },
      ],
    },
    {
      title: "Informações",
      items: [
        { label: "Entregas", href: "/shippingpolicy" },
        { label: "Garantia", href: "/warranty" },
      ],
    },
  ];

  const paymentIcons = [
    <VisaIcon key="visa" />,
    <MastercardIcon key="mastercard" />,
    <EloIcon key="elo" />,
    <DinnersIcon key="dinners" />,
    <PixIcon key="pix" />,
  ];

  const socialIcons = [
    <a href="/#" key="whatsapp">
      <WhatsAppIcon />
    </a>,
    <a href="/#" key="instagram">
      <InstagramIcon />
    </a>,
    <a href="/#" key="tiktok">
      <TiktokIcon />
    </a>,
  ];

  return (
    <Footer
      sections={sections}
      paymentIcons={paymentIcons}
      socialIcons={socialIcons}
    />
  );
}
