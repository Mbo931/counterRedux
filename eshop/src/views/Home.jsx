import Navbar from "../components/header/Navbar";
import ListProducts from "../ListProduct/ListProducts";
import { useProducts } from "../services/Products";

export default function Home(){
    const products = useProducts();
    return(
        <>
        <div>{products && <ListProducts products={products} />}</div>;
        </>
    )
}