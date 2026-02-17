import { Button, Flex, Typography } from "antd";
import Image from "next/image";
import Container from "../shared/Container";

export default function DesignIntro() {
  return (
    <div className="bg-white py-12">
      <Container>
        <div className="grid grid-cols-7 items-center gap-4">
          <div className="h-108.25 sw-108.25 relative col-span-3">
            <Image
              src={"/assets/design-bg.svg"}
              alt="design-bg"
              // height={433}
              // width={441}
              fill
              priority
              className="h-full w-full"
            />
          </div>

          <Flex vertical gap={16} className="col-span-4">
            <Typography.Title className="text-[#4D4D4D] mb-0 text-4xl font-semibold">
              How to design your site footer like we did
            </Typography.Title>

            <Typography.Text className="text-[#717171] text-sm mb-5">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </Typography.Text>

            <Button
              type="primary"
              size="large"
              className="bg-[#4CAF4F] text-white font-medium max-w-max"
              variant="solid"
            >
              Learn More
            </Button>
          </Flex>
        </div>
      </Container>
    </div>
  );
}
