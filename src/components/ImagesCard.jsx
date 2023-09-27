import { FcList } from "react-icons/fc";

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
          <p className="text-center p-2 cursor-pointer text-lg">
            <FcList size={30} />
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 pt-1">
        <img
          src={photo.user.profile_image.large}
          alt=""
          className="w-14 h-14 rounded-full"
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
