function Card( {ele} ) {
    return (
        <>
        <div key={ele.id} className="card">
            <div className="divImg">
              <img src={ele.image} alt={ele.name} />
            </div>
            <div className="divText">
              <h3>{ele.name}</h3>
              <p>Especie: {ele.species}</p>
            </div>
          </div>
        </>
    )
}

export default Card;