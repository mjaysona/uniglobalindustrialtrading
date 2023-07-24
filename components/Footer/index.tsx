import React from 'react';
import { AddressType } from '../../globals/Contact';
import Link from 'next/link';
import { SocialType } from '../../globals/Socials';
import classes from './index.module.scss';
import Container from '../Container';
import UniglobalLogo from '../UniglobalLogo';
import { Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { GlobalProps } from '../../pages/_app';
import ContactUsComponent from '../ContactUs';

const Footer: React.FC<GlobalProps> = ({ menu, contact, socials, brands }) => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

	const filteredBrands = brands.filter((brand) => brand.name !== 'Uniglobal');
	const sortedBrands = filteredBrands.sort((a, b) => a.priority - b.priority)

  return (
    <div className={classes['host']}>
      <Container>
        <footer className={[
          classes['footer'],
          'inverted',
        ].join(' ')}>
          <div className={classes['footer__navigate']}>
            <div className={classes['footer__navigate__menu']}>
              <div className={classes['footer__logo']}>
                <UniglobalLogo />
              </div>
              {menu.menuItems.map((item) => {
                return (
                  <div
                    className={classes['footer__navigate__menu__item']}
                    key={item.id}
                  >
                    <Link
                      href={`/${item.page.slug}`}
                      key={item.page.slug}
                    >
                      { item.name }
                    </Link>
                  </div>
                )
              })}
            </div>
            <div className={classes['footer__navigate__contacts']}>
              <ContactUsComponent contact={contact} socials={socials}/>
            </div>
          </div>
          <div className={classes['footer__partners']}>
            <h4><strong>PARTNERS</strong></h4>
            <div className={classes['footer__partners__logos']}>
							{brands && brands.length && sortedBrands
								.map((brand) => {
									const { logo, logoWhite } = brand.logo;
									const { priority } = brand;

									return (
										<div
											className={[
												classes['footer__partners__logo'],
												classes[priority ? 'footer__partners__logo__full' : ''],
											].join(' ')}
											key={brand.id}
										>
											<img src={logoWhite ? logoWhite.url : logo.url}></img>
										</div>
									);
								})
							}
            </div>
          </div>
        </footer>
        <p className={classes['copyright']}>
          © {getCurrentYear()} UNIGLOBAL Industrial Trading
        </p>
      </Container>
    </div>
  );
};

export default Footer;
