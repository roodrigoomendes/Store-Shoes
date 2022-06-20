export default function Product({srcimage, srctext}) {
    return (
        <div className="bg-gray-300 h-80 w-80 flex justify-center items-center m-7 flex-wrap">
            <img src={srcimage} alt={srctext} />
        </div>
    )
}