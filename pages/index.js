import Categories from "@/components/Categories";
import Header from "@/components/Header";
import Items from "@/components/Items";
import categoryItems from "@/utils/categoryItems";
import Head from "next/head";

export default function Home({ result }) {
  return (
    <>
      <Head>
        <title>Shopping App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/tv-show-16.png" />
      </Head>
      <Header />
      <Categories />
      <Items data={result} />
    </>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const clickedGenre = categoryItems.find((item) => item.title === genre);
  const trendingGenre = categoryItems.find((item) => item.title === "Trending");

  const data = await fetch(
    `https://api.themoviedb.org/3${clickedGenre?.url || trendingGenre?.url}`
  ).then((res) => res.json());

  return {
    props: {
      result: data.results,
    },
  };
}
