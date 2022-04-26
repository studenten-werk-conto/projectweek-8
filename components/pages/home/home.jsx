import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import style from "./home.styled.js";

export default function Home(props) {
  const [wantsprovider, setWantsprovider] = useState("wantprovider");
  // const { data: session, status } = useSession();
  const router = useRouter()

  const sumbithandler = (event) => {
    event.preventDefault();
    let data = "";
    data += `provider=${wantsprovider}&`
    data += `postcode=${event.target.postcode.value}&`
    data += `type=${event.target.type.value}`
    router.push(`/overview/?${data}`)
  }

  return (
    <>
      <style.Box>
        <style.ProviderBox>
          <style.ProviderCard
            active={wantsprovider === "wantprovider" && true}
            onClick={() => setWantsprovider("wantreceiver")}
          >
            hulp aanbieder
          </style.ProviderCard>

          <style.ProviderCard
            active={wantsprovider === "wantreceiver" && true}
            onClick={() => setWantsprovider("wantprovider")}
          >
            hulp vrager
          </style.ProviderCard>
        </style.ProviderBox>

        <style.Form onSubmit={sumbithandler} color="orange" >
              <style.Select name="type">
                <option value="gespreksmaatje">Gespreksmaatje</option>
                <option value="hulp_in_huis">Hulp in huis</option>
                <option value="tuinhulp">Tuinhulp</option>
              </style.Select>
              <style.InputField
                type="text"
                name="postcode"
                placeholder="postcode"
              />
              <style.InputField type="submit" />
        </style.Form>
      </style.Box>
    </>
  );
}
