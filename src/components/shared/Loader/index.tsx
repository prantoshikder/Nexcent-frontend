import { Spin } from "antd";

export default function Loader({
  className = "",
  screenHeight = "h-screen",
}: {
  className?: string;
  screenHeight?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center ${screenHeight} ${className}`}
    >
      <Spin />
    </div>
  );
}
