const Loader = ({size=16}: {size?: number}) => {
    const classNames = `h-${size} w-${size}`
    return (
        <div
            className={`${classNames}  border-4 border-orangeColor border-t-transparent rounded-full animate-spin`}
            role="status"
        ></div>
    );
};

export default Loader;
