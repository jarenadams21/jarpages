import { StaticImageData } from 'next/image';
import timage123 from '../images/timage123.jpeg';

interface Project {
    name: String,
    description: String,
    state: String,
    image: StaticImageData,
    actions: {
        repositoryLink: String,
    },
} 

const artwalk : Project = {
    name: "art-walk",
    description: "Find art that speaks to you!",
    state: "In Progress",
    image: timage123,
    actions: {
        repositoryLink: "https://github.com/jarenadams21/art-walk",
    },
}

const spellwalker: Project = {
    name: "spell-walker",
    description: "The Rust Programming Language chapter 8 benchmark project",
    state: "In Progress",
    image: timage123,
    actions: {
    repositoryLink: "https://github.com/jarenadams21/spell-walker",
    },
}

export const projects : Project[] = [
    artwalk,
    spellwalker,
]