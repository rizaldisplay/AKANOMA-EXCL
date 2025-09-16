import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="block">
      <Image
        src="/images/logo/Akanoma.webp"
        alt="logo"
        width={135}
        height={32}
        className="w-32 md:w-40 h-auto"
        quality={100}
        priority
      />
    </Link>
  );
};

export default Logo;
