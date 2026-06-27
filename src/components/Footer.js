import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-left">
          <h3>CONTACT DETAILS</h3>
          <p className="footer-address">
            <strong>Regd Office:</strong> Pritam Nagar,<br/>
            Dhooman Ganj, Prayagraj<br/>
            (Allahabad), Uttar Pradesh,<br/>
            PinCode- 211001
          </p>
          <p className="footer-email">
            Email:<br/>
            <a href="mailto:info@bsseonline.com">info@bsseonline.com</a>
          </p>
        </div>

        <div className="footer-right">
          <p className="copyright">
            © Official 2016-2022 Board Of Senior<br/>
            Secondary Education. All Rights Reserved.
          </p>
          <Image 
            src="/msme_logo_1782533308680.png" 
            alt="MSME Logo" 
            width={80} 
            height={80} 
            className="msme-logo-footer"
          />
        </div>

      </div>
    </footer>
  );
}
