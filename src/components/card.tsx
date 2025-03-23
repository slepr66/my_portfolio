import Profile from "./profile";
import Typewriter from "./typewriter";
import Icons from "./icons";

export default function Card() {
  return (
    <div className="flex gap-8 p-8 w-[700px] h-[500px] bg-[#171717] rounded-3xl drop-shadow-md">
      <Profile />
      <div className="w-full font-bold text-3xl text-gray-700 text-center flex flex-col gap-2">
        <Typewriter text="AHMED IYAS SHINAN" speed={100} />
        <div className="justify center">
          <Icons />
        </div>
      </div>
    </div>
  );
}
