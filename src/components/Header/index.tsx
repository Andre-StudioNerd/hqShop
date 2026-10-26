import { Link } from "react-router-dom";
import { LogoIcon } from "../../common/icons/LogoIcon";
import { CarrinhoIcon } from "../../common/icons/CarrinhoIcon";
import { PerfilIcon } from "../../common/icons/PerfilIcon";
import Typography from "../Typography";
import Styles from "./Header.module.css";
import { useBoundStore } from "../../stores/bound.store";

const Header = () => {
  const cartCount = useBoundStore((state) => state.items.length);

  return (
    <header className={Styles.header}>
      <div className={Styles.headerInner}>
        <div className={Styles.logo}>
          <Link to="/">
            <LogoIcon />
          </Link>
        </div>
        <div className={Styles.options}>
          <div className={Styles.userActions}>
            <Link to="/login">
              <PerfilIcon />
            </Link>

            <Link
              to="/carrinho"
              style={{ display: "flex", alignItems: "center", gap: "4px" }}
            >
              <CarrinhoIcon />
              <Typography variantStyle="bodySmall">({cartCount})</Typography>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
