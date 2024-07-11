import Icon1 from "@/public/icon-1.png";
import Icon2 from "@/public/icon-2.png";
import Icon3 from "@/public/icon-3.png";
import Icon4 from "@/public/icon-4.png";
import Icon5 from "@/public/icon-5.png";
import Icon6 from "@/public/icon-6.png";
import Icon7 from "@/public/icon-7.png";
import Icon8 from "@/public/icon-8.png";
import Icon9 from "@/public/icon-9.png";
import Icon10 from "@/public/icon-10.png";
import Icon11 from "@/public/icon-11.png";
import Icon12 from "@/public/icon-12.png";
import ProductImage1 from "@/public/product-image1.png";
import ProductImage2 from "@/public/product-image2.png";
import ProductImage3 from "@/public/product-image3.png";
import Image, { StaticImageData } from "next/image";

type Products = {
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

const productDetails: Products[] = [
  {
    number: "01",
    icon: <Image src={Icon1} alt="icon-1" className="w-16" />,
    title: " Investment Advantage",
    pageTitle: "Vehicle Service Contract",
    description:
      "For new and pre-owned vehicles, Certified Pre-Owned, and Commercial Usage",
    coverageHighlights: [
      "Lift Kit coverage available",
      "Four levels of coverage: Platinum, Gold Plus, Gold, Powertrain",
      "Deductible options of $0, $50 disappearing, Nationwide",
      "$100, $250 (pre-owned only) coverage",
      "Credit Card payments available for out-of-network dealers",
      "Towing expenses covered up to $75",
      "Emergency Travel Expense Reimbursement up to $375",
      "Covers seals & gaskets on all levels of coverage",
      "Credit Card payments available for out-of-network dealers",
      "Insured by Virginia Surety, A-vA.M. Best Rated",
    ],
    eligibility: [
      "Available on new and used vehicles",
      "Mileage up to 140,000",
      "Available on all Asian, Domestics and European vehicles",
      "Term limits range from 6/6,000 to 120/125,00",
    ],
    images: [ProductImage1, ProductImage2, ProductImage3],
    videoLink:
      "https://www.youtube.com/watch?v=8MygUVxCnH0&pp=ygUUY2FyIGluc3BlY3Rpb24gdmlkZW8%3D",
  },
  {
    number: "02",
    icon: <Image src={Icon2} alt="icon-2" className="w-20 h-12" />,
    title: " Investment Advantage",
  },
  {
    number: "03",
    icon: <Image src={Icon3} alt="icon-3" className="w-16 h-12" />,
    title: " Investment Advantage",
  },
  {
    number: "04",
    icon: <Image src={Icon4} alt="icon-4" className="w-16" />,
    title: " Investment Advantage",
  },
  {
    number: "05",
    icon: <Image src={Icon5} alt="icon-5" className="w-16" />,
    title: " Investment Advantage",
  },
  {
    number: "06",
    icon: <Image src={Icon6} alt="icon-6" className="w-14 h-14 mt-1" />,
    title: " Investment Advantage",
  },
  {
    number: "07",
    icon: <Image src={Icon7} alt="icon-7" className="w-16 h-14" />,
    title: " Investment Advantage",
  },
  {
    number: "08",
    icon: <Image src={Icon8} alt="icon-8" className="w-16 h-14" />,
    title: " Investment Advantage",
  },
  {
    number: "09",
    icon: <Image src={Icon9} alt="icon-9" className="w-16 h-14" />,
    title: " Investment Advantage",
  },
  {
    number: "10",
    icon: <Image src={Icon10} alt="icon-10" className="w-16 h-14" />,
    title: " Investment Advantage",
  },
  {
    number: "11",
    icon: <Image src={Icon11} alt="icon-11" className="w-16 h-14" />,
    title: " Investment Advantage",
  },
  {
    number: "12",
    icon: <Image src={Icon12} alt="icon-12" className="w-16 h-14" />,
    title: " Investment Advantage",
  },
];

export default productDetails;
