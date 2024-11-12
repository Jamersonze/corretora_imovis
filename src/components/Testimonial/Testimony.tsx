import { BsStar, BsStarFill } from "react-icons/bs"

type TestimonialProps = {
    stars: number
    testimony: string
    name: string
    occupation?: string
    company?: string
}

export default function Testimonial({ stars, testimony, name, occupation, company }: TestimonialProps) {

    const starsArray = []

    for (let i = 0; i < 5; i++) {

        if (i < stars) {
            starsArray.push(
                (
                    <BsStarFill />
                )
            )
        }else {
            starsArray.push(
                (
                    <BsStar />
                )
            )
        }
        
    }

    return (
        <article className="flex flex-col items-start my-20 mx-20 gap-y-8">
            <section className="flex flex-row">
                {starsArray}
            </section>
            <blockquote className="font-bold text-xl">{testimony}</blockquote>
            <cite className="text-base flex flex-col items-center">
                {name} 
                {occupation && <span className="text-slate-500">({occupation})</span>} 
                {company && <span className="text-slate-500">em {company}</span>}
            </cite>
        </article>
    )
}