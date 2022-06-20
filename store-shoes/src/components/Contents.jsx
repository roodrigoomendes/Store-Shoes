import Product from "./Product";

export default function Contents() {
    return (
        <section className="my-12 mx-5 text-center mb-7">
            <h1 className="text-xl font-semibold">
                Destaques
            </h1>
            <p className="font-medium">
                Frete grátis e chinelo de brinde é aqui,
                aproveite por tempo limitado.
            </p>
            <section className="flex justify-center items-center flex-wrap">
            <Product srcimage={"./src/img/jordan-1.png"} srctext={"jordan 1"}/>
            <Product srcimage={"./src/img/jordan-2.png"} srctext={"jordan 2"}/>
            <Product srcimage={"./src/img/jordan-3.png"} srctext={"jordan 3"}/>
            <Product srcimage={"./src/img/jordan-4.png"} srctext={"jordan 4"}/>
            <Product srcimage={"./src/img/jordan-5.png"} srctext={"jordan 5"}/>
            <Product srcimage={"./src/img/jordan-6.png"} srctext={"jordan 6"}/>
            <Product srcimage={"./src/img/jordan-7.png"} srctext={"jordan 7"}/>
            <Product srcimage={"./src/img/jordan-8.png"} srctext={"jordan 8"}/>
            </section>
        </section>
    )
}