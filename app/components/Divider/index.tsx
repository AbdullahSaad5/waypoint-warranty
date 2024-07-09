type DividerProps = {
  containerClassName?: string;
  borderClassName?: string;
};
const Divider: React.FC<DividerProps> = ({
  containerClassName,
  borderClassName,
}) => {
  return (
    <div className={`relative w-full  py-6 ${containerClassName}`}>
      <div
        className={`absolute top-[50%] h-[1px] w-full translate-y-[-50%] bg-primaryText ${borderClassName}`}
      ></div>
    </div>
  );
};

export default Divider;
