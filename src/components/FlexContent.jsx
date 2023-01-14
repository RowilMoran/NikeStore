const FlexContent = ({
    isReverse,
    endpoint: { heading, title, text, btn, url, img },
}) => {
    return (
        <>
            <div
                className={`nike-container flex ${
                    isReverse ? "flex-row-reverse " : "flex-row"
                } relative justify-between lg:flex-col lg:justify-center lg:items-center lg:gap-8`}
            >
                <div className="flex flex-col max-w-lg xl:max-w-md justify-start lg:justify-center lg:items-center ">
                    <h4 className="text-4xl lg:text-3xl font-semibold text-blue-500">
                        {heading}
                    </h4>
                    <h3 className="text-5xl font-bold lg:text-center lg:text-4xl duration-700">
                        {title}
                    </h3>
                    <p className="my-2 lg:text-center md:text-sm">{text}</p>
                    <a
                        href={url}
                        className="flex items-center"
                        target={"_blank"}
                    >
                        <button
                            type="button"
                            className="button-theme bg-slate-900 shadow-slate-900 text-white"
                        >
                            {btn}
                        </button>
                    </a>
                </div>
                <div className="grid items-center relative justify-items-start max-w-xl w-full  lg:max-w-none">
                    <img
                        src={img}
                        alt={`img/${title}`}
                        className=" lg:w-auto object-fill rotate-6 hover:-rotate-12 duration-700"
                    />
                </div>
            </div>
        </>
    );
};

export default FlexContent;
