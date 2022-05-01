import {Link} from 'react-router-dom'
import { produits } from './data';
import './produit.css'
import ProductDetails from './produitDetatille';


const Produit = () => {
    return ( 
        <div className='content'>
            <h2>Vous touverez ici tous nos produits </h2>
            <div className='products'>
                {produits.map(item=>(
                    <div className='product' key={item.id}>
                        <p>{item.nom}</p>
                        <img src={[require(`../../../public/produits/${item.src}`)]} />
                        <Link to={`/produit/${item.id}`}>
                            <p>Voir détaille</p>
                        </Link>
                    </div>

                ))}
                                {produits.map(item=>(
                    <div className='product' key={item.id}>
                        <p>{item.nom}</p>
                        <img src={[require(`../../../public/produits/${item.src}`)]} />
                        <Link to={`/produit/${item.id}`}>
                            <p>Voir détaille</p>
                        </Link>
                    </div>
                ))}

                
            </div>
        </div>
     );
}
 
export default Produit;