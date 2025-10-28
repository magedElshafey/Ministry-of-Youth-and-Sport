

const LoadingBtn = () => {
    return (
        <button
            className="w-full flex items-center justify-center bg-orangeColor text-white py-2 px-6 font-medium rounded-lg bg-opacity-55"
            type="button"
            disabled={true}
        >
            <div
                className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"
                role="status"
            ></div>
        </button>
    )
}

export default LoadingBtn