import Benefit from "./Benefit"

type Benefit = {
    title: string
    description: string
    icon?: JSX.Element
}

type BenefitsListProps = {
    benefits: Benefit[]
}

export default function BenefitsList({benefits}: BenefitsListProps) {
    return (
        <ul className="flex flex-row gap-12">
            {benefits.map((benefit, index) => (
                <li key={index}>
                    <Benefit title={benefit.title} description={benefit.description} icon={benefit.icon} />
                </li>
            ))}
        </ul>
    )
}