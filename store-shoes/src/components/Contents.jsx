import Product from "./Product";

import jordan1 from "../img/jordan-1.png";
import jordan2 from "../img/jordan-2.png";
import jordan3 from "../img/jordan-3.png";
import jordan4 from "../img/jordan-4.png";
import jordan5 from "../img/jordan-5.png";
import jordan6 from "../img/jordan-6.png";
import jordan7 from "../img/jordan-7.png";
import jordan8 from "../img/jordan-8.png";



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
                <Product srcimage={jordan1} srctext={"jordan 1"} srcprice={"350,00"}/>
                <Product srcimage={jordan2} srctext={"jordan 2"} srcprice={"550,00"}/>
                <Product srcimage={jordan3} srctext={"jordan 3"} srcprice={"350,00"}/>
                <Product srcimage={jordan4} srctext={"jordan 4"} srcprice={"450,00"}/>
                <Product srcimage={jordan5} srctext={"jordan 5"} srcprice={"450,00"}/>
                <Product srcimage={jordan6} srctext={"jordan 6"} srcprice={"300,00"}/>
                <Product srcimage={jordan7} srctext={"jordan 7"} srcprice={"400,00"}/>
                <Product srcimage={jordan8} srctext={"jordan 8"} srcprice={"450,00"}/>
            </section>
        </section>
    )
}