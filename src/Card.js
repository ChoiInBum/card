function Card({name, age, profession}) {
    return (
      <div className="card">
        <h2>Name : {name}</h2>
        <p>Age : {age}</p>
        <p>Profession : {profession}</p>     
      </div>
    );
} 

export default Card;