import React from 'react'
import axios from '../../axios'

import './TalentPage.css'

import { useParams } from "react-router-dom";

import FemalePage from '../femalePage/FemalePage';
import MalePage from '../malePage/MalePage';

function TalentPage() {

  const [ model, setModel ] = React.useState({})
  const routeParams = useParams();

  React.useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`talents/${routeParams.id}`);
      setModel(request.data);
      console.log(model.gender);
      }
      fetchData()
  })

  switch (model.gender === "Female") {
    case true:
      return (<FemalePage
      model={{
        id:model.id,
        name:model.name,
        height:model.height,
        bust:model.bust,
        waist:model.waist,
        hips:model.hips,
        shoe:model.shoe,
        hair:model.hair,
        eyes:model.eyes,            
        image:model.image,      
      }}
      /> )
    case false:
      return (<MalePage
        model={{
          id:model.id,
          name:model.name,
          height:model.height,
          waist:model.waist,
          shoe:model.shoe,
          hair:model.hair,
          eyes:model.eyes,            
          image:model.image,
          chest:model.chest,        
        }}
        /> )
    default:
      return null;
  }

}

export default TalentPage

