import { Card } from './Card'

export const Cards = (props) => {
  return (
    <div className="cards-container">
        <Card {...props.cardsContent[0]}>
          <img src="https://www.survivorsuk.org/wp-content/uploads/2017/01/no-image.jpg" className="card-img-top" alt="card" />
        </Card>
        <Card {...props.cardsContent[1]} />
      </div>
  )
}
