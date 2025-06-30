import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-sections">
      {[
        {
          title: 'Shop',
          links: ['All Products', 'Categories', 'Special Deals', 'New Arrivals'],
          base: '/products'
        },
        {
          title: 'Help',
          links: ['FAQ', 'Shipping Info', 'Returns & Exchanges', 'Contact Us'],
          base: '/faq'
        },
        {
          title: 'About',
          links: ['Our Story', 'Blog', 'Careers', 'Privacy Policy'],
          base: '/about'
        }
      ].map((section, i) => (
        <div className="footer-section" key={i}>
          <h4>{section.title}</h4>
          <ul>
            {section.links.map((text, j) => (
              <li key={j}>
                <a href={`${section.base}`}>{text}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="footer-section">
        <h4>Connect</h4>
        <div className="social-links">
          {['facebook', 'twitter', 'instagram', 'pinterest'].map((platform) => (
            <a key={platform} href={`https://${platform}.com`} aria-label={platform}>
              <i className={`fab fa-${platform}`}></i>
            </a>
          ))}
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} E-Commerce. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
