import React from 'react';
import RichText from '../../components/RichText';
import classes from './index.module.scss';
import { MessageBubblesBlockType } from './MessageBubblesBlock';
import Container from '../../components/Container';

export const Component: React.FC<MessageBubblesBlockType> = (props) => {
  const {
    title,
    description,
    backgroundImage,
    noAvatarImage,
    message,
  } = props;

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage.url})` }}
      className={classes['host']}
    >
      <div className={classes['message-bubbles']}>
        <div className={classes['message-bubbles__header']}>
          {title && (<h2>{title}</h2>)}
          {description && <RichText content={description} />}
        </div>
        {message.length && (
          <div className={classes['message-bubbles__grouped-items']}>
            {message.map(({avatar, message, name, subName, id}) => (
              <div
                className={classes['message-bubbles__item']}
                key={id}
              >
                <div className={classes['message-bubbles__item__avatar']}>
                  <img src={avatar ? avatar.url : noAvatarImage.url } />
                </div>
                <div className={classes['message-bubbles__item__message-bubble']}>
                  <p>{message}</p>
                  <h5>{name}</h5>
                  <span>{subName}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
