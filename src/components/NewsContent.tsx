import Image from "next/image";
import SubHeading from "./SubHeading";
import ChevronDown from "@/icon/ChevronDown";
import ChevronLeft from "@/icon/ChevronLeft";
import ChevronRight from "@/icon/ChevronRight";
import Card from "./Card";
import CardPopular from "./CardPopular";

export default function NewsContent() {
  return (
    <div className="grid grid-cols-[1fr_30rem] gap-x-5.5 my-16">
      <div className="w-full flex flex-col gap-y-24">
        <div className="w-full flex flex-col gap-y-8">
          <h1 className="text-gray-1 font-semibold font-sora text-4xl">
            Pj. Gubernur Adhy Tekankan Pelayanan Berkualitas saat Sharing
            Session di RSUD Dr. Soetomo
          </h1>
          <span className="flex items-center gap-x-3 text-dark-400 font-inter font-medium">
            <span className="font-semibold text-brand-color">Politik</span>
            <div className="size-1 rounded-full bg-[#D9D9D9]" />
            22 Jan 2024
          </span>
          <figure className="flex flex-col gap-y-1.5">
            <Image
              src={"/img/headline-ex.png"}
              alt="1"
              width={400}
              height={400}
              className="object-cover rounded-2xl w-full"
            />
            <figcaption className="text-dark-200 font-medium font-inter">
              Rumput GBK tidak kunjung bagus, Timnas Indonesia bisa pindah
              kandang. (CNN Indonesia/Adhi Wicaksono)
            </figcaption>
          </figure>
        </div>

        <div className="flex flex-col gap-y-8">
          <p className="font-medium font-inter text-dark-400">
            Jakarta, CNN Indonesia --Ketua Badan Tim Nasional (BTN) PSSI
            Sumardji merespons peluang Timnas Indonesia pindah dari Stadion
            Utama Gelora Bung Karno (GBK) apabila lolos ke putaran ketiga
            Kualifikasi Piala Dunia 2026. Akhir-akhir ini rumput lapangan
            Stadion GBK yang jadi markas Indonesia dalam babak kedua Kualifikasi
            Piala Dunia 2026 kerap bermasalah. Pada pertandingan kandang pertama
            melawan Vietnam, Maret lalu, rumput GBK rusak parah. PPKGBK selalu
            pengelola pun mendapat kritik deras.
          </p>
          <p className="font-medium font-inter text-dark-400">
            Acara-acara di luar sepak bola itu kerap membuat kondisi rumput
            tidak sehat dan tidak terlihat bagus saat pertandingan, khususnya
            laga Timnas Indonesia. Sampai saat melawan Irak, rumput GBK tidak
            terlihat sempurna meskipun kondisinya lebih bagus dibanding lawan
            Vietnam. Opsi pindah kandang pun muncul.
          </p>
          <p className="font-medium font-inter text-dark-400">
            {
              'Nanti kami akan  sampaikan [rencana pindah dari GBK]," ujar Sumardji saat ditanya  kemungkinan menggunakan stadion lain di putaran ketiga kualifikasi. Sumardji tidak membantah kondisi rumput GBK yang masih kurang bagus  dalam duel Indonesia vs Irak. PSSI pun berharap PPKGBK bisa lebih  memperhatikan kondisi rumput untuk pertandingan Skuad Garuda. "Kami sampai saat ini sudah telepon dengan pengelola GBK karena kondisi  rumput kemarin kurang bagus, kami memohon ke pihak GBK supaya  betul-betul disiapkan dan diperhatikan kondisi rumput," tutur Sumardji. "Kalau dilihat-lihat sepertinya kondisi rumput GBK kayaknya stres itu,  sehingga dengan kondisi itu akan memengaruhi, tadi saya telepon supaya  diperhatikan," kata Sumardji menambahkan'
            }
          </p>
        </div>

        <div className="flex flex-col gap-y-6 w-full">
          <SubHeading>Komentar</SubHeading>
          <div className="flex flex-col gap-y-6 justify-end w-full">
            <div className="flex flex-col gap-y-4 w-full">
              <div className="flex gap-x-4 w-full shadow-md bg-white px-4 pt-2 pb-8">
                <Image
                  src={"/img/profile-1.jpg"}
                  alt="Profile User"
                  width={50}
                  height={50}
                  className="aspect-square w-auto object-cover rounded-lg self-start"
                />
                <div className="flex flex-col w-full gap-y-8">
                  <textarea
                    className="resize-none bg-white border px-2.5 py-2 border-surface-soft w-full focus:ring-1 focus:ring-brand-color focus:outline-none rounded-lg placeholder:text-disable font-inter text-dark-800"
                    placeholder="Apa yang ingin anda tanyakan?"
                    rows={8}
                  />
                  <button className="text-white self-start font-medium font-inter bg-brand-color rounded-lg py-3.5 px-5">
                    Kirim
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-y-4 w-full shadow-md bg-white px-4 py-2">
                <div className="flex gap-x-4 w-full">
                  <Image
                    src={"/img/profile-2.png"}
                    alt="Profile User"
                    width={50}
                    height={50}
                    className="aspect-square w-auto object-cover rounded-lg self-start"
                  />
                  <div className="flex flex-col w-full gap-y-4">
                    <div className="flex flex-col gap-y-3">
                      <span className="flex items-center gap-x-3 font-inter font-medium text-sm text-dark-400">
                        UJANG YUSMEIDI S.P., M.Agr.
                        <div className="size-1 rounded-full bg-[#D9D9D9]" />
                        <span className="text-dark-200 text-sm">
                          28 Mar 2024 11:15
                        </span>
                      </span>
                      <p className="font-inter text-gray-1">
                        Mohon maaf, apakah sertifikatnya sudah tidak dapat
                        diunduh ? Karena saya mau download ada konfirmasi bahwa
                        TOTP aktivasi salah Bagaimana ya solusinya ?
                      </p>
                      <button className="font-medium self-start cursor-pointer hover:underline font-inter text-brand-color">
                        Balas
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-x-4 w-full ms-20">
                  <Image
                    src={"/img/profile-3.png"}
                    alt="Profile User"
                    width={50}
                    height={50}
                    className="aspect-square w-auto object-cover rounded-lg self-start"
                  />
                  <div className="flex flex-col w-full gap-y-4">
                    <div className="flex flex-col gap-y-3">
                      <span className="flex items-center gap-x-3 font-inter font-medium text-sm text-dark-400">
                        DINA RIKHA RIYANAWATI, S.Pd{" "}
                        <div className="size-1 rounded-full bg-[#D9D9D9]" />
                        <span className="text-dark-200 text-sm">
                          28 Mar 2024 11:15
                        </span>
                      </span>
                      <p className="font-inter text-gray-1">
                        saya mengunduh sertifikatnya kok juga belumbisa
                      </p>
                      <button className="font-medium self-start cursor-pointer hover:underline font-inter text-brand-color">
                        Balas
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center px-4">
            <div className="flex items-center gap-x-4">
              <span className="text-gray-1 font-inter">Item per page</span>
              <button className="flex items-center gap-x-3 py-1 px-2 bg-transparent border border-surface-soft cursor-pointer">
                5 <ChevronDown />
              </button>
              <span className="text-gray-1 font-inter">of 200</span>
            </div>
            <div className="flex gap-x-4 font-inter">
              <button className="cursor-pointer hover:bg-dark-8 transition-colors text-dark-400 flex items-center justify-center size-8 rounded-lg">
                <ChevronLeft />
              </button>
              <button className="cursor-pointer hover:bg-dark-8 transition-colors flex items-center justify-center size-8 rounded-lg text-brand-color">
                1
              </button>
              <button className="cursor-pointer hover:bg-dark-8 transition-colors flex items-center justify-center size-8 rounded-lg text-dark-400">
                2
              </button>
              <button className="cursor-pointer hover:bg-dark-8 transition-colors text-dark-400 flex items-center justify-center size-8 rounded-lg">
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-6">
          <div className="flex items-center justify-between">
            <div
              className={
                "w-full ps-4 relative before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-brand-color before:rounded-full"
              }
            >
              <h4 className="font-bold text-2xl font-nunitoSans text-black">
                Berita Terkait
              </h4>
            </div>
            <button className="border cursor-pointer border-brand-color hover:bg-brand-color hover:text-white transition-colors py-3.5 rounded-lg w-40 bg-secondary font-medium font-inter text-brand-color">
              Lihat Semua
            </button>
          </div>
          <div className="grid grid-cols-3 gap-9">
            {Array.from({ length: 3 }).map((_, i) => (
              <Card key={i} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full">
        <SubHeading>Berita Terpopuler</SubHeading>
        <div className="px-4 flex flex-col gap-y-4 mt-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <CardPopular key={i} no={i + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}
