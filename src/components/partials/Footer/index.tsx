import Container from "@/components/shared/Container";
import { Flex, Input, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDribbble, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-[#263238]">
      <Container className="grid grid-cols-1 md:grid-cols-5 gap-8 py-12">
        <Flex vertical className="col-span-2" gap={24}>
          <Link href="/">
            <Image
              src={"/assets/logo/light-logo.svg"}
              alt="Logo"
              height={24}
              width={155}
            />
          </Link>

          <Flex vertical>
            <Typography.Text className="text-[#F5F7FA]">
              Copyright &#169; 2020 Nexcent ltd.
            </Typography.Text>
            <Typography.Text className="text-[#F5F7FA]">
              All rights reserved
            </Typography.Text>
          </Flex>

          <Flex className="center" gap={16}>
            <div className="size-8 bg-[#3c474c] rounded-full flex items-center justify-center">
              <FaInstagram color="#fff" />
            </div>

            <div className="size-8 bg-[#3c474c] rounded-full flex items-center justify-center">
              <FaDribbble color="#fff" />
            </div>

            <div className="size-8 bg-[#3c474c] rounded-full flex items-center justify-center">
              <FaTwitter color="#fff" />
            </div>

            <div className="size-8 bg-[#3c474c] rounded-full flex items-center justify-center">
              <FaYoutube color="#fff" />
            </div>
          </Flex>
        </Flex>

        <Flex vertical gap={16}>
          <Typography.Text className="text-[#F5F7FA] text-lg font-medium">
            Company
          </Typography.Text>

          <Flex vertical gap={8}>
            <Link href={"/"} className="text-[#F5F7FA]">
              About Us
            </Link>

            <Link href={"/"} className="text-[#F5F7FA]">
              Blog
            </Link>
            <Link href={"/"} className="text-[#F5F7FA]">
              Contact us
            </Link>
            <Link href={"/"} className="text-[#F5F7FA]">
              Pricing
            </Link>
            <Link href={"/"} className="text-[#F5F7FA]">
              Testimonial
            </Link>
          </Flex>
        </Flex>

        <Flex vertical gap={16}>
          <Typography.Text className="text-[#F5F7FA] text-lg font-medium">
            Support
          </Typography.Text>

          <Flex vertical gap={8}>
            <Link href={"/"} className="text-[#F5F7FA]">
              Help Center
            </Link>
            <Link href={"/"} className="text-[#F5F7FA]">
              Terms of service
            </Link>
            <Link href={"/"} className="text-[#F5F7FA]">
              Legal
            </Link>
            <Link href={"/"} className="text-[#F5F7FA]">
              Privacy policy
            </Link>
            <Link href={"/"} className="text-[#F5F7FA]">
              Status
            </Link>
          </Flex>
        </Flex>

        <Flex vertical gap={16}>
          <Typography.Text className="text-[#F5F7FA] text-lg font-medium">
            Stay up to date
          </Typography.Text>

          <Input
            size="large"
            placeholder="Your email address"
            variant="borderless"
            className="bg-[#3c474c] border-0 text-[#F5F7FA]"
            suffix={<FaTelegramPlane color="#fff" size={20} />}
          />
        </Flex>
      </Container>
    </div>
  );
}
