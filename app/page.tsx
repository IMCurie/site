import Image from "next/image";
import avator from "../public/avator.jpg";

export default function Home() {
  return (
    <section className="flex flex-col mt-8">
      <div className="flex flex-row items-center space-x-4 mb-8">
        <h1 className="font-serif font-medium text-xl">IMCurie</h1>
        <div className="relative w-10 h-10">
          <Image
            src={avator}
            alt="User avatar"
            className="rounded-full object-cover"
            fill
            quality={100}
          />
        </div>
      </div>
      <p className="text-wrap text-gray-500">
        I'm a full-stack developer with an endless curiosity for emerging
        technologies. React makes my heart skip a beat, and Tailwind CSS is my
        faithful companion in crafting pixel-perfect designs.
      </p>
    </section>
  );
}
