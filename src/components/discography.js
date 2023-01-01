import classes from "../styles/discography.module.css";

function DiscographyComponent(){
       return(
         <section className={classes.discography}>
              <img src={require("../images/discography.jpg")} />
         </section>
       );
}

export default DiscographyComponent;
