import type { ReactNode } from "react";
import styles from "./Footer.module.css";
import FooterSection from "./FooterSection";
import Divider from "../Divider";
import Typography from "../Typography";

export type FooterItem = {
  label: string;
  href?: string;
};

export type Section = {
  title: string;
  items: FooterItem[];
};

type FooterProps = {
  sections: Section[];
  paymentIcons: ReactNode[];
  socialIcons: ReactNode[];
};

export default function Footer({ sections, paymentIcons }: FooterProps) {
  return (
    <>
      <footer className={styles.footer}>
        <section className="container">
          <div className={styles.sectionsContainer}>
            <div className={styles.logoAndSlogan}>
              <Typography variant="h2">HQ SHOP</Typography>
            </div>

            {sections.map((section, index) => (
              <FooterSection
                key={`footer-item-${index}`}
                title={section.title}
                items={section.items}
              />
            ))}
          </div>

          <Divider />

          <div className={styles.subFooter}>
            <div className={styles.paymentMethods}>
              <Typography variantStyle="bodyLargeBold">
                Formas de Pagamento
              </Typography>
              <div className={styles.paymentIcons}>
                {paymentIcons.map((icon, index) => (
                  <span key={`payment-icon-${index}`}>{icon}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </footer>

      <div className={styles.copyright}>
        <Typography variantStyle="body">
          Desenvolvido por André Luís Fernandes. Projeto fictício sem fins
          comerciais.
        </Typography>
      </div>
    </>
  );
}
