"use client";

import { useState } from "react";
import { sendEmail } from "@/app/utils/email";
import { toast } from "react-toastify";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    businessNumber: "",
    businessEmail: "",
    businessAddress: "",
    city: "",
    state: "",
    street: "",
    zipCode: "",
    additionalNotes: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "zipCode") {
      if (!/^\d{0,5}(-\d{0,4})?$/.test(value)) {
        return; // Do not update state if ZIP code is invalid
      }
    }

    if (name === "city") {
      if (!/^[a-zA-Z\s]*$/.test(value)) {
        return; // Do not update state if city contains non-alphabetic characters
      }
    }

    if (name === "firstName") {
      if (!/^[a-zA-Z\s]*$/.test(value)) {
        return; // Do not update state if city contains non-alphabetic characters
      }
    }

    if (name === "lastName") {
      if (!/^[a-zA-Z\s]*$/.test(value)) {
        return; // Do not update state if city contains non-alphabetic characters
      }
    }

    if (name === "state") {
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
      //   const response = await sendEmail({
      //     to: "waypointwarranty@gmail.com",
      //     from: "waypointwarranty@gmail.com",
      //     subject: `New Form Submission`,
      //     message: `
      //   First Name: ${formData.firstName}
      //   Last Name: ${formData.lastName}
      //   Phone Number: +1 ${formData.phoneNumber}
      //   Email: ${formData.email}
      //   Business Number: +1 ${formData.businessNumber}
      //   Business Email: ${formData.businessEmail}
      //   Business Address: ${formData.businessAddress}
      //   City: ${formData.city}
      //   State: ${formData.state}
      //   Street: ${formData.street}
      //   Zip Code: ${formData.zipCode}
      //   Additional Notes: ${formData.additionalNotes}
      // `,
      //   });
      // if (response.message) {
      toast.success("Response submitted successfully");
      // setFormData({
      //   firstName: "",
      //   lastName: "",
      //   phoneNumber: "",
      //   email: "",
      //   businessNumber: "",
      //   businessEmail: "",
      //   businessAddress: "",
      //   city: "",
      //   state: "",
      //   street: "",
      //   zipCode: "",
      //   additionalNotes: "",
      // });
      // } else {
      //   toast.error("Failed to submit response");
      // }
    } catch (error) {
      toast.error("Failed to submit response");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="flex items-center justify-center" onSubmit={handleSubmit}>
      <div
        className="lg:w-[80%] shadow-lg grid grid-cols-2 gap-x-10 lg:gap-x-20 lg:gap-y-6 gap-y-4 m-5 my-10 p-5 lg:px-10 rounded-2xl"
        style={{ boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.2)" }}
      >
        <div className="col-span-2 lg:col-span-1 md:col-span-1">
          <label className="font-semibold ml-3">
            First Name<span className="text-red-600"> *</span>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            value={formData.firstName}
            onChange={handleInputChange}
            className="rounded-xl w-full p-4 lg:pr-16 py-2 lg:py-3 border border-gray-400 mt-2 focus:border-primary focus:outline-none"
          />
        </div>
        <div className="col-span-2 lg:col-span-1 md:col-span-1">
          <label className="font-semibold ml-3">
            Last Name<span className="text-red-600"> *</span>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
            value={formData.lastName}
            onChange={handleInputChange}
            className="rounded-xl w-full p-4 lg:pr-16 py-2 lg:py-3 border border-gray-400 mt-2 focus:border-primary focus:outline-none"
          />
        </div>
        <div className="col-span-2 lg:col-span-1 md:col-span-1">
          <label className="font-semibold ml-3">
            Phone Number<span className="text-red-600"> *</span>
          </label>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            pattern="\(\d{3}\) \d{3}-\d{4}"
            required
            value={formData.phoneNumber}
            onChange={handleInputChange}
            onInput={handleInput}
            className="rounded-xl w-full p-4 lg:pr-16 py-2 lg:py-3 border border-gray-400 mt-2 focus:border-primary focus:outline-none"
          />
        </div>
        <div className="col-span-2 lg:col-span-1 md:col-span-1">
          <label className="font-semibold ml-3">
            Email<span className="text-red-600"> *</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            title="Please enter a valid email address"
            value={formData.email}
            onChange={handleInputChange}
            className="rounded-xl w-full p-4 lg:pr-16 py-2 lg:py-3 border border-gray-400 mt-2 focus:border-primary focus:outline-none"
          />
        </div>

        <div className="col-span-2 lg:col-span-1 md:col-span-1">
          <label className="font-semibold ml-3">
            Business Number<span className="text-red-600"> *</span>
          </label>
          <input
            type="tel"
            name="businessNumber"
            placeholder="Business Number"
            pattern="\(\d{3}\) \d{3}-\d{4}"
            required
            value={formData.businessNumber}
            onChange={handleInputChange}
            onInput={handleInput}
            className="rounded-xl w-full p-4 lg:pr-16 py-2 lg:py-3 border border-gray-400 mt-2 focus:border-primary focus:outline-none"
          />
        </div>
        <div className="col-span-2 lg:col-span-1 md:col-span-1">
          <label className="font-semibold ml-3">
            Business Email<span className="text-red-600"> *</span>
          </label>
          <input
            type="email"
            name="businessEmail"
            placeholder="Business Email"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            required
            value={formData.businessEmail}
            onChange={handleInputChange}
            className="rounded-xl w-full p-4 lg:pr-16 py-2 lg:py-3 border border-gray-400 mt-2 focus:border-primary focus:outline-none"
          />
        </div>
        <div className="col-span-2">
          <label className="font-semibold ml-3">
            Business Address<span className="text-red-600"> *</span>
          </label>
          <input
            type="text"
            name="businessAddress"
            placeholder="Business Address"
            required
            value={formData.businessAddress}
            onChange={handleInputChange}
            className="rounded-xl w-full p-4 lg:pr-16 py-2 lg:py-3 border border-gray-400 mt-2 focus:border-primary focus:outline-none"
          />
        </div>
        <div className="col-span-2 lg:col-span-1 md:col-span-1">
          <label className="font-semibold ml-3">
            City<span className="text-red-600"> *</span>
          </label>
          <input
            type="text"
            name="city"
            placeholder="City"
            required
            value={formData.city}
            onChange={handleInputChange}
            className="rounded-xl w-full p-4 lg:pr-16 py-2 lg:py-3 border border-gray-400 mt-2 focus:border-primary focus:outline-none"
          />
        </div>
        <div className="col-span-2 lg:col-span-1 md:col-span-1">
          <label className="font-semibold ml-3">
            State<span className="text-red-600"> *</span>
          </label>
          <input
            type="text"
            name="state"
            placeholder="State"
            required
            value={formData.state}
            onChange={handleInputChange}
            className="rounded-xl w-full p-4 lg:pr-16 py-2 lg:py-3 border border-gray-400 mt-2 focus:border-primary focus:outline-none"
          />
        </div>
        <div className="col-span-2 lg:col-span-1 md:col-span-1">
          <label className="font-semibold ml-3">
            Street<span className="text-red-600"> *</span>
          </label>
          <input
            type="text"
            name="street"
            placeholder="Street"
            required
            value={formData.street}
            onChange={handleInputChange}
            className="rounded-xl w-full p-4 lg:pr-16 py-2 lg:py-3 border border-gray-400 mt-2 focus:border-primary focus:outline-none"
          />
        </div>
        <div className="col-span-2 lg:col-span-1 md:col-span-1">
          <label className="font-semibold ml-3">
            Zip Code<span className="text-red-600"> *</span>
          </label>
          <input
            name="zipCode"
            placeholder="Zip Code"
            required
            pattern="\d{5}"
            title="Please enter a 5-digit zip code"
            value={formData.zipCode}
            onChange={handleInputChange}
            className="rounded-xl w-full p-4 py-2 lg:py-3 border border-gray-400 mt-2 focus:border-primary focus:outline-none"
          />
        </div>

        <div className="col-span-2">
          <label className="font-semibold ml-3">Additional Notes</label>
          <input
            type="text"
            name="additionalNotes"
            placeholder="Additional Notes"
            value={formData.additionalNotes}
            onChange={handleInputChange}
            className="rounded-xl w-full p-4 lg:pr-16 py-2 lg:py-3 border border-gray-400 mt-2 focus:border-primary focus:outline-none"
          />
        </div>
        <div className="col-span-2 ">
          <button
            type="submit"
            className={`bg-secondaryText text-primaryText w-full rounded-xl p-2 lg:p-4 lg:py-3 mt-5 hover:bg-[#29578c] ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
