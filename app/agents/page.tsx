import AgentBanner from "@/public/agent-banner.png";
import Image from "next/image";
import Card from "../components/Card";
import Form from "../components/Form";

export default function Agent() {
  type CardProps = {
    number: string;
    icon: JSX.Element;
    title: string;
    description: string;
  };
  const cards: CardProps[] = [
    {
      number: "01",
      icon: (
        <svg
          viewBox="0 0 95 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 lg:w-20"
        >
          <path
            d="M80.1562 32.6562H62.3438V14.8438C62.3438 13.269 61.7182 11.7588 60.6047 10.6453C59.4912 9.53181 57.981 8.90625 56.4062 8.90625H38.5938C37.019 8.90625 35.5088 9.53181 34.3953 10.6453C33.2818 11.7588 32.6562 13.269 32.6562 14.8438V32.6562H14.8438C13.269 32.6562 11.7588 33.2818 10.6453 34.3953C9.53181 35.5088 8.90625 37.019 8.90625 38.5938V56.4062C8.90625 57.981 9.53181 59.4912 10.6453 60.6047C11.7588 61.7182 13.269 62.3438 14.8438 62.3438H32.6562V80.1562C32.6562 81.731 33.2818 83.2412 34.3953 84.3547C35.5088 85.4682 37.019 86.0938 38.5938 86.0938H56.4062C57.981 86.0938 59.4912 85.4682 60.6047 84.3547C61.7182 83.2412 62.3438 81.731 62.3438 80.1562V62.3438H80.1562C81.731 62.3438 83.2412 61.7182 84.3547 60.6047C85.4682 59.4912 86.0938 57.981 86.0938 56.4062V38.5938C86.0938 37.019 85.4682 35.5088 84.3547 34.3953C83.2412 33.2818 81.731 32.6562 80.1562 32.6562ZM80.1562 56.4062H59.375C58.5876 56.4062 57.8325 56.719 57.2758 57.2758C56.719 57.8325 56.4062 58.5876 56.4062 59.375V80.1562H38.5938V59.375C38.5938 58.5876 38.281 57.8325 37.7242 57.2758C37.1675 56.719 36.4124 56.4062 35.625 56.4062H14.8438V38.5938H35.625C36.4124 38.5938 37.1675 38.281 37.7242 37.7242C38.281 37.1675 38.5938 36.4124 38.5938 35.625V14.8438H56.4062V35.625C56.4062 36.4124 56.719 37.1675 57.2758 37.7242C57.8325 38.281 58.5876 38.5938 59.375 38.5938H80.1562V56.4062Z"
            fill="#1F60B2"
          />
        </svg>
      ),
      title: "Comprehensive Support",
      description:
        "Waypoint offers our agent partners a full suite of products and services with technology and claims that allows you to focus on growth, knowing your dealers’ needs are being met",
    },
    {
      number: "02",
      icon: (
        <svg
          viewBox="0 0 95 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 lg:w-20"
        >
          <g clipPath="url(#clip0_251_702)">
            <path
              d="M85.2143 26.8125L60.8594 50.8779V26.8125H54.4534L31.1719 50.4265V11.9688H2.96875V101.031H92.0312V26.8125H85.2143ZM86.0938 95.0938H8.90625V17.9062H25.2344V57.9844H32.0584L54.9219 34.7944V57.9844H62.1144L86.0938 34.29V95.0938Z"
              fill="#1F60B2"
            />
            <path
              d="M25.2344 69.8594V71.3438H31.1719V65.4062H25.2344V69.8594ZM25.2344 78.7656H31.1719V84.7031H25.2344V78.7656ZM40.0781 69.8594V71.3438H46.0156V65.4062H40.0781V69.8594ZM40.0781 78.7656H46.0156V84.7031H40.0781V78.7656ZM54.9219 69.8594V71.3438H60.8594V65.4062H54.9219V69.8594ZM54.9219 78.7656H60.8594V84.7031H54.9219V78.7656ZM69.7656 65.4062H75.7031V71.3438H69.7656V65.4062ZM69.7656 78.7656H75.7031V84.7031H69.7656V78.7656Z"
              fill="#1F60B2"
            />
          </g>
          <defs>
            <clipPath id="clip0_251_702">
              <rect width="95" height="95" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Industry Best",
      description:
        "Waypoint has industry-leading participation programs that have been called the most transparent in the industry for dealers.",
    },
    {
      number: "03",
      icon: (
        <svg
          viewBox="0 0 95 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 lg:w-20"
        >
          <path
            d="M39.3748 84.9374V79.8749H54.5673V84.9374H39.3748ZM74.8123 41.9061C74.8154 46.0131 73.9064 50.0695 72.1511 53.7824C70.3957 57.4953 67.8378 60.7721 64.662 63.3762C61.6295 65.8771 59.6248 69.4158 59.6248 73.3493V74.8124H34.3123V73.6784C34.3123 69.8815 32.7783 66.1353 29.7864 63.7913C25.746 60.631 22.6585 56.4147 20.8653 51.6088C19.0722 46.8029 18.6432 41.5947 19.626 36.5601C21.6307 25.7669 30.2167 16.9328 40.9644 14.6901C45.0345 13.7971 49.2529 13.828 53.3095 14.7804C57.3661 15.7329 61.1575 17.5827 64.4048 20.1937C67.6521 22.8048 70.2728 26.1107 72.0739 29.8682C73.875 33.6257 74.8107 37.7393 74.8123 41.9061ZM31.781 44.4374C31.781 33.9732 37.7851 26.7186 46.9685 26.7186V21.6561C34.7527 21.6561 26.7185 31.366 26.7185 44.4374H31.781Z"
            fill="#1F60B2"
          />
        </svg>
      ),
      title: "Exclusive Oppurtunities",
      description:
        "Waypoint offers our agent partners a full suite of products and services with technology and claims that allows you to focus on growth, knowing your dealers’ needs are being met",
    },
    {
      number: "04",
      icon: (
        <svg
          viewBox="0 0 95 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 lg:w-20"
        >
          <path
            d="M78.4896 39.321C82.7364 35.0744 80.7999 30.1143 78.4896 27.7022L68.2971 17.5103C64.0163 13.2636 59.0899 15.2001 56.6777 17.5103L50.902 23.3197H42.1025C35.6473 23.3197 31.9101 26.717 30.0075 30.6239L14.9226 45.7079V59.2972L12.5104 61.6753C8.26356 65.9559 10.2001 70.882 12.5104 73.2941L22.7029 83.486C24.5375 85.3205 26.5081 86 28.3767 86C30.7889 86 32.9973 84.8109 34.3223 83.486L43.4955 74.2793H55.6925C61.4682 74.2793 64.39 70.6781 65.4432 67.1449C69.2824 66.1257 71.3888 63.2041 72.2382 60.3503C77.5043 58.9914 79.4749 53.9974 79.4749 50.4981V40.3062H77.4703L78.4896 39.321ZM72.6799 50.4981C72.6799 52.0269 72.0344 53.8954 69.2824 53.8954H65.8849V57.2928C65.8849 58.8215 65.2394 60.6901 62.4874 60.6901H59.0899V64.0874C59.0899 65.6162 58.4444 67.4847 55.6925 67.4847H40.7095L29.5658 78.6278C28.5126 79.6131 27.901 79.0355 27.5273 78.6618L17.3688 68.5378C16.3835 67.4847 16.9611 66.8732 17.3348 66.4995L21.7176 62.083V48.4937L28.5126 41.6991V47.1008C28.5126 51.2116 31.2306 57.2928 38.705 57.2928C46.1795 57.2928 48.8975 51.2116 48.8975 47.1008H72.6799V50.4981ZM73.6652 34.4968L67.8894 40.3062H42.1025V47.1008C42.1025 48.6296 41.457 50.4981 38.705 50.4981C35.9531 50.4981 35.3075 48.6296 35.3075 47.1008V36.9089C35.3075 35.3461 35.8851 30.1143 42.1025 30.1143H53.6879L61.4342 22.3684C62.4874 21.3832 63.099 21.9608 63.4727 22.3345L73.6312 32.4584C74.6165 33.5116 74.0389 34.1231 73.6652 34.4968Z"
            fill="#1F60B2"
          />
        </svg>
      ),
      title: "Partnership and Guidance",
      description:
        "Waypoint offers our agent partners a full suite of products and services with technology and claims that allows you to focus on growth, knowing your dealers’ needs are being met",
    },
  ];
  return (
    <>
      <main className="relative grid h-[calc(60vh-8rem)] min-h-[420px] w-full place-items-center object-cover">
        <Image
          src={AgentBanner}
          alt="Agent Banner"
          className="absolute left-0 top-0 z-[2] h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darkBlue to-transparent z-[2] opacity-65"></div>
        <div className="container z-[3] flex h-full items-center text-center lg:text-left flex-col lg:items-start text-primaryText px-4 pt-11 font-[Inter] lg:pl-10">
          <h1 className="lg:text-4xl text-3xl font-semibold">
            Become a Waypoint Agent
          </h1>
          <span className="max-w-lg text-sm lg:text-base mt-4">
            We value your partnership; we respect and support your business as
            if it were our own. When you become an agent with Waypoint, you gain
            access to a full suite of cutting-edge products and services to
            ensure your ongoing growth and success. Fill out the form below if
            you are interested in becoming a trusted partner with Waypoint
            Warranty Solutions and learn more about us.
          </span>
          <span className="font-semibold text-xl absolute bottom-5">
            Home {">"} Agents
          </span>
        </div>
      </main>
      <section className="bg-secondaryBg m-1 p-1">
        <div className="flex flex-col justify-center items-center my-3">
          <h1 className="text-primary font-bold text-3xl lg:text-5xl my-4">
            Benefits For Agents
          </h1>
        </div>
        <div className="lg:grid lg:grid-cols-2 gap-3 my-10 flex flex-col justify-center items-center">
          <div className="flex justify-center items-center lg:mb-9 mb-5">
            <Card
              number={cards[0].number}
              icon={cards[0].icon}
              title={cards[0].title}
              description={cards[0].description}
            />
          </div>
          <div className=" lg:mb-9 mb-5 h-[90%]">
            <Card
              number={cards[1].number}
              icon={cards[1].icon}
              title={cards[1].title}
              description={cards[1].description}
            />
          </div>
          <div className="flex justify-end items-center lg:mb-9 mb-5">
            <Card
              number={cards[2].number}
              icon={cards[2].icon}
              title={cards[2].title}
              description={cards[2].description}
            />
          </div>
          <div className="flex justify-center items-center lg:mb-9 mb-5 h-">
            <Card
              number={cards[3].number}
              icon={cards[3].icon}
              title={cards[3].title}
              description={cards[3].description}
            />
          </div>
        </div>
      </section>
      <section className="bg-primaryBg ">
        <div className="flex justify-center items-center">
          <h2 className="text-primary mt-6 lg:text-5xl md:text-4xl text-3xl font-semibold">
            Signup as Agent
          </h2>
        </div>
        <Form />
      </section>
    </>
  );
}
