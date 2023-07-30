import React from 'react';
import classes from './index.module.scss';
import { HorizontalStepsBlockType } from './HorizontalStepsBlock';
import RichText from '../../components/RichText';

export const Component: React.FC<HorizontalStepsBlockType> = (props) => {
  const {
    title,
    description,
    steps: {
      description: stepsDescription,
      steps,
    },
  } = props;
  const stepDividers: JSX.Element[] = [];

  for (let i = 0; i < steps.length; i++) {
    stepDividers.push(
      <div key={i}>
        <div>
          <div></div>
        </div>
      </div>
    )
  }

  return (
    <div className={classes['horizontal-steps']}>
      <div className={classes['horizontal-steps__content']}>
        {title && (
          <div className={[
            classes['horizontal-steps__content__header'],
            classes['horizontal-steps__content--wrapped']
          ].join(' ')}>
            {title && <h2>{title}</h2>}
            {description && (
              <RichText content={description} />
            )}
          </div>
        )}
        <div className={classes['horizontal-steps__content__steps__container']}>
          <div
            className={classes['horizontal-steps__content__steps']}
            style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}
          >
            <div
              className={classes['horizontal-steps__content__steps__dividers']}
              style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}
            >
              {stepDividers}
            </div>
            {steps.map((step) => (
              <div key={step.id} className={classes['horizontal-step__step']}>
                <p className={classes['horizontal-step__step__image']}>
                  <img src={step.image.url} />
                </p>
              </div>
            ))}
          </div>
          <div
            className={classes['horizontal-steps__content__steps']}
            style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}
          >
            {steps.map((step) => (
              <div key={step.id} className={classes['horizontal-step__step']}>
                <p><strong>{step.name}</strong></p>
              </div>
            ))}
          </div>
        </div>
        <div className={classes['horizontal-steps__content--wrapped']}>
          {description && (
            <RichText content={stepsDescription} />
          )}
        </div>
      </div>
    </div>
  );
};
