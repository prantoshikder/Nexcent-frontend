import { Button, Flex } from "antd";

export default function HeaderRight() {
  return (
    <Flex align="center" gap={20}>
      <Button type="link" size="large" className="text-[#4CAF4F] font-medium">
        Login
      </Button>

      <Button
        type="primary"
        size="large"
        className="bg-[#4CAF4F] text-white font-medium"
        variant="solid"
      >
        Sign Up
      </Button>
    </Flex>
  );
}
