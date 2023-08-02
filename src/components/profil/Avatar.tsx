import Image from "next/image";
import Link from "next/link";

const Avatar = () => {
  return (
    <Link href="/profil">
      <Image src="/profil.svg" width={24} height={24} alt="ikona profilu" />
    </Link>
  );
};

export { Avatar };
