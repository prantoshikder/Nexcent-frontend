import Container from "@/components/shared/Container";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { Flex } from "antd";
import Image from "next/image";
import Link from "next/link";
import HeaderMenu from "./HeaderMenu";
import HeaderRight from "./HeaderRight";

export default function Header() {
  const { showHeader } = useScrollDirection();

  return (
    <header
      className={`sticky top-0 right-0 left-0 z-10 transform bg-white py-4 transition-transform duration-300 ease-in-out ${showHeader ? "translate-y-0" : "-translate-y-full"}`}
    >
      <Container>
        <Flex align="center" justify="space-between" className="w-full">
          <Link href="/">
            <Image
              src={"/assets/logo/dark-logo.svg"}
              alt="Logo"
              height={24}
              width={155}
            />
          </Link>

          <HeaderMenu />

          <HeaderRight />
        </Flex>
      </Container>
    </header>
  );
}
