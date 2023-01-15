import classes from "../styles/footer.module.css";


function FooterComponent() {
    return(
         <footer className={classes.footer}>
          <h5 className={classes.hfooter}><span className={classes.site}></span>SITE MAP</h5>
          <div className="row">
             <div className="col-md-2 col-sm-6">
               <ul className={classes.footer_ul}>
                 <li>EVENTS</li>
                 <li>DISCOGRAPHY</li>
                 <li>ORCHESTRA</li>
               </ul>
             </div>
             <div className="col-md-2 col-sm-6">
               <ul className={classes.footer_ul}>
                <li>CONTACT</li>
                <li>GALLERY</li>
               </ul>
             </div>
             <div className="col-md-4 col-sm-6">
              <ul className={classes.footer_ul}>
                <li>NEWS</li>
                <li>SHOP</li>
              </ul>
             </div>
             <div className="col-md-4 col-sm-6">
                 <ul className={classes.social_ul}>
                  <li><h5 className={classes.hfooter}>SOCIAL MEDIA</h5></li>
                  <img src={require("../images/facebook.png")} />
                  <img src={require("../images/youtube.png")} /> 
                  <img src={require("../images/instgram.png")} />
                  <img src={require("../images/tiktok.png")} />
                  <img src={require("../images/twitter.png")} />
                 </ul>
             </div>
          </div>

            <div className={classes.line}></div>
            <p className={classes.copyright}> COPY RIGHTS 2022</p>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/all.css" crossorigin="anonymous"></link>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      ></link>
         </footer>
    );
}


export default FooterComponent;
