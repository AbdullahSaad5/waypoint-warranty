import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./products-carousel.css";
import productDetails from "@/app/productDetails";
import ProductCard from "../ProductCard";
import { createSlug } from "@/app/utils/createSlug";
import { useRouter } from "next/navigation";

const ProductsCarousel = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
  });
  const router = useRouter();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {
        if (window.innerWidth < 768) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      });
    };
  }, []);

  const totalPages = Math.ceil(isMobile ? productDetails.length / 3 : productDetails.length / 6);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {Array.from({ length: totalPages }, (_, i) => (
            <div className="embla__slide grid place-items-center" key={i}>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 md:col-span-1 md:gap-x-16 lg:gap-x-10 lg:gap-y-10 md:gap-y-6 gap-y-5 lg:col-span-1 my-12">
                {productDetails
                  .slice(i * (isMobile ? 3 : 6), i * (isMobile ? 3 : 6) + (isMobile ? 3 : 6))
                  .map((product, index: number) => (
                    <ProductCard
                      key={product.number}
                      number={product.number}
                      icon={product.icon}
                      title={product.title}
                      onClick={() => router.push(`/products/${createSlug(product.title)}`)}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-16">
        <button className="embla__prev" onClick={scrollPrev}>
          <svg width="40px" height="40px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>arrow-left-circle</title>
            <desc>Created with Sketch Beta.</desc>
            <defs></defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Icon-Set" transform="translate(-256.000000, -1087.000000)" fill="#128949">
                <path
                  d="M279,1102 L268.414,1102 L272.536,1097.88 C272.926,1097.49 272.926,1096.86 272.536,1096.46 C272.145,1096.07 271.512,1096.07 271.121,1096.46 L265.464,1102.12 C265.225,1102.36 265.15,1102.69 265.205,1103 C265.15,1103.31 265.225,1103.64 265.464,1103.88 L271.121,1109.54 C271.512,1109.93 272.145,1109.93 272.536,1109.54 C272.926,1109.15 272.926,1108.51 272.536,1108.12 L268.414,1104 L279,1104 C279.552,1104 280,1103.55 280,1103 C280,1102.45 279.552,1102 279,1102 L279,1102 Z M272,1117 C264.268,1117 258,1110.73 258,1103 C258,1095.27 264.268,1089 272,1089 C279.732,1089 286,1095.27 286,1103 C286,1110.73 279.732,1117 272,1117 L272,1117 Z M272,1087 C263.164,1087 256,1094.16 256,1103 C256,1111.84 263.164,1119 272,1119 C280.836,1119 288,1111.84 288,1103 C288,1094.16 280.836,1087 272,1087 L272,1087 Z"
                  id="arrow-left-circle"
                ></path>
              </g>
            </g>
          </svg>
        </button>
        <button className="embla__next" onClick={scrollNext}>
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="transform rotate-180"
          >
            <title>arrow-left-circle</title>
            <desc>Created with Sketch Beta.</desc>
            <defs></defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Icon-Set" transform="translate(-256.000000, -1087.000000)" fill="#128949">
                <path
                  d="M279,1102 L268.414,1102 L272.536,1097.88 C272.926,1097.49 272.926,1096.86 272.536,1096.46 C272.145,1096.07 271.512,1096.07 271.121,1096.46 L265.464,1102.12 C265.225,1102.36 265.15,1102.69 265.205,1103 C265.15,1103.31 265.225,1103.64 265.464,1103.88 L271.121,1109.54 C271.512,1109.93 272.145,1109.93 272.536,1109.54 C272.926,1109.15 272.926,1108.51 272.536,1108.12 L268.414,1104 L279,1104 C279.552,1104 280,1103.55 280,1103 C280,1102.45 279.552,1102 279,1102 L279,1102 Z M272,1117 C264.268,1117 258,1110.73 258,1103 C258,1095.27 264.268,1089 272,1089 C279.732,1089 286,1095.27 286,1103 C286,1110.73 279.732,1117 272,1117 L272,1117 Z M272,1087 C263.164,1087 256,1094.16 256,1103 C256,1111.84 263.164,1119 272,1119 C280.836,1119 288,1111.84 288,1103 C288,1094.16 280.836,1087 272,1087 L272,1087 Z"
                  id="arrow-left-circle"
                ></path>
              </g>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductsCarousel;
