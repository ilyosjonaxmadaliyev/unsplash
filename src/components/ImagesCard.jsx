import { FcDownload, FcList } from "react-icons/fc";

function ImagesCard({ photo }) {
  return (
    <div className="bg-slate-600 p-1">
      <div className="relative flex items-center justify-center h-auto w-full group hover:bg-gradient-to-r from-gray-500 to-[#075e37]">
        <img
          src={photo.urls.full}
          alt={photo.description}
          className="group-hover:opacity-50 h-60 object-cover w-full"
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex items-center gap-2 p-2 cursor-pointer text-lg">
            <a href={photo.urls.full} target="blank">
              <FcList size={30} />
            </a>
            <a href={photo.urls.small_s3} download>
              <FcDownload size={30} />
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 pt-1">
        <img
          src={photo.user.profile_image.large}
          alt=""
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h4 className="text-black">{photo.user.name}</h4>
          <h5 className="text-zinc-300">like - {photo.likes}</h5>
        </div>
      </div>
    </div>
  );
}

export default ImagesCard;
