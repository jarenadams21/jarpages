import { Timeline, Text } from '@mantine/core';
import { IconGitBranch, IconGitPullRequest, IconGitCommit, IconMessageDots } from '@tabler/icons-react';
import { projects } from '../data/projects';
import { Project } from '../data/projects';

export default function TimelineBranch() {

  function compareDates( a: Project, b: Project) {

    if ( a.actions.mostRecent.date < b.actions.mostRecent.date ) {
      return 1;
    }
    else if ( a.actions.mostRecent.date > b.actions.mostRecent.date ) {
      return -1;
    } else 
    return 0;
  }

  const sortedByDate = projects.sort( compareDates )

  return (
    <Timeline active={0} bulletSize={24} lineWidth={2}>
      {sortedByDate.map( (item, i) => {
        return (
          <Timeline.Item key={i} bullet={<IconGitBranch size={12} />} title={item.name + " - " + item.actions.mostRecent.actionName}>
          <Text color="dimmed" size="sm">{item.actions.mostRecent.actionDescription} </Text>
          <Text size="xs" mt={4}>{item.actions.mostRecent.date}</Text>
          </Timeline.Item>
        )
      })}
    </Timeline>
  );
}