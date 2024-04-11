import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { useSignal } from "@preact/signals";
import Shower from "../components/Shower.tsx";
import HiButton from "../islands/HiButton.tsx";
import { useState } from "preact/hooks";
import HiForm from "../islands/HiForm.tsx";
import {Form} from "../islands/Form.tsx";

export const handler: Handlers = {
  GET: (req: Request, ctx: FreshContext) => {
    const url = new URL(req.url);
    const name = url.searchParams.get("nombre");
    const apellido = url.searchParams.get("apellido");
    return ctx.render({ name, apellido});
  },
};

const Hihihi = (props: PageProps) => {
  //const SayHi = useSignal(props.data.name);
  /*const [SayHi, setSayHi] = useState(props.data.name);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('nombre');
    setSayHi(name);
  }

  return (
    <div class="formBody">
      <form class="formBox" onSubmit={handleSubmit} method="get" target="/hihihi">
        <h3>Say hi hi hi</h3>
        <input type="text" name="nombre" placeholder={"Name"} />
        <br />
        <input type="text" name="apellido" placeholder={"Last name"} />
        <br />
        <HiButton>
          Hi!
        </HiButton>
      </form>
      <Shower
        text={SayHi}
      />
    </div>
  );
  */
  //completame esto llamando a la isla Form

  return (
    <div>
      <Form/>

      <p> {props.data.name}</p>
      <p> {props.data.apellido}</p>

    </div>
  )

  
  
 

};

export default Hihihi;
