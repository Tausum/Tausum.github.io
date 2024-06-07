"use client";

export default function Home() {

  const tip: string = `there is nothing...`

  setTimeout(()=>location.href='/', 2500)

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <p>{ tip }</p>
    </main>
  );
}
