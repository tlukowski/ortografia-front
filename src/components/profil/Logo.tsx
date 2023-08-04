import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="max-w-[200px]">
      <Image src="/logo.svg" width={295} height={32} alt="Logo" />
    </Link>
  );
};

export { Logo };
                                                                                                                                                                                                                                                                    