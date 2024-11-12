type BenefitProps = {
    title: string
    description: string
    icon?: JSX.Element
}

export default function Benefit({ title, description, icon }: BenefitProps) {
    return (
        <section className="flex flex-col items-center">
            {icon && <i>{icon}</i>}
            <h3 className="text-2xl font-bold">{title}</h3>
            <p>{description}</p>
        </section>
    )
}