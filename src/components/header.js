import classes from "../styles/header.module.css";
import { ReactComponent as HeaderLogo } from "../images/header-logo.svg";
function HeaderComponent() {
  return (
    <div className={classes.container}>
      <div className={classes.navbar + " " + "w-100"}>
        <nav className="navbar navbar-expand-lg w-100">
          <ul
            className={
              classes.ul_list +
              " " +
              "d-flex align-items-center justify-content-between w-100"
            }
          >
            <div className={classes.left}>
              <li className={classes.list_item}>
                <a className="nav-link">ABOUT</a>
              </li>
              <li className={classes.list_item}>
                <a className="nav-link">DISCOGRAGHY</a>
              </li>
              <li className={classes.list_item}>
                <a className="nav-link">EVENTS</a>
              </li>
              <li className={classes.list_item}>
                <a>NEWS</a>
              </li>
            </div>
            <div className={classes.right}>
              <li className={classes.list_item}>
                <a>GALLERY</a>
              </li>
              <li className={classes.list_item}>
                <a>ORCHESTRA</a>
              </li>
              <li className={classes.list_item}>
                <a>SHOP</a>
              </li>
              <li className={classes.list_item}>
                <a>CONTACT</a>
              </li>
              <div className={classes.socialmenu}>
                <li className={classes.list_item}>
                  <i class="fas fa-music"></i>
                </li>
                <li className={classes.list_item}>
                  <i class="fas fa-music"></i>
                </li>
                <li className={classes.list_item}>
                  <i class="fab fa-soundcloud"></i>
                </li>
                <li className={classes.list_item}>
                  <i class="fab fa-spotify"></i>
                </li>
              </div>
              <li className={classes.list_item}>
                <p className={classes.english}>EN</p>
              </li>
              <li className={classes.list_item}>
                <div className={classes.line}></div>
              </li>
              <li className={classes.list_item}>
                <p className={classes.arabic}>ع</p>
              </li>
            </div>
          </ul>
        </nav>
      </div>
      <br />
      <div className={classes.text_wrapper}>
        <h2 className={classes.lorem + " FMAGB"}>Lorem ipsum</h2>
        <p className={classes.first_p}>
          Lorem ipsum dolor sit amet, consetetur sadipscing
          <br /> elitr, sed diam nonumy eirmo
        </p>
      </div>
      <div className={classes.headerlogo}>
        <HeaderLogo />
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      ></link>
    </div>
  );
}

export default HeaderComponent;
