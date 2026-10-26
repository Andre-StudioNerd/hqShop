import type { Product } from "../common/types/product";
import type { ProductSearchParams } from "../common/types/search";
import { api } from "../services/api";

interface BinData {
  products: Product[];
}

export async function fetchProducts(
  filters?: Partial<ProductSearchParams>,
): Promise<Product[]> {
  const { data } = await api.get<BinData>("");

  let products = Array.isArray(data.products) ? data.products : [];

  if (filters) {
    products = products.filter((product) => {
      return Object.entries(filters).every(([key, value]) => {
        if (value == null) {
          return true;
        }

        if (typeof value === "string" && value.trim() === "") {
          return true;
        }

        const productValue = product[key as keyof Product];

        if (productValue == null) {
          return false;
        }

        if (typeof productValue === "string") {
          return productValue
            .toLowerCase()
            .includes(String(value).toLowerCase());
        }

        if (typeof productValue === "number") {
          return productValue === Number(value);
        }

        if (Array.isArray(productValue)) {
          return productValue.some(
            (item) =>
              String(item).toLowerCase() === String(value).toLowerCase(),
          );
        }

        return productValue === value;
      });
    });
  }

  return products;
}

export async function fetchProductById(id: string | number): Promise<Product> {
  const { data } = await api.get<BinData>("");

  const product = data.products.find((item) => String(item.id) === String(id));

  if (!product) {
    throw new Error(`Produto com ID ${id} não encontrado.`);
  }

  return product;
}
