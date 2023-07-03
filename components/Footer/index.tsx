import React from 'react';
import { MenuType } from '../../globals/Menu';
import { ContactType } from '../../globals/Contact';
import Link from 'next/link';
import { SocialsType } from '../../globals/Socials';
import { LinkType } from '../../fields/link';
import classes from './index.module.scss';

type Props = {
  menu: MenuType,
  contact: ContactType,
  socials: SocialsType,
};

const Footer: React.FC<Props> = ({ menu, contact, socials }) => {
  return (
    <footer className={classes.footer}>
      <div>
        <div className="footer__menu">
          {menu.menuItems.map((item) => {
            return (
              <Link
                href={`/${item.link.page.slug}`}
                key={item.link.page.slug}
              >
                { item.link.label }
              </Link>
            )
          })}
        </div>
        
        <div className="footer__contacts">
          <div className="footer__contacts__email">
            {contact.email}
          </div>
          {contact.addresses && (
            contact.addresses.map((address) => {
              return (
                <div className="footer__locations" key={address.id}>
                  <div className="footer__locations__name">
                    {address.name}
                  </div>
                  <div className="footer__locations__address">
                    {address.address}
                  </div>
                  <div className="footer__locations__contact-number">
                    {address.contactNumber}
                  </div>
                </div>
              )
            })
          )}
          {socials.socials?.length && (
            <div className="footer__contacts__socials">
              {socials.socials.map((social: LinkType) => {
                return (
                  <Link
                    href={social.link.url}
                    target={social.link.isNewTab && '_blank'}
                    key={social.id}
                  >
                    {social.link.label}
                  </Link> 
                );
              })}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
