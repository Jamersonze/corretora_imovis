import Navigation from "./Navigation"

type HeadTitleProps = {
    title: string
}

export default function HeaderBar({ title }: HeadTitleProps) {

    const links = [
        {title: "Home", url: "/"},
        {title: "Sobre", url: "/sobre"},
        {title: "Imóveis", url: "/imoveis"},
        {title: "Contato", url: "/contato"}
    ]

    return (
        <header className="flex flex-row items-center justify-evenly m-auto bg-slate-300">
            <h1>{title}</h1>
            <Navigation links={links}/>
        </header>
    )
}