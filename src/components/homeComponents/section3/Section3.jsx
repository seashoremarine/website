import React, { useEffect, useState } from 'react'
import './Section3.css'
import { boxData } from '../../../services/Data'
import logo from '../../../assets/Seashore.png'

const Section3 = () => {
  const [id, setId] = useState(1)
  const [data, setData] = useState()
  const [flip, setFlip] = useState(false)

  const handleClick = (clickedId) => {
    if (clickedId === id) return

    setFlip(true)
    
    setTimeout(() => {
      setId(clickedId)
      setFlip(false)
    }, 200) // match with CSS duration
  }

  useEffect(() => {
    const isData = boxData.find((each) => each.id == id)
    setData(isData)
  }, [id])

  return (
    <div className='container section-3'>
      <div className="section3-box-parent">
        <div className="left-box">
          {boxData.length > 0 ? boxData.map((each) => (
            <div
              key={each.id}
              onClick={() => handleClick(each.id)}
              className="left-child-box"
              style={id === each.id ? { backgroundColor: 'white', color: 'black' ,border:'1px solid black'} : {}}
            >
              <h1 style={id === each.id ? { color: 'black' } : {}}>{each.title}</h1>
              <button style={id === each.id ? { color: 'black' } : {}}>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          )) : ''}
        </div>
<div className='flip-container'>
  <div className={`flip-card ${flip ? 'flip' : ''}`}>
    <div className="flip-card-inner">
      {data &&
        <div className="right-box">
          <div className='right-box-heading'>
            <h1>{data.title}</h1>
            <button><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div>
            <p>{data.content}</p>
          </div>
          <img src={logo} alt="" />
        </div>
      }
    </div>
  </div>
</div>

      </div>
    </div>
  )
}

export default Section3
