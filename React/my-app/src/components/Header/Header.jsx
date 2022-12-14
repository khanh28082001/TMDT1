import React, {useRef,useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import './header.css'
import logo from'../../assets/images/logo1.png'
import userIcon from'../../assets/images/user-icon.png'
import {motion} from 'framer-motion'

import { Container, Row } from 'react-bootstrap';
const nav__links = [
  {
    path:'home',
    display:'Trang chủ'
  },
  {
    path:'shop',
    display:'Sản phẩm'
  },
  {
    path:'cart',
    display:'Giỏ hàng'
  },
]
export const Header = () => {

  const headerRef = useRef(null)

  const menuRef = useRef(null)

  const stickyHeaderFunc = ()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop
        > 80){
          headerRef.current.classList.add('sticky__header');
        } else{
          headerRef.current.classList.remove('sticky__header');
        }
    });
  };

  useEffect(()=>{
    stickyHeaderFunc();
    return()=> window.removeEventListener('scroll', stickyHeaderFunc);
  });

  const menuToggle = () => menuRef.current.classList.toggle('active__menu')

  return <header className="header" ref={headerRef}>
    <Container>
      <Row>
       <div className="nav__wrapper">
        <div className="logo">
          <img src={logo} alt="logo" />
          <div>
            <h1>Funirture</h1>
          
          </div>
        </div>
        <div className="navigation" ref={menuRef} onClick={menuToggle}>
          <ul className="menu">
            {
              nav__links.map((item,index)=>(
                <li className="nav__item">
                <NavLink to={item.path}
                className={(navClass)=>
                navClass.isActive ? "nav__active" : ""
                }
                >{item.display}</NavLink>
            </li>

              ))
            }
           
          </ul>

        </div>
        <div className="nav__icons">
          <span className='fav__icon'>
            <i class="ri-heart-line"></i>
            <span className='badge'>1</span>
            </span>
       
          <span className='cart__icon'>
            <i class="ri-shopping-bag-line"></i>
            <span className='badge'>1</span>
            </span>
          

          <span>
            <motion.img whileTap={{scale:1.2}} src={userIcon} alt="" />
            </span>
            <div className="mobile__menu">
            <span onClick={menuToggle}>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      
       </div>
        
      </Row>
    </Container>
  </header>
  
};
export default Header;