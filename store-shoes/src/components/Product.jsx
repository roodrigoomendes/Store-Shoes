export default function Product({ srcimage, srctext, srcprice }) {
    return (
        <div className="m-7 text-right font-bold text-lg">
            <div className="bg-gray-300  h-80 w-80 flex justify-center items-center flex-col
            hover:bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-400">
                <img src={srcimage} alt={srctext} />
            </div>
                <p className=""> R$ {srcprice} </p>
        </div>
    )
}