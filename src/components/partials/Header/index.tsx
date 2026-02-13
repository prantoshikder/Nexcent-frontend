import Container from "@/components/shared/Container";
import { Flex } from "antd";
import Image from "next/image";
import Link from "next/link";
import HeaderMenu from "./HeaderMenu";
import HeaderRight from "./HeaderRight";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white w-full py-4">
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
