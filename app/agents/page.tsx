import AgentBanner from "@/public/agent-banner.png";
import Image from "next/image";

export default function Agent() {
  return (
    <>
      <div className="relative h-screen object-cover">
        <Image src={AgentBanner} alt="Agent Banner" />
        <div className="absolute inset-0 flex flex-col text-primaryText pt-16 pl-8">
          <h1 className="text-4xl font-semibold">Become a Waypoint Agent</h1>
          <span className="w-full max-w-lg text-sm mt-2">
            We value your partnership; we respect and support your business as
            if it were our own. When you become an agent with Waypoint, you gain
            access to a full suite of cutting-edge products and services to
            ensure your ongoing growth and success. Fill out the form below if
            you are interested in becoming a trusted partner with Waypoint
            Warranty Solutions and learn more about us.
          </span>
        </div>
      </div>
    </>
  );
}
