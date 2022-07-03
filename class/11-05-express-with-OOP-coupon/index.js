import { express } from "express";
import { ProductController } from "./mvc/controllers/product.controller.js";
import { CouponController } from "./mvc/controllers/coupon.controller.js";
const app = express();

// 상품 구매하기
const productController = new ProductController();
app.post("/products/buy", productController.buyProduct());

// 상품 환불하기
app.post("/products/refund", productController.refundProduct());

// 쿠폰(상품권) 구매하기
const couponController = new CouponController();
app.post("/coupons/buy", couponController.buyCoupon());

app.listen(3000);
