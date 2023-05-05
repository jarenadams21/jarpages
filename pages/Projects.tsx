import Navbar from './components/Navbar';
import styles from '../styles/Home.module.css';
import { ActionIcon, Badge, Card, Group, Menu, rem, Text, Title } from '@mantine/core';
import Image from 'next/image';
import timage123 from './images/timage123.jpeg';
import { IconDots, IconEye, IconFileZip, IconTrash } from '@tabler/icons-react';

export default function Project() {

    return (
        <>
        <Navbar/>
        <div className={styles.activeProjectsDisplay}>
            <h1>
                Active Projects
            </h1>
            <div className="activeProjectsList">
                <h2>
                    art-walk
                </h2>
                <h2>
                    LERN
                </h2>
                <h2>
                    spell-walker
                </h2>
            </div>
        </div>
        <div className={styles.projectCardGrid}>
        <CCard
         progressState="In Progress"
         title="art-walk"
         />
        <CCard
         progressState="Done"
         title="spell-walker"
         />
        </div>
        </>
    )
}

function CCard({ progressState, title }) {

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
              <Menu.Item icon={<IconEye size={rem(14)} />}>See code</Menu.Item>
              <Menu.Item icon={<IconTrash size={rem(14)} />} color="red">
                Delete all
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
          </Group>
        <Group position="apart" mt="lg" mb="lg">
        <Title weight={500}>{title}</Title>
      </Group>
      <Group position="apart" mt="md" mb="xs">
            <Text fz="xl"> Project description</Text>
            <Card.Section mr="xl" ml="xl">
                <Image width={175} height={175} src={timage123} alt="n/a"/>
            </Card.Section>
        </Group>
        </Card>
    )
}