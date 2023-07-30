import React from 'react';
import classes from './index.module.scss';
import { TeamBlockType } from './TeamBlock';
import RichText from '../../components/RichText';


export const Component: React.FC<TeamBlockType> = (props) => {
  const {
    teams,
  } = props;

  return (
    <div className={classes['team']}>
      {teams.map((team) => (
        <div className={classes['team__group']}>
          {team.type && <h2>{team.type}</h2>}
          <div className={[
            classes['team__group__members'],
            classes[!team.hasDescription ? 'team__group__members--no-description' : '']
          ].join(' ')}>
            {team.members.map((member) => (
              <div className={classes['team__group__member']}>
                <div className={classes['team__group__member__photo']}>
                  <img src={member.photo.url}></img>
                </div>
                <div className={classes['team__group__member__details']}>
                  <h4>{member.name}</h4>
                  <span><small>{member.position}</small></span>
                </div>
                {team.hasDescription && (
                  <RichText content={member.description} />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
