import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import axios from '../../axios'


function Body() {

  const [ models, setModels ] = React.useState([])

  React.useEffect(() => {
    async function fetchData() {
      const request = await axios.get("talents");
      setModels(request.data);
      }
      fetchData()
  }, [])

  console.log(models);

  return (
    <>
      <Slider autoplay={3000}>
          {models.map((item, index) => (
          <div
            key={index}
            style={{ background: `url('${item.image}') no-repeat center center` }}
          >
            <div className="center">
              <h1>{item.name}</h1>
            </div>
          </div>
        ))}
      </Slider>
    </>
  )
}

export default Body

