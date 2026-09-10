import { useState } from "react";
import styled from "styled-components";
import type { ImgHTMLAttributes, ReactNode } from "react";
import ImageSkeleton from "../ImageSkeleton/ImageSkeleton";

interface LazyImageProps extends Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "children"
> {
  children?: ReactNode;
  className?: string;
}

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const StyledImage = styled.img<{ $loaded: boolean }>`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  transition:
    opacity 0.4s ease-out,
    transform 0.5s ease-out,
    filter 0.45s ease-out;
`;

export default function LazyImage({
  src,
  alt,
  className,
  children,
  onLoad,
  ...rest
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Wrapper className={className}>
      {!loaded && <ImageSkeleton />}

      <StyledImage
        src={src}
        alt={alt}
        $loaded={loaded}
        {...rest}
        onLoad={(event) => {
          setLoaded(true);
          onLoad?.(event);
        }}
      />

      {children}
    </Wrapper>
  );
}
