import BenefitsList from "./List";
import { BsBuildingDash, BsStar, BsBuildingLock } from "react-icons/bs"

export default function BenefitsIntro() {

    const benefits = [
        {
            icon: <BsBuildingDash />,
            title: "Acesso ao mercado imobiliario",
            description: "Acesso ao mercado imobiliario"
        },
        {
            icon: <BsStar />,
            title: "Garantia de qualidade",
            description: "Garantia de qualidade"
        },
        {
            icon: <BsBuildingLock />,
            title: "Seguro de imóvel",
            description: "Seguro de imóvel"
        },
    ]

    return (
        <section className="flex flex-col items-center justify-center my-20 gap-y-20">
            <h2 className="font-bold text-5xl">Benefícios</h2>
            <BenefitsList benefits={benefits} />
        </section>
    )
}