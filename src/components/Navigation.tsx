type Link = {
    title?: string
    url: string
}

type Props = {
    links: Link[]
}

export default function Navigation({ links }: Props) {
    return (
        <nav className="py-4">
            <ul className="flex flex-row gap-x-6">
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    
    )
}