import { useSession } from "next-auth/react";
// import {clientPromise} from "../lib/mongodb"
import Link from "next/link";
import { useState } from "react";
import style from "./home.styled";

export default function Home(props){
    // const { data: session, status } = useSession();
    console.log(style)
    // console.log(status);
    const searchhandler = async (e) => {
      console.log(e)
      e.preventDefault();
    }
  
    return (
      <>
        {/* <p>Signed in as {session.user.email}</p> */}
        <style.Form onSubmit={searchhandler}>
          <input type="text" name="kaas"/>
          <select>
            <option value="Gespreksmaatje">Gespreksmaatje</option>
            <option value="Hulp in huis">Hulp in huis</option>
            <option value="Tuinhulp">Tuinhulp</option>
          </select>
        </style.Form>
      </>
    );
}