import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import type { ImgHTMLAttributes, ReactNode } from "react";
import ImageSkeleton from "./ImageSkeleton";

type ImageStatus = "loading" | "loaded" | "error";

interface LazyImageProps extends Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "children"
> {
  children?: ReactNode;
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
  onError,
  ...rest
}: LazyImageProps) {
  const [status, setStatus] = useState<ImageStatus>("loading");
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img || !img.complete) {
      setStatus("loading");
      return;
    }
    setStatus(img.naturalWidth > 0 ? "loaded" : "error");
  }, [src]);

  return (
    <Wrapper className={className}>
      {status === "loading" && <ImageSkeleton />}

      <StyledImage
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        $loaded={status === "loaded"}
        {...rest}
        onLoad={(event) => {
          setStatus("loaded");
          onLoad?.(event);
        }}
        onError={(event) => {
          setStatus("error");
          onError?.(event);
        }}
      />

      {children}
    </Wrapper>
  );
}
