export default function AddPanier(){

    return(
        <>
        <form className="addPanier" action="">
            Quantity :   
            <input className="quantity" type="number" name="" id="" min={1} step={1} defaultValue={1} required />
            <br/>
            <button className="addBtn">Add to Basket</button>
        </form>
        </>
    )
}