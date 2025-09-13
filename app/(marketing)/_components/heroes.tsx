import Image from "next/image"

export const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[400px] h-[400px] sm:w-[350px] sm:h-[350] md:h-[400px] md:w-[400px]">
          <Image
            src="/doc.png"
            fill
            className="object-contain dark:hidden"
            alt="Documents"
          />
          <Image
            src="/docwhite.png"
            fill
            className="object-contain hidden dark:block"
            alt="Documents"
          />
        </div>
        <div className="relative h-[400px] w-[400px] hidden md:block">
          <Image
            src="/bookwhite.png"
            fill
            className="object-contain dark:hidden"
            alt="Reading"
          />
          <Image
            src="/book.png"
            fill
            className="object-contain hidden dark:block"
            alt="Reading"
          />
        </div>
      </div>
    </div>
  );
}