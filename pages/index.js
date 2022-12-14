import { getSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Center from "../components/Center";
import Player from "../components/Player";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Jimmy Spotify</title>
      </Head>

      <main className="flex">
        <Sidebar />
        <Center />
      </main>

      <div className="sticky bottom-0">
        <Player />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  // prefetch the session
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
