import React from 'react'
import './list-with-heading.css'

const ListwithHeading = ({heading,links}) => {
  return (
    <div className='list-box'>
      <h3>{heading}</h3>
      <ul>
        {links.map((link,index)=>(
          <li key={index}><a 
          href={link.type === 'phone' ? 'tel:'+link.url
            : link.type === 'email' ? 'mailto:'+link.url
            : link.url
          }
          >
          {link.name}
          </a></li>
        ))}
      </ul>
    </div>
  )
}

export default ListwithHeading