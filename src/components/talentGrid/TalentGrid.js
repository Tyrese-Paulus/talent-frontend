import React from 'react'
import './TalentGrid.css'
import axios from '../../axios'


function TalentGrid() {

  const [ models, setModels ] = React.useState([])

  React.useEffect(() => {
    async function fetchData() {
      const request = await axios.get("talents");
      setModels(request.data);
      }
      fetchData()
  }, [])

  return (
    <div className="talent__grid">
      <div className="talent__list">
        {models.map((item) => {
          return(
            <div className="talent">
              <img className="talent__image" src={item.image} alt="" />
              <span className="talent__name">{item.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TalentGrid