import {useEffect, useState } from "react";
import { Link } from "next/link";
import Fetch from "../../../lib/fetch";
import CreateAd from "../../createad/";
import AdCard from "../../adcard/";

export default function Overview_component() {
  const [ShowCreateAd, SetShowCreateAd] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    async function load(){
      const a = await Fetch("/api/ad/get");
      setData(a)
    };
    load()
  }, []);

  return (
    <>
      <button onClick={() => SetShowCreateAd(true)}>create new ad</button>
      {ShowCreateAd ? <CreateAd /> : null}

      <br />
      <div>{data && data.map((ad) => <AdCard key={ad.id} props={ad} />)}</div>
    </>
  );
}
