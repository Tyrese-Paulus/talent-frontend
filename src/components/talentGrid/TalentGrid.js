import React from 'react'
import './TalentGrid.css'
import axios from '../../axios'
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom"


function TalentGrid() {
  const [ models, setModels ] = React.useState([])
  const [ talentId, setTalentId ] = useOutletContext();

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
            <Link key={item.id} to={`../talent/${item.id}`}>
              <div className="talent">
                <img className="talent__image" src={item.image} alt="" />
                <span className="talent__name">{item.name}</span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TalentGrid