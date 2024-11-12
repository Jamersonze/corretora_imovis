import TestimonialList from "./List"


export default function TestimonialIntro() {

    const testimonies = [
        {
            stars: 5,
            testimony: "A Corretora Imóvis e muito atenciosa e competente. O imóvel foi muito bem avaliado.",
            name: "Joaquina Ferreira",
            occupation: "Vendedora",
            company: "Casa Moderna"
        },
        {
            stars: 5,
            testimony: "A Corretora Imóvis e muito atenciosa e competente. O imóvel foi muito bem avaliado.",
            name: "Joaquina Ferreira",
            occupation: "Vendedora",
            company: "Casa Moderna"
        },
        {
            stars: 4,
            testimony: "A Corretora Imóvis e muito atenciosa e competente. O imóvel foi muito bem avaliado.",
            name: "Joaquina Ferreira",
            occupation: "Vendedora",
            company: "Casa Moderna"
        }
    ]

    return (
        <section className="flex flex-col items-center justify-center my-20 gap-y-20">
            <h2 className="font-bold text-5xl">Depoimentos</h2>
            <p>Os imóveis que a Corretora Imóvis lhe apresentou foram muito bem avaliados</p>
            <TestimonialList testimonies={testimonies} />
        </section>
    )
}