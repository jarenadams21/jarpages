import { StaticImageData } from 'next/image';
import timage123 from '../images/timage123.jpeg';

export interface Project {
    name: String,
    description: String,
    state: String,
    image: StaticImageData,
    actions: {
        repositoryLink: String,
        mostRecent: {
            actionName: String,
            actionDescription: String,
            date: String,
        }
    },
} 

const artwalk : Project = {
    name: "art-walk",
    description: "Find art that speaks to you!",
    state: "In Progress",
    image: timage123,
    actions: {
        repositoryLink: "https://github.com/jarenadams21/art-walk",
        mostRecent: {
            actionName: "Merge",
            actionDescription: "dbread import for collections page",
            date: "April 3, 2023"
        }
    },
    
}

const spellwalker: Project = {
    name: "spell-walker",
    description: "The Rust Programming Language chapter 8 benchmark project",
    state: "In Progress",
    image: timage123,
    actions: {
    repositoryLink: "https://github.com/jarenadams21/spell-walker",
    mostRecent: {
        actionName: "README update",
        actionDescription: "readme",
        date:  "April 7, 2023",
    }
    },
}

export const projects : Project[] = [
    artwalk,
    spellwalker,
]