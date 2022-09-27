import { useContext, useState } from "react/cjs/react.production.min";
import { useCoffeeContext } from "../context/CoffeeContext";

const SelectedCoffeeBean = (props) => {
  console.log(useCoffeeContext())
  // const [coffeeBean, setCoffeeBean] = useState();
  const {coffeeBean, setCoffeeBean} = useCoffeeContext();

  

  return(
    <div className='selected-coffee'>
      <h2>{coffeeBean.name}</h2>
    </div>
    
  );
}

export default SelectedCoffeeBean;