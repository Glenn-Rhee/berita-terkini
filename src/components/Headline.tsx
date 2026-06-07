import ArrowuprightIcon from "@/icon/ArrowuprightIcon";
import CalendarIcon from "@/icon/CalendarIcon";
import ChevronLeft from "@/icon/ChevronLeft";
import ChevronRight from "@/icon/ChevronRight";
import Image from "next/image";
import Link from "next/link";

export default function Headline() {
  return (
    <main className="h-[50dvh] flex flex-col items-center gap-y-16 w-full my-6">
      <div className="flex justify-between w-full">
        <div className="font-inter flex flex-col gap-y-3 w-lg">
          <h6 className="text-dark-400 font-semibold">Headline</h6>
          <h1 className="font-nunitoSans font-bold text-4xl text-gray-1">
            Respons PSSI Soal Opsi Pindah dari GBK jika Lolos Babak 3
            Kualifikasi
          </h1>
          <p className="text-gray-2">
            Ketua Badan Tim Nasional (BTN) PSSI Sumardji merespons peluang
            Timnas Indonesia pindah dari Stadion Utama Gelora Bung Karno (GBK)
            apabila lolos ke putaran ketiga Kualifikasi Piala Dunia 2026.
          </p>
          <span className="text-sm flex items-center gap-x-2 font-medium text-dark-400">
            <CalendarIcon /> 22 Januari 2024
          </span>
          <Link
            href={"/detail"}
            target="_blank"
            className="text-brand-color font-medium flex items-center gap-x-2 mt-4"
          >
            Baca Selengkapnya <ArrowuprightIcon />
          </Link>
        </div>
        <Image
          src={"/headline-ex.png"}
          alt="Headline Image"
          width={500}
          height={417}
          loading="eager"
          className="object-cover rounded-[20px] aspect-video w-auto h-auto"
        />
      </div>
      <div className="flex items-center gap-x-4 font-inter">
        <button>
          <ChevronLeft />
        </button>
        <span className="text-dark-400 font-medium text-sm">1</span>
        <span className="text-dark-400 font-medium text-sm">dari</span>
        <span className="text-dark-400 font-medium text-sm">5</span>
        <button>
          <ChevronRight />
        </button>
      </div>
    </main>
  );
}
