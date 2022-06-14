import { VercelRequest, VercelResponse } from '@vercel/node';
import { Product } from 'src/app/components/core/product';
import { PRODUCTS } from 'src/app/components/mock-products';

const findProduct = (id: number): Product | undefined =>
  PRODUCTS.find((product) => product.id === id);

export default function fetchProductInfo(
  req: VercelRequest,
  res: VercelResponse
) {
  const id = Number(req.query.id);
  const product = findProduct(id);
  res.statusCode = 200;
  res.send({
    id: id,
    name: product?.name,
    price: product?.price,
    url: `/products${id}`,
  });
}
