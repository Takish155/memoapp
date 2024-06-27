export default async function Home() {
  const res = await fetch(
    "https://challenge-server.tracks.run/memoapp/category",
    {
      headers: {
        "Content-Type": "application/json",
        "X-ACCESS-TOKEN": "e7b1b7b0-6b7b-4b7b-8b7b-0b7b7b7b7b7b",
      },
      method: "GET",
    }
  );
  if (!res.ok) {
    return <main>error</main>;
  }
  const data = await res.json();
  console.log(data);

  return <main>a</main>;
}
