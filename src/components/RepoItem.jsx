import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { GoRepoForked, GoStar, GoCode } from 'react-icons/go';

const UserItem = ({ repo }) => {
  return (
    <Grid item xs={12} sm={6} md={6} align='left'>
      <Card>
        <CardContent>
          <div className='repo-name'>
            <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
              {repo.name}
            </a>
          </div>
          <p>{repo.description}</p>
          {repo.language && (
            <span className='repo-info-extra'>
              <GoCode className='repo-info-icon' size='1.2em' /> {repo.language}
            </span>
          )}

          {repo.stargazers_count > 0 && (
            <span className='repo-info-extra'>
              <GoStar className='repo-info-icon' size='1.2em' />
              {repo.stargazers_count}
            </span>
          )}

          {repo.forks > 0 && (
            <span className='repo-info-extra'>
              <GoRepoForked className='repo-info-icon' size='1.2em' />
              {repo.forks}
            </span>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default UserItem;
