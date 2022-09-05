type Props = {
  value: string;
};

const LoginButton = (props: Props) => {
  const handleClick = () => {
    window.open(props.value, "_self");
  };
  return (
    <div className=" flex items-center justify-center mt-6">
      <span
        className="font-extrabold p-4 rounded bg-[#4c8bf5] border-black w-3/4 text-white cursor-grab"
        onClick={() => handleClick()}
      >
        Sign In With Google
      </span>
    </div>
  );
};

export default LoginButton;
