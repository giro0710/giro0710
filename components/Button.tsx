interface ButtonInterface {
  children: JSX.Element | string;
}

const Button = ({ children }: ButtonInterface) => {
  return (
    <div className="flex justify-center text-white">
      <button className="inline-block px-5 py-2 bg-blue-700 border-2 border-blue-700 rounded hover:bg-blue-900 hover:border-blue-900 transition duration-150 ease-out">
        {children}
      </button>
    </div>
  );
};

Button.defaultProps = {
  children: "Button",
};

export default Button;
