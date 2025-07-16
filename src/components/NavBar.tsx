import Image from "next/image"

export const NavBar = () => {
    return (
        <header>
            <nav>
                <div>
                    <Image src={'/img/Logo.png'} alt="Nexcent Logo" width={155} height={24} />
                </div>
            </nav>
        </header>
    )
}