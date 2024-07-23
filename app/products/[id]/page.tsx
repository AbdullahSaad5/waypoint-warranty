"use client";

import productDetails from "@/app/productDetails";
import Image, { StaticImageData } from "next/image";
import ProductCard from "@/app/components/ProductCard";
import { useEffect, useState } from "react";
import { notFound, useRouter } from "next/navigation";
import { Inter } from "next/font/google";
import { createSlug } from "@/app/utils/createSlug";

const inter = Inter({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  preload: true,
});

// Define the structure of a Product
type Products = {
  id?: number;
  number: string;
  icon: JSX.Element;
  title: string;
  pageTitle?: string;
  description?: string;
  coverageHighlights?: string[];
  eligibility?: string[];
  videoLink?: string;
  images?: StaticImageData[];
};

const SpecificProduct = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const slug: string = params.id;
  const product = productDetails.find((product) => createSlug(product.title) === slug) as Products | undefined;
  const pageTitle = product?.pageTitle;
  const words = pageTitle?.split(" ") || [];
  const [relatedProducts, setRelatedProducts] = useState<Products[]>([]);

  useEffect(() => {
    // Filter out the current product
    const filteredProducts = productDetails.filter((product) => product.title !== pageTitle);

    // Shuffle the filtered products
    const shuffledProducts = filteredProducts.sort(() => 0.5 - Math.random());

    // Select the first three products
    const selectedProducts = shuffledProducts.slice(0, 3);

    setRelatedProducts(selectedProducts);
  }, [pageTitle]);

  if (!product) {
    return notFound();
  }

  return (
    <>
      <main className="flex flex-col items-center lg:flex-row justify-center lg:items-start lg:gap-x-10 mx-5 lg:mx-24 xl:28 2xl:30 my-5">
        <div className="flex lg:justify-start lg:items-start items-center justify-center flex-col">
          <h1>
            <div className="font-bold lg:text-left text-center text-primary">
              {words?.length > 2 ? (
                <>
                  <p className="text-3xl md:text-4xl lg:text-5xl">{words?.slice(0, 2).join(" ")}</p>{" "}
                  <span className="text-2xl md:text-3xl lg:text-4xl">{words[2]}</span>{" "}
                  {words.length > 3 && <p className="text-2xl md:text-3xl lg:text-4xl ">{words?.slice(3).join(" ")}</p>}
                </>
              ) : (
                pageTitle
              )}
            </div>
          </h1>
          <div className="m-4 px-2 min-w-[350px]">
            <p className="text-[#525151] text-sm lg:text-left text-center">{product.description}</p>
          </div>
          <div>
            <h4
              className={`font-bold text-blue lg:text-2xl md:text-xl xl:text-2xl 2xl:text-2xl text-lg ml-6 ${inter.className}`}
            >
              Coverage Highlights
            </h4>
            <div className="m-4 px-2 min-w-[350px] sm:w-[300px]">
              <ul className="custom-list">
                {product.coverageHighlights?.map((highlight: string, index: number) => (
                  <li key={index} className={`text-sm my-2 ${inter.className}`}>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h4
              className={`font-bold text-blue lg:text-2xl md:text-xl xl:text-2xl 2xl:text-2xl text-lg ml-6 ${inter.className}`}
            >
              Eligibility
            </h4>
            <div className="lg:m-4 px-2 min-w-[350px] sm:w-[300px] mx-4">
              <ul className="custom-list">
                {product.eligibility?.map((highlight: string, index: number) => (
                  <li key={index} className={`text-sm my-3 ${inter.className}`}>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex lg:justify-start lg:items-end justify-center items-center flex-col gap-y-8 my-5">
          <div className="">
            {product && product.images && product.images[0] && (
              <Image
                src={product.images[0]}
                alt="Product Image 1"
                className="lg:w-[800px] lg:h-[340px] md:w-[400px] md:h-[220px] w-[300px] h-[150px] object-cover"
              />
            )}
          </div>

          <div className="flex lg:justify-start lg:items-start justify-center items-center flex-row gap-x-6">
            <div>
              {product && product.images && product.images[1] && (
                <Image
                  src={product.images[1]}
                  alt="Product Image 2"
                  className="lg:w-[340px] lg:h-[320px] md:w-[240px] md:h-[200px] w-[120px] h-[240px] object-cover"
                />
              )}
            </div>
            <div>
              {product && product.images && product.images[2] && (
                <Image
                  src={product.images[2]}
                  alt="Product Image 3"
                  className="lg:w-[340px] lg:h-[320px] md:w-[240px] md:h-[200px] w-[120px] h-[240px] object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </main>
      <section className="flex flex-col justify-center items-center my-5 mx-5">
        <h3 className="lg:text-4xl text-3xl text-primary font-medium my-5 lg:w-[600px] w-[300px] min-h-max text-center">
          About Product
        </h3>
        <div className="my-5">
          <iframe
            src="https://www.youtube.com/embed/8MygUVxCnH0"
            title="How to Perform a Vehicle Inspection"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="lg:w-[1000px] lg:h-[500px] min-w-[300px] min-h-[275px]"
          ></iframe>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center my-5 lg:mx-8">
        <h3 className="lg:text-4xl text-3xl text-primary font-medium my-5 min-w-[250px] lg:min-w-[600px] text-center">
          Related Products
        </h3>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-y-8 mx-5 lg:gap-x-[3%] my-8">
          {relatedProducts.map((relatedProduct: Products, index: number) => (
            <ProductCard
              key={index}
              number={relatedProduct.number}
              icon={relatedProduct.icon}
              title={relatedProduct.title}
              onClick={() => router.push(`/products/${createSlug(relatedProduct.title)}`)}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default SpecificProduct;
