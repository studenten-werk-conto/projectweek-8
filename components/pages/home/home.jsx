import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import style from "./home.styled.js";

export default function Home(props) {
  const [wantsprovider, setWantsprovider] = useState("wantprovider");

  const searchhandler = async (e) => {
    console.log(e);
    e.preventDefault();
  }

  return (
    <>
      <style.Box>
        <style.ProviderBox>
            
          <style.ProviderCard active={() => !wantsprovider && true} onClick={() => setWantsprovider("wantprovider")}>
            hulp aanbieder
          </style.ProviderCard>

          <style.ProviderCard active={() => wantsprovider && true} onClick={() => setWantsprovider("wantreceiver")}>
            hulp vrager
          </style.ProviderCard>

        </style.ProviderBox>
        <style.Form color="orange" action="/overview">
          {wantsprovider === "wantreceiver" ? (
            <>
              <select name="type">
                <option value="Gespreksmaatje">Gespreksmaatje</option>
                <option value="Hulp in huis">Hulp in huis</option>
                <option value="Tuinhulp">Tuinhulp</option>
              </select>
              <input type="text" name="postcode" placeholder="postcode"/>
              <input type="submit"/>
            </>
          ) : (
            <>  
              <h1>leg uit wat uw situatie is</h1>
              <textarea name="kaas" type="text" placeholder="vul in"/>
            </>
          )}
        </style.Form>
      </style.Box>
    </>
  );
}
