import Link from "next/link";
import { useRouter } from "next/router";
import Button from "./Button";

const Nav = () => {
  const currentPath = useRouter().pathname;
  let navClass =
    currentPath === "/"
      ? "w-full flex flex-row p-5 lg:px-10 bg-transparent z-50 absolute"
      : "w-full flex flex-row p-5 lg:px-20 bg-gray-800 text-white z-50 fixed";

  return (
    <nav className={navClass}>
      <div className="flex items-center lg:mr-12 font-bold cursor-pointer transition hover:scale-110 hover:duration-300 hover:ease-in-out">
        <Link href="/">
          <h1 className="text-lg font-semibold uppercase">Giro Calvario</h1>
        </Link>
      </div>
      <ul className="flex flex-row items-center ml-auto">
        <li className="hidden lg:inline-block mr-5 transition hover:font-semibold hover:scale-110 hover:duration-300 hover:ease-in-out">
          <Link href="/register">Create an Account</Link>
        </li>
        <li className="">
          <Button>
            <Link href="/docs">Get Started</Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
