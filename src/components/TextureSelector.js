import { useEffect, useState } from 'react'
import { useStore } from "../hooks/useStore"
import { useKeyboard } from "../hooks/useKeyboard"
import { dirtImg, grassImg, glassImg, logImg, woodImg, brickImg, redConcreteImg, whiteConcreteImg } from '../images/images'

const images = {
	dirt: dirtImg,
	grass: grassImg,
	glass: glassImg,
	wood: woodImg,
	log: logImg,
    brick: brickImg,
    redConcrete: redConcreteImg,
    whiteConcrete: whiteConcreteImg
}

export const TextureSelector = () => {
	const [visible, setVisible] = useState(false)
	const [activeTexture, setTexture] = useStore((state) => [state.texture, state.setTexture])
	const {
		dirt,
		grass,
		glass,
		wood,
		log,
        brick,
        redConcrete,
        whiteConcrete
	} = useKeyboard()

	useEffect(() => {
		const textures = {
			dirt,
			grass,
			glass,
			wood,
			log,
            brick,
            redConcrete,
            whiteConcrete
		}
		const pressedTexture = Object.entries(textures).find(([k, v]) => v)
		if (pressedTexture) {
			setTexture(pressedTexture[0])
		}
	}, [setTexture, dirt, grass, glass, wood, log, brick, redConcrete, whiteConcrete])



	useEffect(() => {
		const visibilityTimeout = setTimeout(() => {
			setVisible(false)
		}, 2000)
		setVisible(true)
		return () => {
			clearTimeout(visibilityTimeout)
		}
	}, [activeTexture])

	return visible && (
		<div className='absolute centered texture-selector'>
			{Object.entries(images).map(([k, src]) => {
				return (<img
					key={k}
					src={src}
					alt={k}
					className={`${k === activeTexture ? 'active' : ''}`}
				/>)
			})}
		</div>
	)
}