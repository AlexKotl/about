import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image src="/ava.jpg" alt="Olek" width={300} height={300} priority />
    </main>
  );
}
