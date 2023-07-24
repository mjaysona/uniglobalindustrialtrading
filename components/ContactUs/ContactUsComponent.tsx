import { Facebook, Mail, MapPin, Phone } from 'lucide-react';
import classes from './index.module.scss';
import { SocialType } from '../../globals/Socials';
import { AddressType } from '../../globals/Contact';
import Link from 'next/link';
import { ContactUsBlockComponentProps } from '../../blocks/ContactUsBlock/Component';

const ContactUsComponent: React.FC<ContactUsBlockComponentProps> = ({
  contact,
  socials,
}) => (
  <div className={classes['contact-us']}>
    <h4><strong>CONTACTS</strong></h4>
    <div className={[
      classes['contact-us__contacts__email'],
      classes['contact-us__label'],
    ].join(' ')}>
      <Mail size={16} />
      <a href={`mailto:${contact.email}`}>{contact.email}</a>
    </div>
    {contact.addresses && (
      contact.addresses.map((address: AddressType) => {
        return (
          <div className={classes['contact-us__locations']} key={address.id}>
            <div className="contact-us__locations__name">
              <h5>{address.name}</h5>
            </div>
            <div className={classes['contact-us__label']}>
              <MapPin size={16} />
              {address.address.link.isNewTab
                ? <a href={address.address.link.url} target='_blank'>
                  {address.address.link.label}
                </a>
                : <Link href={address.address.link.url}>
                  {address.address.link.label}
                </Link>
              }
            </div>
            <div className={classes['contact-us__label']}>
              <Phone size={16} />
              <a href={`tel:${address.contactNumber.replace(/\s/g,'')}`}>
                {address.contactNumber}
              </a>
            </div>
          </div>
        )
      })
    )}
    <h4><strong>FOLLOW US</strong></h4>
    {socials.socials?.length && (
      <div className="contacts__socials">
        {socials.socials.map((social: SocialType) => {
          return (
            <div key={social.id} className={classes['contact-us__label']}>
              <Facebook size={16} />
              <Link
                href={social.link.url}
                target={social.link.isNewTab && '_blank'}
                key={social.id}
              >
                {social.link.label}
              </Link> 
            </div>
          );
        })}
      </div>
    )}
  </div>
);

export default ContactUsComponent;
