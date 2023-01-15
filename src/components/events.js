import classes from "../styles/events.module.css";

function EventsComponent(){
    return (
            <section>
                 <div className={classes.upcoming}>
                      <h3>UPCOMING EVENTS</h3>
                      <div className="row">
                      <div className="col-md-1"></div>
                        <div className="col-lg-7 col-sm-6">
                            <img src={require("../images/events.jpg")} width="100%" />
                        </div>
                        <div className="col-lg-4 col-sm-5">
                            <img src={require("../images/five.png")} />
                            <h1><span className={classes.eight}>8</span>PM</h1>
                            <div className={classes.cairo}>CAIRO OPERA HOUSE</div>
                            <h6>HALL 1</h6>
                            <div className={classes.vodafone}>
                                <img src={require("../images/vodafone.png")} />
                                <img src={require("../images/vodafone.png")} />
                            </div>
                            <button className={classes.ticket}>GET TICKET</button>
                            <div className={classes.red}> * TICKETS WILL BE AVAILABLE SOON</div>
                        </div>
                      </div>

                      <div className="row">
                        
                         <div className="col-md-2">
                            <div className={classes.date}>
                              05.11.2022
                              <img src={require("../images/arrow.png")} />
                            </div>
                            <div className={classes.date_hide}>
                              05.11.2022 <br />
                              CAIRO OPERA HOUSE
                              <img src={require("../images/left.arrow.png")} />
                            </div>
                         </div>

                         <div className="col-md-2">
                         <div className={classes.date}>
                              05.11.2022
                              <img src={require("../images/arrow.png")} />
                            </div>
                            <div className={classes.date_hide}>
                              05.11.2022 <br />
                              CAIRO OPERA HOUSE
                              <img src={require("../images/left.arrow.png")} />
                            </div>
                         </div>

                         <div className="col-md-2">
                         <div className={classes.date}>
                              05.11.2022
                              <img src={require("../images/arrow.png")} />
                            </div>
                            <div className={classes.date_hide}>
                              05.11.2022 <br />
                              CAIRO OPERA HOUSE
                              <img src={require("../images/left.arrow.png")} />
                            </div>
                         </div>

                         <div className="col-md-2">
                         <div className={classes.date}>
                              05.11.2022
                              <img src={require("../images/arrow.png")} />
                            </div>
                            <div className={classes.date_hide}>
                              05.11.2022 <br />
                              CAIRO OPERA HOUSE
                              <img src={require("../images/left.arrow.png")} />
                            </div>
                         </div>

                         <div className="col-md-2">
                         <div className={classes.date}>
                              05.11.2022
                              <img src={require("../images/arrow.png")} />
                            </div>
                            <div className={classes.date_hide}>
                              05.11.2022 <br />
                              CAIRO OPERA HOUSE
                              <img src={require("../images/left.arrow.png")} />
                            </div>
                         </div>

                         <div className="col-md-2">
                            <div className={classes.date}>
                              05.11.2022
                              <img src={require("../images/arrow.png")} />
                            </div>
                            <div className={classes.date_hide}>
                              05.11.2022 <br />
                              CAIRO OPERA HOUSE
                              <img src={require("../images/left.arrow.png")} />
                            </div>
                         </div>
                      </div>

                      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" />
                      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                        rel="stylesheet"  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"   crossorigin="anonymous"  >  
                      </link>
                 </div>
            </section>

            
    );
}

export default EventsComponent;
