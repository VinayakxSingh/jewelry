import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">Jewelry.</div>
        <div className="footer-links">
          <a href="/shop">Shop</a>
          <a href="/explore">Explore</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} Jewelry. All rights reserved.
        </div>
      </div>
    </footer>
  );
};export default Footer;