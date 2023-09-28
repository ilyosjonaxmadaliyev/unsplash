import { useSelector } from "react-redux";
import useAxios from "../hooks/useAxios";
import { useParams } from "react-router-dom";

function PhotoInfo() {
  const { id } = useParams();
  const { query } = useSelector((state) => state.photoState);
  const { data } = useAxios(
    `https://api.unsplash.com/search/photos?client_id=zcedffIShsDezHSOTBoM5yd0wPfMOea0rXS6rCFScow&per_page=1&query=${query}&slug=${id}`
  );
console.log(data);
  return (
    <>
      <div className="max-w-[1000px] mx-auto">
        <div className="carousel h-[570px]">
          <div id="item1" className="carousel-item w-full">
            <img src={data[0]?.urls?.full} className="w-full object-cover" />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src={data[0]?.urls?.raw}
              className="w-full my-auto h-[450px]"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img src={data[0]?.urls?.regular} className="mx-auto w-[500px]" />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src={data[0]?.urls?.small}
              className="mx-auto my-auto w-80 h-80"
            />
          </div>
          <div id="item6" className="carousel-item w-full">
            <img
              src={data[0]?.urls?.thumb}
              className="mx-auto my-auto w-60 h-80"
            />
          </div>
        </div>
        <div className="grid grid-cols-3  sm:grid-cols-6 w-full py-2 gap-2 mx-auto">
          <a href="#item1" className="btn btn-sm sm:text-xs">
            full
          </a>
          <a href="#item2" className="btn btn-sm sm:text-xs">
            raw
          </a>
          <a href="#item3" className="btn btn-sm sm:text-xs">
            regular
          </a>
          <a href="#item4" className="btn btn-sm sm:text-xs">
            small
          </a>
          <a href="#item6" className="btn btn-sm sm:text-xs">
            thumb
          </a>
          <a href="#item5" download={"photo"} className="btn btn-sm sm:text-xs">
            download
          </a>
        </div>
      </div>
    </>
  );
}

export default PhotoInfo;
