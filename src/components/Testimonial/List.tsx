import Testimony from "./Testimony"

type Testimony = {
    stars: number
    testimony: string
    name: string
    occupation?: string
    company?: string
}

type TestimonialListProps = {
    testimonies: Testimony[]
}

export default function TestimonialList({testimonies}: TestimonialListProps) {
    return (
        <ul className="flex flex-row gap-12">
            {testimonies.map((testimony, index) => (
                <li key={index}>
                    <Testimony stars={testimony.stars} testimony={testimony.testimony} name={testimony.name} occupation={testimony.occupation} company={testimony.company} />
                </li>
            ))}
        </ul>
    )
}