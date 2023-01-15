import DiscographyComponent from "./components/discography";
import Discography2Component from "./components/discography2";
import EventsComponent from "./components/events";
import FooterComponent from "./components/footer";
import GalleryComponent from "./components/gallery";
import HeaderComponent from "./components/header";
import NewsComponent from "./components/news";


function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <EventsComponent />
      <Discography2Component />
      {/* <DiscographyComponent /> */}
      <GalleryComponent />
      <NewsComponent /> 
      <FooterComponent />
    </div>
  );
}

export default App;
