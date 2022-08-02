import Meta from "../components/Meta";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Meta />
      <section className="h-screen font-roboto px-12 lg:px-36 flex flex-row flex-wrap items-center justify-center lg:justify-start">
        <div className="lg:w-3/6 flex flex-col items-center lg:items-start z-10">
          <h1 className="font-bold text-4xl lg:text-4xl">
            <span className="hidden lg:inline">Hi, I&#39;m </span>Gian Roi Calvario
          </h1>
          <h2 className="font-medium text-xl lg:text-2xl text-gray-500 mb-10 lg:mb-6">Full Stack Web Developer</h2>
          <h3 className="text-justify lg:w-4/5">
            I&#39;m a full-stack web developer from the Philippines. I enjoy building websites, applications, and tools
            for my client from simple landing pages to powerful interactive applications. If you are a business seeking
            for web presence or an employer looking to hire, you can get in touch with me.
          </h3>
        </div>
        <div className="lg:w-3/6 absolute lg:static">
          <div className="flex flex-row flex-wrap justify-center items-center opacity-10 lg:opacity-50">
            <div className="w-16 h-16 m-4">
              <Image src="/images/icons/html.png" alt="HTML" {...techLogoProps} />
            </div>
            <div className="w-16 h-16 m-4">
              <Image src="/images/icons/css.png" alt="CSS" {...techLogoProps} />
            </div>
            <div className="w-16 h-16 m-4">
              <Image src="/images/icons/js.png" alt="JavaScript" {...techLogoProps} />
            </div>
            <div className="w-16 h-16 m-4">
              <Image src="/images/icons/nodejs.png" alt="NodeJS" {...techLogoProps} />
            </div>
            <div className="w-16 h-16 m-4">
              <Image src="/images/icons/express.png" alt="ExpressJS" {...techLogoProps} />
            </div>
            <div className="w-16 h-16 m-4">
              <Image src="/images/icons/typescript.png" alt="TypeScript" {...techLogoProps} />
            </div>
            <div className="w-16 h-16 m-4">
              <Image src="/images/icons/aws.png" alt="Amazon Web Services" {...techLogoProps} />
            </div>
            <div className="w-16 h-16 m-4">
              <Image src="/images/icons/mongodb.png" alt="MongoDB" {...techLogoProps} />
            </div>
            <div className="w-16 h-16 m-4">
              <Image src="/images/icons/mysql.png" alt="MySQL" {...techLogoProps} />
            </div>
            <div className="w-16 h-16 m-4">
              <Image src="/images/icons/react.png" alt="React" {...techLogoProps} />
            </div>
            <div className="w-16 h-16 m-4">
              <Image src="/images/icons/nextjs.png" alt="NextJS" {...techLogoProps} />
            </div>
            <div className="w-16 h-16 m-4">
              <Image src="/images/icons/redux.png" alt="Redux" {...techLogoProps} />
            </div>
            <div className="w-16 h-16 m-4">
              <Image src="/images/icons/tailwind.png" alt="TailWind" {...techLogoProps} />
            </div>
            <div className="w-16 h-16 m-4">
              <Image src="/images/icons/sass.png" alt="SASS" {...techLogoProps} />
            </div>
            <div className="w-16 h-16 m-4">
              <Image src="/images/icons/git.png" alt="Git" {...techLogoProps} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const techLogoProps = {
  width: "100%",
  height: "100%",
  priority: true,
};
