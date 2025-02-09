import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import Image from "next/image";

//This is main home page.
//Make search form fully functional by using searchParams at home page.
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "PoshX1z" },
      _id: 1,
      description: "Haha robot is going to rule the world",
      image:
        "https://img.freepik.com/free-vector/cute-robot-holding-clipboard-cartoon-vector-icon-illustration-science-technology-icon-isolated_138676-5184.jpg?t=st=1738924108~exp=1738927708~hmac=064becd62c9ec94cf86f34a0bba1b8e171ebf062e3ccd58bbbf569084d56eae1&w=826",
      category: "entertainment",
      title: "Robot Haha",
    },
  ];
  return (
    <>
      <section className="blue-container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Voteo on Pitches and Get Noticed in Virtual
          Competitions.
        </p>
        <h1 className="heading">Home</h1>
        <SearchForm query={query} />
      </section>

      <section className="section-container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : "All Startups"}
        </p>

        <ul className="mt-7 card-grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
