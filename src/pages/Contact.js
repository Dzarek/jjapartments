import React from "react";
import MyForm from "../components/MyForm";
// import GoogleMaps from "../components/GoogleMaps";

const Contact = () => {
  return (
    <>
      <div className="contactPage">
        <div className="formik">
          <div className="myForm">
            <MyForm />
          </div>
        </div>
        <div className="contactMedia">
          <section>
            <div className="Address">
              <h3>Address</h3>
              <p>
                <strong>JJ APARTMENTS</strong>
              </p>
              <p>Niewiadoma 99 Street</p>
              <p>00-000 Cracow</p>
              <p>Phone: 00 00 00 000</p>
              <p>E-mail: rezerwacja@jjapartments.pl</p>
            </div>
            <div className="Bank">
              <h3>Bank</h3>
              <p>
                <strong>JJ APARTMENTS Sp z o.o.</strong>
              </p>
              <p>Niewiadoma 99 Street</p>
              <p>00-000 Cracow</p>
              <p>PL 00 0000 0000 0000 0000 0000 0000</p>
              <p>BIC/SWIFT XXXXXXXXX</p>
            </div>
          </section>
          <div className="mapsgo">
            <h3>Our Location</h3>
            {/* <GoogleMaps className="googlemaps" /> */}
            <iframe
              title="mapsTitle"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163975.3450656568!2d19.86479029799693!3d50.0466813528082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471644c0354e18d1%3A0xb46bb6b576478abf!2zS3Jha8Ozdw!5e0!3m2!1spl!2spl!4v1617051195349!5m2!1spl!2spl"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              className="googlemaps"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
