import Meta from "../components/Meta";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Meta />
      <section className="h-screen font-roboto px-12 lg:px-36 flex flex-row flex-wrap items-center justify-center lg:justify-start">
        <div className="lg:w-3/6 flex flex-col items-center lg:items-start z-10">
          <h1 className="font-bold text-4xl lg:text-4xl">
            <span className="hidden lg:inline">Hi! I&#39;m </span>Gian Roi
            Calvario
          </h1>
          <h2 className="font-medium text-xl lg:text-2xl text-gray-500 mb-10 lg:mb-6">
            Full Stack Web Developer
          </h2>
          <h3 className="text-justify lg:w-4/5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </h3>
        </div>
        <div className="lg:w-3/6 absolute lg:static">
          <div className="flex flex-row flex-wrap justify-center items-center opacity-10 lg:opacity-50">
            <div className="w-16 h-16 m-4">
              <Image
                src="/images/icons/html.png"
                alt="HTML"
                width="100%"
                height="100%"
              />
            </div>
            <div className="w-16 h-16 m-4">
              <Image
                src="/images/icons/css.png"
                alt="CSS"
                width="100%"
                height="100%"
              />
            </div>
            <div className="w-16 h-16 m-4">
              <Image
                src="/images/icons/js.png"
                alt="JavaScript"
                width="100%"
                height="100%"
              />
            </div>
            <div className="w-16 h-16 m-4">
              <Image
                src="/images/icons/nodejs.png"
                alt="NodeJS"
                width="100%"
                height="100%"
              />
            </div>
            <div className="w-16 h-16 m-4">
              <Image
                src="/images/icons/express.png"
                alt="ExpressJS"
                width="100%"
                height="100%"
              />
            </div>
            <div className="w-16 h-16 m-4">
              <Image
                src="/images/icons/typescript.png"
                alt="TypeScript"
                width="100%"
                height="100%"
              />
            </div>
            <div className="w-16 h-16 m-4">
              <Image
                src="/images/icons/aws.png"
                alt="Amazon Web Services"
                width="100%"
                height="100%"
              />
            </div>
            <div className="w-16 h-16 m-4">
              <Image
                src="/images/icons/mongodb.png"
                alt="MongoDB"
                width="100%"
                height="100%"
              />
            </div>
            <div className="w-16 h-16 m-4">
              <Image
                src="/images/icons/mysql.png"
                alt="MySQL"
                width="100%"
                height="100%"
              />
            </div>
            <div className="w-16 h-16 m-4">
              <Image
                src="/images/icons/react.png"
                alt="React"
                width="100%"
                height="100%"
              />
            </div>
            <div className="w-16 h-16 m-4">
              <Image
                src="/images/icons/nextjs.png"
                alt="NextJS"
                width="100%"
                height="100%"
              />
            </div>
            <div className="w-16 h-16 m-4">
              <Image
                src="/images/icons/redux.png"
                alt="Redux"
                width="100%"
                height="100%"
              />
            </div>
            <div className="w-16 h-16 m-4">
              <Image
                src="/images/icons/tailwind.png"
                alt="TailWind"
                width="100%"
                height="100%"
              />
            </div>
            <div className="w-16 h-16 m-4">
              <Image
                src="/images/icons/sass.png"
                alt="SASS"
                width="100%"
                height="100%"
              />
            </div>
            <div className="w-16 h-16 m-4">
              <Image
                src="/images/icons/git.png"
                alt="Git"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
