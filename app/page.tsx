import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import Chat from "./components/Chat";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/authOptions";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1>Hello {session ? session.user!.name : "world!"}</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
      <Chat />
    </main>
  );
}
