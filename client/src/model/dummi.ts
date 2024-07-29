import { ProductDTO } from "../../../shared/DTO/products/product.dto";

export const dummyProductData: ProductDTO = {
  productID: 1,
  productName: "더미 상품",
  unitPrice: 1000,
  quantity: 100,
  restockDate: new Date("2024-08-01"), // 수정: 필드명에 맞게 수정
  expirationDate: new Date("2025-08-01"),
};
