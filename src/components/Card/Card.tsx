import './Card.css'

interface CardProps {
    text: string
    image: string
    onClick: () => void
}

export default function Card({ image, text, onClick }: CardProps) {
    return (
        <div className='card'>
                <img src={image} alt={'card'} onClick={() => onClick()} />
            <p>{text}</p>
        </div>
    )
}
