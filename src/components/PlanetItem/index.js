import './index.css'

const PlanetItem = props => {
  const {details} = props

  const {name, imageUrl, description} = details

  return (
    <div>
      <img src={imageUrl} alt={`planet ${name}`} className="planet-image" />
      <h1 className="heading">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
