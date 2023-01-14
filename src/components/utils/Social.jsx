const Social = ({ link }) => {
  return (
    <>
      <img
        src={link}
        alt="social/link"
        className="w-9 h-8 flex items-center cursor-pointer md:w-6 md:h-6 hover:scale-110"
      />
    </>
  );
};

export default Social;
