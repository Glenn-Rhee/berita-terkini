import BrandIcon from "@/icon/brand-icon";
import Container from "./Container";
import Link from "next/link";
import YoutubeIcon from "@/icon/yt-icon";
import InstagramIcon from "@/icon/ig-icon";
import FacebookIcon from "@/icon/fb-icon";
import { menuNavbar } from "@/lib/menuNavbar";
import SendIcon from "@/icon/send-icon";

export default function Footer() {
  return (
    <footer className="w-full bg-dark-600">
      <Container className="flex gap-x-16 justify-between text-white">
        <div className="flex flex-col gap-y-16">
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-x-4">
              <BrandIcon fill="white" />
              <h2 className="font-semibold font-poppins text-3xl text-white">
                Berita Terkini
              </h2>
            </div>
            <span className="font-nunitoSans text-lg text-invert">
              &copy; 2023 Berita kini. All Rights Reserved.
            </span>
          </div>
          <div className="flex flex-col gap-y-4">
            <span className="font-semibold text-[22px] font-nunitoSans">
              Ikuti Kami
            </span>
            <div className="flex items-center gap-x-6">
              <Link
                href={"https://youtube.com/"}
                target="_blank"
                className="size-10 rounded-xl bg-surface-soft p-2 flex items-center justify-center"
              >
                <YoutubeIcon />
              </Link>
              <Link
                href={"https://instagram.com/"}
                target="_blank"
                className="size-10 rounded-xl bg-surface-soft p-2 flex items-center justify-center"
              >
                <InstagramIcon />
              </Link>
              <Link
                href={"https://instagram.com/"}
                target="_blank"
                className="size-10 rounded-xl bg-surface-soft p-2 flex items-center justify-center"
              >
                <FacebookIcon />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-4">
          <h6 className="font-nunitoSans text-[22px] font-semibold text-white">
            Telusuri
          </h6>
          <ul className="flex flex-col gap-y-4">
            {menuNavbar.map((menu) => (
              <li key={menu.text}>
                <Link
                  href={menu.href}
                  className="hover:underline font-medium text-invert font-inter"
                >
                  {menu.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-y-4">
          <h6 className="font-nunitoSans text-[22px] font-semibold text-white">
            Bantuan
          </h6>
          <ul className="flex flex-col gap-y-4">
            <li>
              <Link
                href={"#"}
                className="hover:underline font-medium text-invert font-inter"
              >
                Kontak Kami
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="hover:underline font-medium text-invert font-inter"
              >
                Laporan Pembajakan
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="hover:underline font-medium text-invert font-inter"
              >
                Kebijakan
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-5.5">
          <h6 className="font-nunitoSans text-[22px] font-semibold text-white">
            Berlangganan Berita Terbaru
          </h6>
          <div className="flex w-84.75 h-16 pe-4 items-center bg-white boder border-surface-soft rounded-lg">
            <input
              type="text"
              className="
                border-none
                outline-none
                ring-0
                focus:ring-0
                focus:outline-none
                focus:border-none
                shadow-none
                focus:shadow-none
                h-full w-full
                px-4
                rounded-lg
                m-0
                placeholder:text-disable
                font-inter
                text-dark-800
            "
              placeholder="Masukkan Email"
            />
            <button className="size-10 rounded-md p-3 flex items-center bg-brand-color justify-center">
              <SendIcon />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
