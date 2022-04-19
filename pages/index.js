import { useSession } from "next-auth/react";
// import {clientPromise} from "../lib/mongodb"
import Link from "next/link";
import style from "../styles/Home.module.css";
import Fetch from "../lib/fetch";
import AdCard from "../components/adcard";
import { useState } from "react";
import CreateAd from "../components/createad";
import Home from "../components/pages/home";

export default function Frontpage({ data }) {
  const { data: session, status } = useSession();

  const searchhandler = async (e) => {
    console.log(e)
    e.preventDefault();
  }

  return (
    <>
      {/* <p>Signed in as {session.user.email}</p> */}
      {status === "authenticated" ? (
        <Link href="/user">go to user panel</Link>
      ) : (
        <Link href="/api/auth/signin  ">signin</Link>
      )}
      <Home/>
    </>
  );
}

Frontpage.getInitialProps = async (ctx) => {
  const data = await Fetch("/api/ad/get");
  return { data };
};
