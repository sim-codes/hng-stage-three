import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
    return (
    <Link href="/">
        <Image src="/masterChefLogo.png" alt="MedCare Logo" width={88} height={80} />
    </Link>
    )
}