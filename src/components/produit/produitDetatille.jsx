import { useParams, useRouteMatch } from "react-router-dom";
import {produits} from './data.js';
export default function ProductDetails() {
  const { id } = useParams();
  const produit=produits.filter(element=>element.id==id);
  
  return (
    <div className="content">
        <div className="productDetail">
            <h2>{produit[0]['nom']}</h2>
            <img src={[require(`../../../public/produits/${produit[0].src}`)]} />
            <p>{produit[0]['desc']}</p>
        </div>

    </div>
  )
}
