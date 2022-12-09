import React from 'react';
import './article.css'

const Article = ({img_path,title,featured,datetime}) => {
  const date = new Date(datetime);
  const dateString = date.toDateString('en-AU').split(' ')
  const formatedDate = dateString[1]+' '+dateString[2]+', '+dateString[3]

  return (
    <article className={'gpt3__article '+(featured === true ?'featured': '')}>
      <div className='gpt3__article-image'>
        <img src={require(`../../assets/${img_path}`)} alt={title+" image"} />
      </div>
      <div className='gpt3__article-content'>
        <div className='gpt3__article-content__top'>
          <time dateTime={datetime}>{formatedDate}</time>
          <h3>{title}</h3>
        </div>
        <footer>
          <a href='#temp'>Read Full Article</a>
        </footer>
      </div>
    </article>
  )
}

export default Article