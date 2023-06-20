import { useSelector } from 'react-redux';

export default function Counter (){
    const counterValue = useSelector((state) => state.counter.value); // Récupération de la valeur du compteur depuis le state du store
  const incrementedValue = useSelector((state) => state.counter.incrementedValue); // Récupération de la valeur incrémentée depuis le state du store
    return(
        <>
        
        <p>Counter Value: {counterValue}</p> 
        <p>
        Incremented Value: {incrementedValue} - {incrementedValue % 2 === 0 ? 'Pair' : 'Impair'}
      </p> 
        </>
    )
}