import React from 'react';
import { Layout } from '../../collections/Page';
import { components } from '../../blocks';
import classes from './index.module.scss';
import Container from '../Container';
import { ContactUsBlockComponentProps } from '../../blocks/ContactUsBlock/Component';
import { ProductCollectionType } from '../../collections/Products';

type Props = {
  data?: ProductCollectionType,
  layout: Layout[],
} & ContactUsBlockComponentProps;

const RenderBlocks: React.FC<Props> = ({ layout, contact, socials }) => {
  const fullWidthBlocks: string[] = [
    'banner',
    'basicMultipleColumns',
    'middleBanner',
    'slidingCards',
  ];
  const sections: JSX.Element[] = [];

  const isFullWidthBlock = (blockType: string) => {
    return fullWidthBlocks.includes(blockType);
  };
  
  let i = 0;

  while (i < layout.length) {
    const block = {
      ...layout[i],
      ...layout[i].blockType === 'contactUs'
        ? { contact, socials }
        : {},
    };
    const Block: React.FC<any> = components[block.blockType];
    const Section: React.FC<{ background?: string }> = ({
      children,
      background,
    }) => (
      <section className={classes[background === 'gray' ? 'blocks--light' : '']}>
        { children }
      </section>
    );
    
    if (Block) {
      let section: JSX.Element[] = [];

      if (block.width === 'half') {
        const halfSections = [(
          <section key={i}>
            <Block {...block} />
          </section>
        )];

        while (i + 1 < layout.length && layout[i + 1].width === 'half') {
          const nextBlock = {
            ...layout[i + 1],
            ...layout[i + 1].blockType === 'contactUs'
              ? { contact, socials }
              : {},
          };
          const NextBlock: React.FC<any> = components[nextBlock.blockType];

          halfSections.push(
            <section key={i + 1}>
              <NextBlock {...nextBlock} />
            </section>
          );

          i++;
        }

        section.push(
          <div key={i} className={classes['blocks__half-sections']}>
            {halfSections}
          </div>
        );
      } else {
        section.push(
          <Section
            key={i}
            background={block.background}
          >
            <Block {...block} />
          </Section>
        )
      }

      if (!isFullWidthBlock(block.blockType)) {
        sections.push(
          <Section
            key={i}
            background={block.background}
          >
            <Container>
              {...section}
            </Container>
          </Section>
        );
      } else {
        sections.push(...section);
      }
    }
    
    i++;
  }

  return (
    <div className={classes['blocks']}>
      {sections}
    </div>
  );
};



export default RenderBlocks;
