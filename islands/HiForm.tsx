import { useState } from "preact/hooks";
import HiButton from "./HiButton.tsx";
import Shower from "../components/Shower.tsx";
import { useSignal } from "@preact/signals";

const HiForm = () => {
    const SayHi = useSignal("");
  
    return (
      <div class="formBody">
        <form class="formBox" method="get" target="/hihihi">
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
  };

export default HiForm;