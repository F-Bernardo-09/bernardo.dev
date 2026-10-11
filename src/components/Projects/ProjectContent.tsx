import styled, { css } from "styled-components";
import type { ProjectContentBlock } from "../../types/models";

interface ProjectContentProps {
  blocks: ProjectContentBlock[];
}

const textBlock = css`
  width: 100%;
  max-width: 700px;
  margin-inline: auto;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

const SubHeading = styled.h2<{ $level: 2 | 3 }>`
  ${textBlock}
  margin-top: var(--spacing-sm);
  font-size: ${({ $level }) =>
    $level === 2 ? "var(--font-size-h3)" : "var(--font-size-h4)"};
  text-align: left;
`;

const Paragraph = styled.p`
  ${textBlock}
`;

const List = styled.ul<{ $ordered: boolean }>`
  ${textBlock}
  padding-left: var(--spacing-md);
  list-style: ${({ $ordered }) => ($ordered ? "decimal" : "disc")};
  color: var(--text-secondary);
  text-align: justify;

  li + li {
    margin-top: var(--spacing-xs);
  }

  li::marker {
    color: var(--accent-green);
  }
`;

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  margin: 0;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: var(--radius-card);
  background-color: var(--bg-dark-accent);
`;

const Caption = styled.figcaption`
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
  text-align: center;
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--spacing-sm);
`;

function renderBlock(block: ProjectContentBlock, index: number) {
  switch (block.type) {
    case "heading": {
      const level = block.level ?? 2;

      return (
        <SubHeading key={index} as={level === 3 ? "h3" : "h2"} $level={level}>
          {block.text}
        </SubHeading>
      );
    }

    case "paragraph":
      return <Paragraph key={index}>{block.text}</Paragraph>;

    case "list": {
      const ordered = Boolean(block.ordered);

      return (
        <List key={index} as={ordered ? "ol" : "ul"} $ordered={ordered}>
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex}>{item}</li>
          ))}
        </List>
      );
    }

    case "image":
      return (
        <Figure key={index}>
          <Image
            src={block.src}
            alt={block.alt}
            width={block.width}
            height={block.height}
            loading="lazy"
            decoding="async"
          />
          {block.caption && <Caption>{block.caption}</Caption>}
        </Figure>
      );

    case "gallery":
      return (
        <Gallery key={index}>
          {block.images.map((image, imageIndex) => (
            <Image
              key={imageIndex}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="lazy"
              decoding="async"
            />
          ))}
        </Gallery>
      );

    default:
      return null;
  }
}

export default function ProjectContent({ blocks }: ProjectContentProps) {
  return <ContentWrapper>{blocks.map(renderBlock)}</ContentWrapper>;
}
