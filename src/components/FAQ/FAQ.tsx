import QuestionList from "./List";

export default function FAQ() {

    const QEA = [
        {
            question: "O que faz a Corretora Imóvis?",
            answer: "A Corretora Imóvis e muito atenciosa e competente. O imóvel foi muito bem avaliado.",
            isOpen: false
        },
        {
            question: "O que faz a Corretora Imóvis?",
            answer: "A Corretora Imóvis e muito atenciosa e competente. O imóvel foi muito bem avaliado.",
            isOpen: false
        },
    ]

    return (
        <section className="flex flex-col items-center justify-center my-20 gap-y-20">
            <h2 className="font-bold text-5xl">Perguntas Frequentes</h2>
            <QuestionList QEAs={QEA} />
        </section>
    )
}