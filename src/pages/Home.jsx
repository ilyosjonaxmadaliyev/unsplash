import axios from "axios";
import ImagesCard from "../components/ImagesCard";
import Loader from "../components/Loader";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Home() {
  const { query } = useSelector((state) => state.photoState);

  const url = `https://api.unsplash.com/search/photos?client_id=zcedffIShsDezHSOTBoM5yd0wPfMOea0rXS6rCFScow&per_page=30&query=${query}`;
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const customFetch = async () => {
      try {
        setIsLoading(true);
        const request = await axios(url);
        setData(request.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    customFetch();
  }, [url]);

  return (
    <>
      <div className="pb-6 w-full flex items-center justify-start">
        {isLoading ? (
          <h1 className="text-xl sm:text-3xl">Loading...</h1>
        ) : (
          <h1 className="text-xl sm:text-3xl">
            Results for
            <span className="text-xl sm:text-3xl text-success italic ml-2">
              {query}
            </span>
          </h1>
        )}
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {isLoading ? (
          <Loader item={data?.length || 30} />
        ) : (
          data?.map((photo) => {
            return <ImagesCard photo={photo} key={photo.id} />;
          })
        )}
      </div>
    </>
  );
}

export default Home;
