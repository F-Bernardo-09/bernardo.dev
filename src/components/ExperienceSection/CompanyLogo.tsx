import { useState } from "react";
import styled from "styled-components";
import type { Company } from "../../types";

const Logo = styled.div`
  flex-shrink: 0;

  width: 3rem;
  height: 3rem;

  display: grid;
  place-items: center;
  overflow: hidden;

  background-color: var(--bg-dark-accent);
  border: var(--border-default);
  border-radius: 0.5rem;

  color: var(--accent-green);
  font-family: var(--font-family-secondary);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-md);
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

interface CompanyLogoProps {
  company: Company;
}

export function CompanyLogo({ company }: CompanyLogoProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = company.logo && !imgFailed;

  return (
    <Logo>
      {showImage ? (
        <LogoImage
          src={company.logo!.src}
          alt={company.logo!.alt}
          onError={() => setImgFailed(true)}
        />
      ) : (
        <span aria-hidden="true">{company.logoInitial}</span>
      )}
    </Logo>
  );
}
