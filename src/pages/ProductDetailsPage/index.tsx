import { useParams } from "react-router-dom";
import StatusHandler from "../../common/utils/statusHandler";
import Typography from "../../components/Typography";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import Styles from "./ProductDetailsPage.module.css";
import { useBoundStore } from "../../stores/bound.store";
import { useProductDetailQuery } from "../../queries/UseProductsQuery";

function ProductDetailsPage() {
  const addToCart = useBoundStore((state) => state.addItem);
  const { id } = useParams<{ id: string }>();

  const {
    data: product,
    isError: error,
    isPending: isLoading,
  } = useProductDetailQuery(Number(id));

  return (
    <>
      <hr className={Styles.divider} />

      <main className={Styles.page}>
        <section className={Styles.section}>
          <div className={Styles.productContainer}>
            <Typography variant="h4">Detalhes do Produto</Typography>

            <StatusHandler isLoading={isLoading} error={error}>
              {product ? (
                <ProductDetail
                  id={product.id}
                  title={product.label}
                  description={product.description}
                  price={product.price}
                  imageUrl={product.imageSrc}
                  colors={product.colors}
                  addToCart={addToCart}
                />
              ) : (
                !isLoading && <p>Produto não encontrado.</p>
              )}
            </StatusHandler>
          </div>
        </section>
      </main>
    </>
  );
}

export default ProductDetailsPage;
