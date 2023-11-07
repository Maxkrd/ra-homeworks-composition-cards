export const Card = (props) => {
  return (
    <div className="card">
        {props.children}
        <div className="card-body">
          <h5 className="card-title">{props.header}</h5>
          <p className="card-text">{props.text}</p>
          <a href="#" className="btn">{props.button}</a>
        </div>
      </div>
  )
}
