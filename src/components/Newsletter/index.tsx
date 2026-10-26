import Typography from "../Typography";
import styles from "./Newsletter.module.css";

export default function Newsletter() {
  return (
    <section className={styles.container}>
      <div className={styles.containerInner}>
        <Typography variant="h5" className={styles.title}>
          AVISO
        </Typography>

        <Typography variantStyle="bodyLarge" className={styles.description}>
          Projeto de portfólio de caráter estritamente fictício e educacional,
          desenvolvido para demonstrar competências avançadas em arquitetura
          front-end e engenharia de software web.
        </Typography>
        <Typography variantStyle="bodyLarge" className={styles.description}>
          Plataforma sem fins comerciais. Nenhuma transação financeira é real e
          as marcas ou personagens exibidos pertencem aos seus respectivos
          proprietários.
        </Typography>
        <Typography variantStyle="bodyLarge" className={styles.description}>
          Esta plataforma opera exclusivamente no lado do cliente (Front-End) e
          não possui conexão com serviços de backend para autenticação, login de
          utilizadores, salvamento de dados de sessão ou processamento de
          pagamentos.
        </Typography>
      </div>
    </section>
  );
}
