
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
         <>
            <Link href={"/"}>
                <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={150}
                    height={150}
                    className="
                    w-22 px-3
                  "
                    />
            </Link>
    </> 
    );
}
 
export default Logo;