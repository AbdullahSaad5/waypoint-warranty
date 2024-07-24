"use client";

import { useState } from "react";
import ContactBanner from "@/public/contact-banner.png";
import Image from "next/image";
import MapImage from "@/public/lancaster-map.png";
import { sendEmail } from "@/app/utils/email";
import { toast } from "react-toastify";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  preload: true,
});

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    website: "",
    comments: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    if (name === "name") {
      if (!/^[a-zA-Z\s]*$/.test(value)) {
        return; // Do not update state if city contains non-alphabetic characters
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const value = input.value;
    const formattedValue = formatPhoneNumber(value);

    if (formattedValue !== value) {
      input.value = formattedValue;
    }
  };

  const formatPhoneNumber = (value: string) => {
    return value
      .replace(/\D/g, "") // Remove all non-digit characters
      .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3") // Format as (123) 456-7890
      .slice(0, 14); // Limit the length to 14 characters
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await sendEmail({
        to: "info@waypointwarrantysolutions.com",
        from: "waypointwarranty@gmail.com",
        subject: `New Form Submission`,
        message: `
        Name: ${formData.name}
        Phone Number: +1 ${formData.phoneNumber}
        Email: ${formData.email}
        Website: ${formData.website}
        Comments: ${formData.comments}
      `,
      });
      if (response.message) {
        toast.success("Response submitted successfully");
        setFormData({
          name: "",
          phoneNumber: "",
          email: "",
          website: "",
          comments: "",
        });
      } else {
        toast.error("Failed to submit response");
      }
    } catch (error) {
      toast.error("Failed to submit response");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <main className="relative grid h-[calc(60vh-8rem)] min-h-[400px] w-full place-items-center object-cover">
        <Image
          src={ContactBanner}
          alt="Contact Banner"
          className="absolute left-0 top-0 z-[2] h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-[#05122380] z-[2] opacity-90"></div>
        <div className="z-[3] flex items-center text-center text-primaryText">
          <h1 className="text-4xl lg:text-6xl font-bold">CONTACT US</h1>
        </div>
        <span className="font-semibold absolute z-[3] text-xl text-primaryText lg:left-0 xl:left-0 xl:ml-8 2xl:left-0 2xl:ml-8 lg:ml-8 bottom-5">
          Home {">"} Contact Us
        </span>
      </main>
      <section className="bg-primaryBg p-1">
        <h4 className="flex flex-col justify-center items-center my-6 ">
          <p className={`text-primary lg:text-2xl md:text-2xl text-xl font-bold ${inter.className}`}>GET IN TOUCH</p>
          <p className="text-secondaryText lg:text-4xl md:text-3xl text-2xl py-2">We Want To Share Our</p>
          <p className="text-secondaryText lg:text-4xl md:text-3xl text-2xl py-2">
            Location To Find
            <span className="text-primary lg:text-4xl font-bold md:text-3xl text-2xl"> Us Easily.</span>
          </p>
        </h4>
      </section>
      <section>
        <form className="lg:px-[120px] md:px-[60px] px-[30px]" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 col-span-1 lg:gap-x-9 lg:gap-y-5 gap-4">
            <div className="col-span-2 lg:col-span-1 md:col-span-1">
              <label className="font-semibold ml-3">
                Name<span className="text-red-600"> *</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="rounded-xl w-full p-3 pr-16 border border-gray-400 mt-2 focus:border-primary focus:outline-none"
              />
            </div>
            <div className="col-span-2 lg:col-span-1 md:col-span-1">
              <label className="font-semibold ml-3">
                Email Address <span className="text-red-600"> *</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                onChange={handleInputChange}
                className="rounded-xl w-full p-3 pr-16  border border-gray-400 mt-2 focus:border-primary focus:outline-none"
              />
            </div>
            <div className="col-span-2 lg:col-span-1 md:col-span-1">
              <label className="font-semibold ml-3">
                Phone Number<span className="text-red-600"> *</span>
              </label>
              <input
                id="phone"
                name="phoneNumber" // Ensure the name matches the formData key
                placeholder="(123) 456-7890"
                pattern="\(\d{3}\) \d{3}-\d{4}"
                required
                value={formData.phoneNumber}
                onChange={handleInputChange}
                onInput={handleInput} // Use onInput to format the phone number
                className="rounded-xl w-full p-3 pr-16 border border-gray-400 mt-2 focus:border-primary focus:outline-none"
              />
            </div>
            <div className="col-span-2 lg:col-span-1 md:col-span-1">
              <label className="font-semibold ml-3">
                Your Website<span className="text-red-600"> *</span>
              </label>
              <input
                type="url"
                id="website"
                placeholder="Your Website"
                name="website"
                pattern="^(https?:\/\/|www\.)[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$"
                title="Please enter a valid URL that starts with http://, https://, or www. and includes a domain name."
                required
                value={formData.website}
                onChange={handleInputChange}
                className="rounded-xl w-full p-3 pr-16 border border-gray-400 mt-2 focus:border-primary focus:outline-none"
              />
            </div>

            <div className="col-span-2">
              <label className="font-semibold ml-3">Your Comment</label>
              <textarea
                placeholder="Your Comment"
                value={formData.comments}
                rows={6}
                onChange={handleInputChange} // Pass the handler correctly
                name="comments" // Ensure the name matches the formData key
                className="rounded-xl w-full p-4 pr-16 border border-gray-400 mt-2 focus:border-primary focus:outline-none"
              />
            </div>
          </div>
          <div className="flex justify-center items-center my-5">
            <button
              type="submit"
              className={`bg-primary text-primaryText py-3 px-3 rounded-md hover:bg-[#0D5F37]
                ${isLoading ? "opacity-50 cursor-not-allowed" : ""} `}
              disabled={isLoading}
            >
              {isLoading ? <span className="loading loading-spinner loading-sm"></span> : "Send Message"}
            </button>
          </div>
        </form>
      </section>
      <section className="bg-primaryBg lg:px-[100px] md:px-[60px] px-[30px]">
        <div className="flex lg:flex-row justify-center flex-col items-center  box-content my-10 mx-6">
          <div className="w-full lg:h-[180px] h-[150px] border border-gray-300 flex flex-col  justify-center items-center gap-4">
            <div>
              <svg
                version="1.0"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                width="60px"
                height="60px"
                viewBox="0 0 64 64"
                enable-background="new 0 0 64 64"
              >
                <path
                  fill="#129349"
                  d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24
	C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24
	C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                />
              </svg>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <p className={`lg:text-2xl text-secondaryText font-semibold ${inter.className}`}>Office Address</p>
              <p className="lg:text-lg">2173 Embassy Drive Lancaster, PA 17603</p>
            </div>
          </div>
          <div className="w-full lg:h-[180px]  h-[150px] border border-gray-300 flex flex-col justify-center items-center gap-4">
            <div>
              <svg width="60px" height="60px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
                  fill="#129349"
                />
              </svg>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <p className={`lg:text-2xl text-secondaryText font-semibold ${inter.className}`}>Phone Number</p>
              <a href="tel:+1 (717) 431-3113" className="lg:text-lg">
                +1 (717) 431-3113
              </a>
            </div>
          </div>
          <div className="w-full lg:h-[180px]  h-[150px] border border-gray-300 flex flex-col justify-center items-center gap-4">
            <div>
              <svg
                height="60px"
                width="60px"
                version="1.1"
                id="_x32_"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path
                    className="fill-primary"
                    d="M440.917,67.925H71.083C31.827,67.925,0,99.752,0,139.008v233.984c0,39.256,31.827,71.083,71.083,71.083
		h369.834c39.255,0,71.083-31.827,71.083-71.083V139.008C512,99.752,480.172,67.925,440.917,67.925z M178.166,321.72l-99.54,84.92
		c-7.021,5.992-17.576,5.159-23.567-1.869c-5.992-7.021-5.159-17.576,1.87-23.567l99.54-84.92c7.02-5.992,17.574-5.159,23.566,1.87
		C186.027,305.174,185.194,315.729,178.166,321.72z M256,289.436c-13.314-0.033-26.22-4.457-36.31-13.183l0.008,0.008l-0.032-0.024
		c0.008,0.008,0.017,0.008,0.024,0.016L66.962,143.694c-6.98-6.058-7.723-16.612-1.674-23.583c6.057-6.98,16.612-7.723,23.582-1.674
		l152.771,132.592c3.265,2.906,8.645,5.004,14.359,4.971c5.706,0.017,10.995-2.024,14.44-5.028l0.074-0.065l152.615-132.469
		c6.971-6.049,17.526-5.306,23.583,1.674c6.048,6.97,5.306,17.525-1.674,23.583l-152.77,132.599
		C282.211,284.929,269.322,289.419,256,289.436z M456.948,404.771c-5.992,7.028-16.547,7.861-23.566,1.869l-99.54-84.92
		c-7.028-5.992-7.861-16.546-1.869-23.566c5.991-7.029,16.546-7.861,23.566-1.87l99.54,84.92
		C462.107,387.195,462.94,397.75,456.948,404.771z"
                  />
                </g>
              </svg>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <p className={`lg:text-2xl text-secondaryText font-semibold ${inter.className}`}>Mail Address</p>
              <a href="mailto:info@waypointwarrantysolutions.com" target="_blank" className="break-all">
                info@waypointwarrantysolutions.com
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primaryBg ">
        <div className="flex justify-center items-center my-10 mx-10">
          <div className="h-[40vw] w-[80vw] lg:h-[80vh] border border-gray-500/25 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3054.361191077947!2d-76.3612515!3d40.04503979999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c62420e6aad537%3A0xfc77ba3d0f194859!2s2173%20Embassy%20Dr%2C%20Lancaster%2C%20PA%2017603%2C%20USA!5e0!3m2!1sen!2s!4v1721746032973!5m2!1sen!2s"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
