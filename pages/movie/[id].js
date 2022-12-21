import axios from "axios";
import Image from "next/image";

const Moovie = ({ data }) => {
  console.log(data);
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {data.title}
          </h2>
          <p className="mt-4 text-gray-500">{data.overview}</p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Titre</dt>
              <dd className="mt-2 text-sm text-gray-500">{data.title}</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Titre Original</dt>
              <dd className="mt-2 text-sm text-gray-500">
                {data.original_title}
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Année de sortie</dt>
              <dd className="mt-2 text-sm text-gray-500">
                {data.release_date}
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Popularité</dt>
              <dd className="mt-2 text-sm text-gray-500">
                {data.popularity}/100
              </dd>
            </div>
          </dl>
        </div>
        <Image
          src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
          alt="movie"
          width={300}
          height={300}
          className="ml-10 object-contain object-center"
        ></Image>
        {/* <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Moovie;

export async function getServerSideProps(context) {
  const id = context.params.id;

  let dataToDisplay = {};

  try {
    const { data } = await axios.get(
      `https://lereacteur-bootcamp-api.herokuapp.com/api/allocine/movie/${id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
      }
    );
    dataToDisplay = data;
    console.log(data);
  } catch (error) {
    console.log("catch home>>>", error);
  }
  return {
    props: { data: dataToDisplay },
  };
}
