import classes from "../styles/discography2.module.css";

function Discography2Component() {
  return (
    <section>
      <div className={classes.discography2}>
        <h3>DISCOGRAPHY</h3>
        <div>
          <div className="row">
            <div className="col-lg-5"></div>
            <div className="col-lg-4">
              <h6>Kadeyet Am Ahmed</h6>
              <img className={classes.kadyet} src={require("../images/kadyet.png")} />
              <div className={classes.menu}>
                <p><span className={classes.numbers}>01.</span><span className={classes.text}>Kadeyet Am Ahmed</span></p>
                <p><span className={classes.numbers}>01.</span><span className={classes.text}>Kadeyet Am Ahmed</span></p>
                <p><span className={classes.numbers}>01.</span><span className={classes.text}>Kadeyet Am Ahmed</span></p>
                <p><span className={classes.numbers}>01.</span><span className={classes.text}>Kadeyet Am Ahmed</span></p>
              </div>
            </div>
            <div className="col-lg-3">
              <img src={require("../images/eadam.png")} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discography2Component;
