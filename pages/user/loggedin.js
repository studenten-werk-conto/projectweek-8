import { useState } from "react"
import CreateAd from "../../components/createad";

export default function Loggedin(props,data){
    const [ShowCreateAd, SetShowCreateAd] = useState(false);

    console.log(props.acount);

    return(<>
    <h1>a</h1>
    <button onClick={() => SetShowCreateAd(true)}>create new ad</button>

    {ShowCreateAd? <CreateAd/> : null}
    {props.acount.user.email}
    </>)
}

Loggedin.getInitialProps = async (ctx) => {
    const db = (await clientPromise).db();
    const data = db.collection("ads").find({})
    return { data }
  }