import React from 'react'
import axios from '../../axios'

import './TalentGrid.css'

import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function TalentGrid() {
  const [ models, setModels ] = React.useState([])
  const [ talentId, setTalentId ] = useOutletContext();
  const routeParams = useParams();
  const navigate = useNavigate()


  React.useEffect(() => {

    async function fetchData() {
      const request = await axios.get(`talents/${routeParams.location}/${routeParams.gender}/${routeParams.organisation}`);
      setModels(request.data);
      console.log(models);
      }
      fetchData()
      
  },[,navigate])

  return (
    <section className="talentGrid">
      <div>
        {models.map((item) => {
          return(
            <Link key={item.id} to={`../talent/${item.id}`}>
              <article>
                <img src={item.image} alt="" />
                <span>{item.name}</span>
              </article>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default TalentGrid

