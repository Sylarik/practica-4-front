import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import Shower from "../components/Shower.tsx";
import HiButton from "./HiButton.tsx";



export const Form : FunctionComponent = (props) => {
  //hazme un formulario que coja nombre y apellido y los devuelva impresos en pantalla
  
  
  return (
    <div class="formBody">
      <form class="formBox" method="get" action="/hihihi">
        <h3>Say hi hi hi</h3>
        <input type="text" name="nombre" placeholder={"Name"} />
        <br />
        <input type="text" name="apellido" placeholder={"Last name"} />
        <br />
        
        <button type="submit">
          Hi!
        </button>
      </form>

      
      
    </div>
  );
}