"use client";

export default function Form() {
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
  return (
    <>
      <form className="flex items-center justify-center">
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
              placeholder="First Name"
              required
              className="rounded-xl w-full p-4 lg:pr-16 py-2 lg:py-3 border border-gray-400 mt-2 focus:border-primary focus:outline-none"
            />
          </div>
          <div className="col-span-2 lg:col-span-1 md:col-span-1">
            <label className="font-semibold ml-3">
              Last Name<span className="text-red-600"> *</span>
            </label>
            <input
              type="text"
              placeholder="Last Name"
              required
              className="rounded-xl w-full p-4 lg:pr-16 py-2 lg:py-3 border border-gray-400 mt-2 focus:border-primary focus:outline-none"
            />
          </div>
          <div className="col-span-2 lg:col-span-1 md:col-span-1">
            <label className="font-semibold ml-3">
              Phone Number<span className="text-red-600"> *</span>
            </label>
            <input
              type="tel"
              placeholder="Phone Number"
              pattern="\(\d{3}\) \d{3}-\d{4}"
              required
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
              placeholder="Email"
              required
              className="rounded-xl w-full p-4 lg:pr-16 py-2 lg:py-3 border border-gray-400 mt-2 focus:border-primary focus:outline-none"
            />
          </div>
          <div className="col-span-2 lg:col-span-1 md:col-span-1">
            <label className="font-semibold ml-3">
              Business Number<span className="text-red-600"> *</span>
            </label>
            <input
              type="tel"
              placeholder="Business Number"
              pattern="\(\d{3}\) \d{3}-\d{4}"
              required
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
              placeholder="Business Email"
              required
              className="rounded-xl w-full p-4 lg:pr-16 py-2 lg:py-3 border border-gray-400 mt-2 focus:border-primary focus:outline-none"
            />
          </div>
          <div className="col-span-2">
            <label className="font-semibold ml-3">
              Business Address<span className="text-red-600"> *</span>
            </label>
            <input
              type="text"
              placeholder="Business Address"
              required
              className="rounded-xl w-full p-4 lg:pr-16 py-2 lg:py-3 border border-gray-400 mt-2 focus:border-primary focus:outline-none"
            />
          </div>
          <div className="col-span-2 lg:col-span-1 md:col-span-1">
            <label className="font-semibold ml-3">
              City<span className="text-red-600"> *</span>
            </label>
            <input
              type="text"
              placeholder="City"
              required
              className="rounded-xl w-full p-4 lg:pr-16 py-2 lg:py-3 border border-gray-400 mt-2 focus:border-primary focus:outline-none"
            />
          </div>
          <div className="col-span-2 lg:col-span-1 md:col-span-1">
            <label className="font-semibold ml-3">
              State<span className="text-red-600"> *</span>
            </label>
            <input
              type="text"
              placeholder="State"
              required
              className="rounded-xl w-full p-4 lg:pr-16 py-2 lg:py-3 border border-gray-400 mt-2 focus:border-primary focus:outline-none"
            />
          </div>
          <div className="col-span-2 lg:col-span-1 md:col-span-1">
            <label className="font-semibold ml-3">
              Street<span className="text-red-600"> *</span>
            </label>
            <input
              type="text"
              placeholder="Street"
              required
              className="rounded-xl w-full p-4 lg:pr-16 py-2 lg:py-3 border border-gray-400 mt-2 focus:border-primary focus:outline-none"
            />
          </div>
          <div className="col-span-2 lg:col-span-1 md:col-span-1">
            <label className="font-semibold ml-3">
              Zip Code<span className="text-red-600"> *</span>
            </label>
            <input
              type="number"
              placeholder="Zip Code"
              min={0}
              required
              className="rounded-xl w-full p-4 py-2 lg:py-3 border border-gray-400 mt-2 focus:border-primary focus:outline-none"
            />
          </div>
          <div className="col-span-2">
            <label className="font-semibold ml-3">Additional Notes</label>
            <input
              type="text"
              placeholder="Additional Notes"
              required
              className="rounded-xl w-full p-4 lg:pr-16 py-2 lg:py-3 border border-gray-400 mt-2 focus:border-primary focus:outline-none"
            />
          </div>
          <div className="col-span-2 ">
            <button
              type="submit"
              className="bg-secondaryText text-primaryText w-full rounded-xl p-2 lg:p-4 lg:py-3 mt-5"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
