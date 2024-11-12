type BenefitHeadlineProps = {
    name: string
    title: string
    paragraph: string
    cta_text: string
    cta_action: () => void
    reverse?: boolean
}

export default function BenefitHeadline({ name, title, paragraph, cta_text, cta_action, reverse }: BenefitHeadlineProps) {
    
    const headlineClass = `flex ${reverse ? "flex-row-reverse" : "flex-row"} justify-center items-center gap-20 my-[72px] mx-[120px]`

    return (
        <section className={headlineClass}>
          <article>
            <h4>{name}</h4>
            <h2 className="font-bold text-5xl">{title}</h2>
            <p className="text-2xl my-6">{paragraph}</p>
            <div className="flex flex-row gap-x-4 items-center">
              <button className="bg-slate-300 px-6 py-3 rounded hover:bg-slate-400 transition ease-in-out" onClick={cta_action}>{cta_text}</button>
            </div>
          </article>
          <img className="max-w-[560px] max-h-[640px]" src="Casa.jpeg" alt="Casa moderna com um terraço verde" />
        </section>
    )
}