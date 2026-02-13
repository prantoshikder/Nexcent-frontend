import { Flex } from "antd";
import Link from "next/link";

export default function HeaderMenu() {
  const navLinks = [
    "Home",
    "Service",
    "Feature",
    "Product",
    "Testimonial",
    "FAQ",
  ];

  return (
    <Flex align="center" gap={50}>
      {navLinks.map((link) => (
        <Link
          key={link}
          href={`#${link.toLowerCase()}`}
          className="text-[#18191F] text-base"
        >
          {link}
        </Link>
      ))}
    </Flex>
  );
}
