import { SanityDocument } from "next-sanity"
import { client } from "../sanity/client";

export default async function Home() {
  const QUERY = `*[_type == "article"]`;
  const articles = await client.fetch<SanityDocument[]>(QUERY);


  return (
   <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold p-2">Artigos</h1>
      <ul>
        {articles.map((article) => (
          <li className="p-2" key={article.id}>{article.title}</li>
        ))}
      </ul>

  
  </main>
  );
}
