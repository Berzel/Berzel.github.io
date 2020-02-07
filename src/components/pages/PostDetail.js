import React from 'react'

import AppLayout from '../layouts/AppLayout'
import logo from '../../images/logo.png'
import blog1 from '../../images/blog/blog-1.jpg'
import blog3 from '../../images/blog/blog-3.jpg'

const PostDetail = () => {
  return (
    <AppLayout>
      <div className="main-layout__content">
        <div className="main-layout__content__header">
          <div className="banner">
            <div className="banner__body">
              <h2 className="banner__body__title">
                Berzel's Blog
                        </h2>
              <h3 className="banner__body__sub-title">
                An inside scoop on Berzel's daily thoughts <br /> and epiphanies...
                        </h3>

              <div className="banner__body__buttons">
                <a href="blog.html" className="btn scaled">Read the blog</a> <a href="video.html" className="btn">Watch videos</a>
              </div>
            </div>
          </div>
        </div>

        <div className="main-layout__content__body">
          <div className="blog">
            <div className="blog__post">
              <div className="blog__post__author">
                <img src={logo} alt="Author" />
                <p style={{ marginTop: '0.8em' }} className="blog__item__author__name">Berzel Best<span className="blog__date"> &mdash; 25 Sep 2019</span></p>
              </div>
              <h2 className="blog__post__title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, hic alias veritatis architecto assumenda voluptatem, odit recusandae illo modi nisi nostrum itaque, id et quaerat cum asperiores tempora fugiat porro.</h2>
              <div className="blog__post__body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eos, nesciunt atque iste minus officia perferendis accusantium excepturi officiis nam qui facilis <a href="/">velit aperiam dolorem recusandae distinctio aspernatur dolorum</a> ? Quaerat similique incidunt doloremque itaque, quae mollitia. Non vel veniam sit? Et eos cumque totam reiciendis veritatis ipsam nihil nesciunt nulla.</p>
                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ea ipsum facere facilis neque incidunt magni velit eum iusto et nisi maiores atque consequatur praesentium veritatis, animi ad alias tempore.</h3>
                <p>Aspernatur molestiae facilis voluptate. Hic voluptatem itaque porro eveniet, eum saepe aperiam reprehenderit in, similique eligendi, omnis ipsa ratione. Vel laborum suscipit, voluptatum tempore repudiandae explicabo atque ut voluptate ipsa sint. Amet dolor nemo iusto doloremque quod, enim harum nesciunt a quae, dignissimos vitae dolores error? Iste ipsam inventore nisi.</p>
                <p>Tempora iste obcaecati voluptate earum debitis ipsam rem alias voluptatem nemo molestias minus, quis quos iure nulla error vitae. Aliquam unde tempore architecto voluptatem ullam sapiente accusantium ducimus atque labore assumenda neque aut voluptatibus magni ipsam in delectus, ut aperiam numquam aliquid, dicta temporibus nemo totam eos? Ipsa, obcaecati impedit.</p>
                <div className="blog__post__body__img"><img src={blog1} alt="Blog post " /></div>
                <p>Quia excepturi sequi sapiente, dolor nisi autem veritatis. Ratione consequatur sapiente nulla quisquam recusandae voluptas fuga aut sunt quod molestias possimus ea exercitationem, ducimus architecto culpa a. Tempore illo deleniti iusto harum aliquam, inventore commodi quis quod quasi saepe excepturi laborum unde, ex doloremque odio accusantium aspernatur tempora id exercitationem.</p>
                <p>Dolores laboriosam a eos aperiam officia? A, nulla quaerat et, eaque magni porro dolores labore officia, atque beatae qui. Laudantium perferendis voluptate voluptatibus blanditiis natus commodi recusandae non, ea cupiditate doloremque aliquid, excepturi quam soluta autem assumenda deleniti deserunt atque repellat debitis sapiente. Architecto quod iure, suscipit quis cupiditate at!</p>
                <p>Eius aut dignissimos, voluptas repellat vero quis inventore esse facere reiciendis assumenda obcaecati dolorem ullam quam maiores, quisquam nihil error, consectetur molestiae dolor illo eos doloribus. Mollitia nobis reprehenderit nihil iste quam molestiae minus quas cum vel illum sequi numquam, unde voluptas quod officia expedita quisquam! A enim suscipit distinctio.</p>
                <div className="blog__post__body__img"><img src={blog3} alt="Blog post" /></div>
                <p>Itaque reprehenderit voluptate minima minus quaerat ea. Ad libero architecto provident ipsam quia et quibusdam at quaerat tenetur iure quod repellendus ex repellat iusto voluptatum labore, molestias totam. Dicta odio veritatis non sed iste perspiciatis hic sit, asperiores voluptatem deleniti possimus, tenetur exercitationem nobis commodi labore iure dignissimos blanditiis nemo!</p>
                <p>Illo, ullam. Saepe hic a, harum distinctio adipisci corrupti eaque earum nesciunt eius dolorem porro sequi id odio eum perferendis asperiores dicta! Repudiandae explicabo deleniti illo suscipit repellat repellendus optio eligendi ratione reiciendis quisquam iste sint eveniet aspernatur pariatur tenetur culpa sunt consequuntur placeat laboriosam, labore ullam rem. A, adipisci?</p>
                <p>Accusantium dignissimos deleniti quas aliquid placeat, minima, ea blanditiis dolor ut amet quo cupiditate dolores? Quam dolores quos aliquam sit fugiat, doloribus porro cumque eaque ut repellat quaerat, ducimus hic architecto aspernatur nesciunt ipsam consectetur! Tenetur quaerat pariatur blanditiis! Numquam libero aliquid ipsa eaque culpa itaque. Ut maxime voluptas hic!</p>
                <p>Quae, similique. Odit est incidunt laborum aut, eum aliquam? Vel sit deleniti repellat cupiditate ipsam saepe dicta, sequi iste aliquam dolore illum optio eligendi maxime asperiores in quia, dolores eveniet! Nostrum non placeat sapiente ducimus asperiores qui! Nesciunt provident quia veritatis, deserunt nemo nam. Asperiores odio debitis expedita similique dignissimos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default PostDetail
