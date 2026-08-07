import styled from "styled-components";
import pt from "../../locales/pt-br.json";

const StyledFooter = styled.footer`
  padding: var(--spacing-lg) 0;
  border-top: var(--border-default);
  margin-top: calc(2 * var(--spacing-xl));

  @media (max-width: 480px) {
    padding: var(--spacing-md) 0;
    margin-top: var(--spacing-xl);
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-sm);
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
`;

export default function Footer() {
  const { footer } = pt;

  return (
    <StyledFooter>
      <div className="container">
        <FooterContent>
          <Copyright>{footer.copyright}</Copyright>
        </FooterContent>
      </div>
    </StyledFooter>
  );
}
