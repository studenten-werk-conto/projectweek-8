import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import style from "./home.styled.js";

export default function Home(props) {
  const [wantsprovider, setWantsprovider] = useState("provider");

  const searchhandler = async (e) => {
    console.log(e);
    e.preventDefault();
  };

  return (
    <>
      <style.Box>
        <style.ProviderBox>
            
          <style.ProviderCard onclick={() => setWantsprovider("provider")}>
            hulp aanbieder
          </style.ProviderCard>

          <style.ProviderCard onclick={() => setWantsprovider("receiver")}>
            hulp vrager
          </style.ProviderCard>

        </style.ProviderBox>
        <style.Form color="orange" onSubmit={searchhandler}>
          {wantsprovider === "receiver" ? (
            <>
              <input type="text" name="kaas" />
              {console.log("mandjes")}
              <select>
                <option value="Gespreksmaatje">Gespreksmaatje</option>
                <option value="Hulp in huis">Hulp in huis</option>
                <option value="Tuinhulp">Tuinhulp</option>
              </select>
            </>
          ) : (
            <>
              {console.log("mand")}
              <input name="kaas" type="text" />
            </>
          )}
        </style.Form>
      </style.Box>
    </>
  );
}
