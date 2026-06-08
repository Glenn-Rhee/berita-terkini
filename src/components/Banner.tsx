"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const SLIDES = [
  {
    id: 1,
    title: "Petualangan Edukatif bersama Malang Mbois City Tour!",
    description: "Petualangan Edukatif bersama Malang Mbois City Tour!",
    image: "/img/img-banner.png",
  },
  {
    id: 2,
    title: "Petualangan Edukatif bersama Malang Mbois City Tour!",
    description: "Petualangan Edukatif bersama Malang Mbois City Tour!",
    image: "/img/img-banner.png",
  },
  {
    id: 3,
    title: "Petualangan Edukatif bersama Malang Mbois City Tour!",
    description: "Petualangan Edukatif bersama Malang Mbois City Tour!",
    image: "/img/img-banner.png",
  },
];

const AUTO_PLAY_INTERVAL = 8000;
const DRAG_THRESHOLD = 50;

export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((index: number) => {
    setActiveIndex((index + SLIDES.length) % SLIDES.length);
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, AUTO_PLAY_INTERVAL);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  // Mouse drag
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setDragOffset(e.clientX - dragStartX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -DRAG_THRESHOLD) {
      goTo(activeIndex + 1);
      resetTimer();
    } else if (dragOffset > DRAG_THRESHOLD) {
      goTo(activeIndex - 1);
      resetTimer();
    }
    setDragOffset(0);
  };

  // Touch drag
  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStartX(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setDragOffset(e.touches[0].clientX - dragStartX);
  };

  const handleTouchEnd = () => {
    if (dragOffset < -DRAG_THRESHOLD) {
      goTo(activeIndex + 1);
      resetTimer();
    } else if (dragOffset > DRAG_THRESHOLD) {
      goTo(activeIndex - 1);
      resetTimer();
    }
    setDragOffset(0);
  };

  return (
    <section className="flex-col gap-y-8 my-16 w-full hidden md:flex">
      <div
        className="relative overflow-hidden rounded-3xl select-none"
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(calc(${-activeIndex * 100}% + ${dragOffset}px))`,
            transition: isDragging ? "none" : "transform 500ms ease-in-out",
          }}
        >
          {SLIDES.map((slide) => (
            <div
              key={slide.id}
              className="min-w-full h-110 grid grid-cols-[1fr_1fr] items-center bg-banner px-12"
            >
              <div className="flex flex-col h-full justify-center w-md gap-y-4">
                <h2 className="font-monserrat font-semibold text-white text-5xl">
                  {slide.title}
                </h2>
                <p className="font-monserrat text-white font-medium text-xl">
                  {slide.description}
                </p>
              </div>
              <Image
                src={slide.image}
                alt="Banner Picture"
                width={500}
                height={500}
                className="object-cover w-full pointer-events-none"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-x-4 justify-center">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              goTo(i);
              resetTimer();
            }}
            className={`rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "size-2.5 bg-primary-500"
                : "size-2.5 bg-[#ADB5BD]"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
