import React, { Fragment } from 'react';
import RichText from '../../components/RichText';
import classes from './index.module.css';
import Container from '../../components/Container';
import Card from '../../components/Card';

export type Type = {
  blockType: 'content'
  blockName?: string
  content: unknown
}

export const Component: React.FC<Type> = (props) => {
  const { content } = props;

  return (
    <Fragment>
      <Container>
        <div className={classes['cards-section']}>
          <RichText
            content={content}
            className={classes.content}
          />
          <div className={classes['cards-section__list']}>
            <Card>
              Test
            </Card>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};
