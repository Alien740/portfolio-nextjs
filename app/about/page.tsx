import { BlogPosts } from "app/components/posts";
import Image from "next/image";
import img from 'public/pro pic.jpg'
export default function about() {

  return (
    <section>
      <div classNames="flex gap-x-4 items-center flex-row mb-10">
     <Image src={img} alt='img'/>
        <div>
          <p className="text-xl font-semibold">About Doe</p>
          <p className="text-lg text-gray-400">Student at SLIIT</p>
        </div>
      </div>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Welcome! 👋
      </h1>
      <p className="mb-4">
       Click for Hacknest
      </p>
    </section>
  );
}
