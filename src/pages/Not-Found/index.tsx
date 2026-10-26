import { useState } from "react";
import HeroBanner from "../../components/HeroBanner";
import Typography from "../../components/Typography";
import Newsletter from "../../components/Newsletter";
import { ProductFiltersDialog } from "../../components/ProductFiltersDialog";

function NotFound() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  return (
    <>
      <main
        className="container"
        style={{ textAlign: "center", paddingBottom: "48px" }}
      >
        <HeroBanner
          backgroundImage="https://raw.githubusercontent.com/gss-patricia/use-dev-assets/refs/heads/main/banner-seceos-tablet.png"
          mainImage="https://raw.githubusercontent.com/gss-patricia/use-dev-assets/8df6d50256e4b270eb794ccbc0314baf2a656211/hero.png"
        />

        <div style={{ marginTop: "32px" }}>
          <Typography variant="h4">Oops! Página não encontrada</Typography>
        </div>

        <div
          style={{ marginTop: "16px", maxWidth: "600px", marginInline: "auto" }}
        >
          <Typography variant="p">
            Parece que a página que você está procurando não existe, foi movida
            ou o link está incorreto. Não se preocupe, você pode retornar à
            página inicial ou utilizar nossos filtros para continuar navegando.
          </Typography>
        </div>

        <div style={{ marginTop: "24px" }}>
          <a
            href="/"
            style={{
              display: "inline-block",
              padding: "12px 24px",
              backgroundColor: "#000",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "4px",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            Voltar para a Página Inicial
          </a>
        </div>
      </main>

      <Newsletter />
      <ProductFiltersDialog
        isOpen={isFiltersOpen}
        onClose={() => setIsFiltersOpen(false)}
      />
    </>
  );
}

export default NotFound;
