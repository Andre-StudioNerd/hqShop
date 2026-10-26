import StatusHandler from "../../common/utils/statusHandler";
import Button from "../../components/Button";
import Newsletter from "../../components/Newsletter";
import ProductList from "../../components/ProductList";
import Typography from "../../components/Typography";
import { useProductsQuery } from "../../queries/UseProductsQuery";
import { useState } from "react";
import { useProductFilters } from "../../hooks/useProductFilters";
import { ProductFiltersDialog } from "../../components/ProductFiltersDialog";
import styles from "./HomePage.module.css";

function HomePage() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const { filters, hasActiveFilters } = useProductFilters();

  const {
    data: products,
    isPending: isPendingProducts,
    isError: isErrorProducts,
  } = useProductsQuery(hasActiveFilters ? filters : {});

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
        <div className={styles.filtersSection}>
          <Typography variant="h2">Produtos</Typography>
          <div className={styles.filtersButton}>
            <Button onClick={() => setIsFiltersOpen(true)} text="Filtros" />
            {hasActiveFilters && (
              <span className={styles.filtersBadge}>
                {Object.keys(filters).length}
              </span>
            )}
          </div>
        </div>
        {hasActiveFilters && (
          <div className={styles.activeFilters}>
            <Typography
              variant="p"
              variantStyle="bodySemiBold"
              className={styles.activeFiltersLabel}
            >
              Filtros ativos:
            </Typography>
            {filters.price_gte !== undefined && (
              <span className={styles.filterChip}>
                Preço mín: R$ {filters.price_gte}
              </span>
            )}
            {filters.price_lte !== undefined && (
              <span className={styles.filterChip}>
                Preço máx: R$ {filters.price_lte}
              </span>
            )}
            {filters._sort && (
              <span className={styles.filterChip}>
                Ordenar: {filters._sort}
              </span>
            )}
          </div>
        )}

        <StatusHandler isLoading={isPendingProducts} error={isErrorProducts}>
          <ProductList title="Promoções especiais" products={products || []} />
        </StatusHandler>
      </main>
      <Newsletter />
      <ProductFiltersDialog
        isOpen={isFiltersOpen}
        onClose={() => setIsFiltersOpen(false)}
      />
    </>
  );
}

export default HomePage;
