import React from 'react';
import { Layout } from '../../collections/Page';
import { components } from '../../blocks';
import classes from './index.module.scss';
import Container from '../Container';

type Props = {
  layout: Layout[],
}

const RenderBlocks: React.FC<Props> = ({ layout }) => {
  return (
    <div
      className={classes['blocks']}
    >
      {layout.map((block, i) => {
        const Block: React.FC<any> = components[block.blockType];

        if (Block) {
          return (
            <section key={i}>
              <Block {...block} />
            </section>
          );
        }

        return null;
      })}
    </div>
  );
};

export default RenderBlocks;
