import React from 'react';
import { Article } from '../../components';
import jsonFile from './blogData.json';
import './blog.css'

const articleData = jsonFile.blogDate;

const Blog = () => {
  return (
    <section className='gpt3__blog section__margin' id="blog">
      <div className='gpt3__blog-title'>
        <h2 className='gradient__text'>A lot is happening, <br/>We are blogging about it.</h2>
      </div>
      <div className='gpt3__blog-aticles'>
        {
          articleData.map((article,index)=>(
            index <= 4
            ? (<Article 
                img_path={article.img}
                title={article.title}
                featured={article.featured}
                datetime={article.datetime}
                key={index}
              />)
            : null
          ))
        }
      </div>
    </section>
  )
}

export default Blog