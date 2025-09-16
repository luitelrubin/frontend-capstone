import Nav from "./Nav";

function Footer() {
  return (
    <>
      <div>
        <h3>Doormat Navigation</h3>
        <Nav />
      </div>

      <div>
        <h3>Contact</h3>
        <ul>
          <li>1234 W Michigan Avenue, Chicago, IL 60614</li>
          <li>(312) 555-0123</li>
          <li>contact@littlelemon.com</li>
        </ul>
      </div>

      <div>
        <h3>Social Media Links</h3>
        <ul>
          <li>
            <a href="#">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg"
                alt="Facebook link"
                width={24}
                height={24}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg"
                alt="Instagram link"
                width={24}
                height={24}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg"
                alt="X link"
                width={24}
                height={24}
              />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
