import { NearestFilter, TextureLoader, RepeatWrapping } from 'three'

import {
	dirtImg,
	logImg,
	grassImg,
	glassImg,
	woodImg,
    brickImg,
    redConcreteImg,
    whiteConcreteImg,
    stoneImg,
    bedrockImg,
    obsidianImg
} from './images'

const dirtTexture = new TextureLoader().load(dirtImg)
const logTexture = new TextureLoader().load(logImg)
const grassTexture = new TextureLoader().load(grassImg)
const glassTexture = new TextureLoader().load(glassImg)
const woodTexture = new TextureLoader().load(woodImg)
const groundTexture = new TextureLoader().load(grassImg)
const brickTexture = new TextureLoader().load(brickImg)
const redConcreteTexture = new TextureLoader().load(redConcreteImg)
const whiteConcreteTexture = new TextureLoader().load(whiteConcreteImg)
const stoneTexture = new TextureLoader().load(stoneImg)
const bedrockTexture = new TextureLoader().load(bedrockImg)
const obsidianTexture = new TextureLoader().load(obsidianImg)

dirtTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;
brickTexture.magFilter = NearestFilter;
redConcreteTexture.magFilter = NearestFilter;
whiteConcreteTexture.magFilter = NearestFilter;
stoneTexture.magFilter = NearestFilter;
bedrockTexture.magFilter = NearestFilter;
obsidianTexture.magFilter = NearestFilter;
groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping

export {
	dirtTexture,
	logTexture,
	grassTexture,
	glassTexture,
	woodTexture,
	groundTexture,
    brickTexture,
    redConcreteTexture,
    whiteConcreteTexture,
    stoneTexture,
    bedrockTexture,
    obsidianTexture
}