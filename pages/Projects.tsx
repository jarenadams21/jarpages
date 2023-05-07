import Navbar from './components/Navbar';
import styles from '../styles/Home.module.css';
import { ActionIcon, Badge, Card, Group, Menu, rem, Text, Title } from '@mantine/core';
import Image from 'next/image';
import { IconDots, IconEye, IconFileZip, IconTrash } from '@tabler/icons-react';
import { projects } from './data/projects';
import TimelineBranch from './components/TimelineBranch';

export default function Project() {

    return (
        <>
        <Navbar/>
        <div className={styles.projects}>
        <div className={styles.projectsDisplayHeader}>
            <Title>
                Projects
            </Title>
        </div>
        <div className={styles.recentProjectActivity}>
        <Text fz="xl"> Recent Activity </Text>
        <TimelineBranch/>
        </div>
        <div className={styles.projectCardGrid}>
       {projects.map( (item, i) => {
           return <CCard
                key={i}
                progressState={item.state}
                title={item.name}
                image={item.image}
                description={item.description}
                actionsBundle={ {
                    repositoryLink: item.actions.repositoryLink,
                }
                }
           />
       })}
        </div>
        </div>
        </>
    )
}

function CCard({ progressState, title, image, description, actionsBundle }) {

    let stateColor = ""
    if (progressState === "In Progress") {
        stateColor = "pink"
    } else {
        stateColor = "green"
    }

    return (
        <Card className={styles.projectCard} shadow="sm" padding="lg" radius="md" withBorder>
            <Group position="apart" mt="xs">
            <Badge color={stateColor} variant="light">
          {progressState}
            </Badge>
            
            <Menu withinPortal position="bottom-end" shadow="sm">
            <Menu.Target>
              <ActionIcon>
                <IconDots size="1rem" />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item icon={<IconFileZip size={rem(14)} />}>Download zip</Menu.Item>
              <Menu.Item component="a" href={actionsBundle.repositoryLink} icon={<IconEye size={rem(14)} />}>See code</Menu.Item>
              <Menu.Item icon={<IconTrash size={rem(14)} />} color="red">
                Delete all
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
          </Group>
        <Group position="apart" mt="lg" mb="lg">
        <Title weight={500}>{title}</Title>
      </Group>
      <Group position="center" mt="md" mb="xs">
            <Text fz="lg"> {description} </Text>
            <Card.Section mr="xl" ml="xl">
                <Image width={175} height={175} src={image} alt="n/a"/>
            </Card.Section>
        </Group>
        </Card>
    )
}