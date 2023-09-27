import ImagesCard from "../components/ImagesCard";
import useAxios from "../hooks/useAxios";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const { query } = useSelector((state) => state.photoState);
  const { data, isLoading } = useAxios(
    `https://api.unsplash.com/search/photos?client_id=zcedffIShsDezHSOTBoM5yd0wPfMOea0rXS6rCFScow&per_page=30&query=${query}`
  );
  return (
    <>
      <div className="pb-6 w-full flex items-center justify-start">
        {isLoading ? (
          <h1 className="text-xl sm:text-3xl">Loading...</h1>
        ) : (
          <h1 className="text-xl sm:text-3xl">
            Results for{" "}
            <span className="text-xl sm:text-3xl text-success italic">
              {query}
            </span>
          </h1>
        )}
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {isLoading ? (
          <Loader item={data.length || 30} />
        ) : (
          data.map((photo) => {
            return (
              <Link to={`/photoinfo/${photo.id}`} key={photo.id}>
                <ImagesCard photo={photo} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
}

export default Home;
