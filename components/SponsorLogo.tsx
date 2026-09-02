import Image from "next/image";

type SponsorLogoProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
};

export function SponsorLogo({
  src,
  alt,
  className = "h-9 w-auto shrink-0",
  width = 160,
  height = 40,
}: SponsorLogoProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={{ width: "auto" }}
    />
  );
}
