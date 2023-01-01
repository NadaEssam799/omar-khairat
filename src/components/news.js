import classes from "../styles/news.module.css";

function NewsComponent(){
    return(
          <section className={classes.news}>
             <h3>Latest News</h3>
             <div className="row">
                <div className="col-md-3">
                    <div className={classes.card}>
                      <img src={require("../images/news1.jpg")} className="card-img-top" />
                       <div className="card-body">
                         <h5 className="card-title">New Concert IN</h5>
                          <p className={classes.date}>14.05.2023</p>
                          <p className={classes.text}>Lorem ipsum dolor sit s, consetetur sadipscing elitr, sed diam nonumy eirmodLorem ipsum dolor sit s, 
                               consetetur sadipscing elitr, sed diam nonumy eirmod Lorem ipsum dolor ng elitr, sed diam nonumy eirmodLorem ipsum dolor sit s,
                               consetetur sadipscing elitr, sed diam nonumy <span className={classes.read}>Read More</span></p>                      </div>
                    </div>  
                </div>

                <div className="col-md-3">
                    <div className={classes.card} >
                      <img src={require("../images/news1.jpg")} className="card-img-top" />
                       <div className="card-body">
                         <h5 className="card-title">New Concert IN</h5>
                          <p className={classes.date}>14.05.2023</p>
                          <p className={classes.text}>Lorem ipsum dolor sit s, consetetur sadipscing elitr, sed diam nonumy eirmodLorem ipsum dolor sit s, 
                               consetetur sadipscing elitr, sed diam nonumy eirmod Lorem ipsum dolor ng elitr, sed diam nonumy eirmodLorem ipsum dolor sit s,
                               consetetur sadipscing elitr, sed diam nonumy <span className={classes.read}>Read More</span></p>
                      </div>
                    </div>  
                </div>

                <div className="col-md-3">
                    <div className={classes.card} >
                      <img src={require("../images/news2.jpg")} className="card-img-top" />
                       <div className="card-body">
                         <h5 className="card-title">New Concert IN</h5>
                          <p className={classes.date}>14.05.2023</p>
                          <p className={classes.text}>Lorem ipsum dolor sit s, consetetur sadipscing elitr, sed diam nonumy eirmodLorem ipsum dolor sit s, 
                               consetetur sadipscing elitr, sed diam nonumy eirmod Lorem ipsum dolor ng elitr, sed diam nonumy eirmodLorem ipsum dolor sit s,
                               consetetur sadipscing elitr, sed diam nonumy <span className={classes.read}>Read More</span></p>                      </div>
                    </div>  
                </div>

                <div className="col-md-3">
                    <div className={classes.card} >
                      <img src={require("../images/news1.jpg")} className="card-img-top" />
                       <div className="card-body">
                         <h5 className="card-title">New Concert IN</h5>
                          <p className={classes.date}>14.05.2023</p>
                          <p className={classes.text}>Lorem ipsum dolor sit s, consetetur sadipscing elitr, sed diam nonumy eirmodLorem ipsum dolor sit s, 
                               consetetur sadipscing elitr, sed diam nonumy eirmod Lorem ipsum dolor ng elitr, sed diam nonumy eirmodLorem ipsum dolor sit s,
                               consetetur sadipscing elitr, sed diam nonumy <span className={classes.read}>Read More</span></p>                      </div>
                    </div>  
                </div>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" />
                      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                        rel="stylesheet"  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"   crossorigin="anonymous"  >  
                      </link>
             </div>
                 <div className="w-100 text-center"><button className={classes.see}>SEE ALL NEWS</button></div> 


             
          </section>
    );
}

export default NewsComponent;
