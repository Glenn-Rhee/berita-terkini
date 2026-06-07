import Image from "next/image";

export default function Banner() {
  return (
    <section className="flex flex-col gap-y-8 my-16 w-full">
      <div className="w-full h-110 grid grid-cols-[1fr_1fr] items-center bg-banner rounded-3xl px-12">
        <div className="flex flex-col h-full justify-center w-md gap-y-4">
          <h2 className="font-monserrat font-semibold text-white text-5xl">
            Petualangan Edukatif bersama Malang Mbois City Tour!
          </h2>
          <p className="font-monserrat text-white font-medium text-xl">
            Petualangan Edukatif bersama Malang Mbois City Tour!
          </p>
        </div>
        <Image
          src={"/img/img-banner.png"}
          alt="Banner Picture"
          width={500}
          height={500}
          className="object-cover w-full"
        />
      </div>
      <div className="flex items-center gap-x-4 justify-center">
        <div className="size-2.5 rounded-full bg-[#ADB5BD]" />
        <div className="size-2.5 rounded-full bg-primary-500" />
        <div className="size-2.5 rounded-full bg-[#ADB5BD]" />
      </div>
    </section>
  );
}
