import Nav from "./Nav";

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Nav />
      <div className="">
        <main className="w-full">{children}</main>
      </div>
    </>
  );
};

export default Layout;
