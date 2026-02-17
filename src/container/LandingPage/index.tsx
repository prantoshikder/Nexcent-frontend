"use client";

import DesignIntro from "@/components/DesignIntro";
import { Button, Flex, Typography } from "antd";

export default function LandingPage() {
  return (
    <div>
      <DesignIntro />

      <Flex vertical align="center" gap={20} className="py-10">
        <Typography.Title
          level={5}
          className="text-center text-[#4D4D4D] font-semibold text-[64px] leading-19 mb-0"
        >
          Pellentesque suscipit <br /> fringilla libero eu.
        </Typography.Title>

        <Button
          type="primary"
          size="large"
          className="bg-[#4CAF4F] text-white font-medium"
          variant="solid"
        >
          Get a Demo
        </Button>
      </Flex>
    </div>
  );
}
