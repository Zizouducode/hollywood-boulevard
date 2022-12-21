import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export default function Home({ data }) {
  return (
    <>
      <main>
        {/* return ( */}
        {/* <div key={movie.index}>
              <p>{movie.title}</p>
              <Image
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt="movie"
                width={200}
                height={200}
              ></Image>
            </div> */}
        <div className=" flex bg-white">
          <div className=" mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Top rated moovies
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {data.map((movie) => (
                <div key={movie.id} className="group relative">
                  <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <Image
                      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      alt="movie"
                      width={200}
                      height={200}
                      className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                    ></Image>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <Link href={{ pathname: `/movie/${movie._id}` }}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          <span className=" ml-8  font-bold">
                            {movie.title}
                          </span>
                        </Link>
                      </h3>
                      {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                    </div>
                    {/* <p className="text-sm font-medium text-gray-900">{product.price}</p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  let dataToSend = [];

  try {
    const { data } = await axios.get("http://localhost:3000/api/movies", {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    });
    dataToSend = data;
    // console.log(data);
  } catch (error) {
    console.log("catch home>>>", error);
  }
  return {
    props: { data: dataToSend },
  };
}
