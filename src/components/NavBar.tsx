import Image from "next/image"
import Link from "next/link"

export const NavBar = () => {
    return (
        <header>
            <nav>
                <div>
                    <div>
                        <Image src={'/img/Icon.svg'} alt="Nexcent Logo" width={24} height={16} />
                        <Image src={'/img/Nexcent.svg'} alt="Nexcent Logo" width={77} height={14} />
                    </div>
                    <div>
                        <div>
                            <Link href={'#'}>Home</Link>
                            <Link href={'#'}>Features</Link>
                            <Link href={'#'}>Community</Link>
                            <Link href={'#'}>Blog</Link>
                            <Link href={'#'}>Pricing</Link>
                        </div>
                        <button>Register Now RightArrowVector.svg</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}