import { baseURL } from "../utils/constants";

export const Footer = () => {
  return (
    <div>
      <footer className="restaurant-footer">
        <div className="footer-container">
          {/* <!-- Column 1: Brand --> */}
          <div className="footer-col brand-col">
            <h3 className="footer-logo">Bistro Name</h3>
            <p>
              Serving fresh, authentic flavors daily in a warm and inviting
              atmosphere.
            </p>
            <div className="social-links">
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">TripAdvisor</a>
            </div>
          </div>

          {/* <!-- Column 2: Hours & Contact --> */}
          <div className="footer-col info-col">
            <h4>Visit & Hours</h4>
            <p>
              <strong>Address:</strong> 123 Flavor Street, City, State
            </p>
            <p>
              <strong>Phone:</strong> (555) 123-4567
            </p>
            <p>
              <strong>Mon - Thu:</strong> 11:00 AM - 10:00 PM
            </p>
            <p>
              <strong>Fri - Sat:</strong> 11:00 AM - 11:30 PM
            </p>
            <p>
              <strong>Sun:</strong> 12:00 PM - 9:00 PM
            </p>
          </div>

          {/* <!-- Column 3: Quick Links & Newsletter --> */}
          <div className="footer-col links-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#menu">Our Menu</a>
              </li>
              <li>
                <a href="#reserve">Reservations</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <h4 className="newsletter-title">Join Our Newsletter</h4>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2026 Bistro Name. All rights reserved. |{" "}
            <a href="#">Privacy Policy</a>
          </p>
        </div>
      </footer>
    </div>
  );
};
