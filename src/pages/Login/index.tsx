import { useState } from "react";
import Typography from "../../components/Typography";
import Newsletter from "../../components/Newsletter";
import { ProductFiltersDialog } from "../../components/ProductFiltersDialog";

function Login() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica do front-end apenas
    console.log("Tentativa de login com:", { email, password });
  };

  return (
    <>
      <hr />
      <main
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div style={{ marginTop: "24px" }}>
          <Typography variant="h4">Acesse sua Conta</Typography>
        </div>

        <div style={{ maxWidth: "500px", marginTop: "8px" }}>
          <Typography variant="p">
            Bem-vindo de volta à HQSHOP! Entre com seus dados para acompanhar
            seus pedidos e acessar seu acervo.
          </Typography>
        </div>

        <div style={{ maxWidth: "500px", marginTop: "8px" }}>
          <Typography variant="p">
            Atenção: Esta tela de login possui caráter estritamente
            demonstrativo (front-end). O sistema não realiza autenticação real e
            não armazena dados de usuários; trata-se de uma interface simulada
            para fins de portfólio.
          </Typography>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            maxWidth: "400px",
            marginTop: "24px",
            textAlign: "left",
          }}
        >
          <div style={{ marginBottom: "16px" }}>
            <label
              htmlFor="email"
              style={{
                display: "block",
                marginBottom: "8px",
                textAlign: "left",
              }}
            >
              <Typography variantStyle="psmall">E-mail</Typography>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                fontSize: "14px",
              }}
            />
          </div>

          <div style={{ marginBottom: "24px" }}>
            <label
              htmlFor="password"
              style={{
                display: "block",
                marginBottom: "8px",
                textAlign: "left",
              }}
            >
              <Typography variantStyle="psmall">Senha</Typography>
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              required
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                fontSize: "14px",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Entrar
          </button>
        </form>

        <div style={{ marginTop: "16px", marginBottom: "32px" }}>
          <Typography variantStyle="psmall">
            Ainda não tem uma conta? <a href="/cadastro">Cadastre-se</a>
          </Typography>
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

export default Login;
