import DiscographyComponent from "./components/discography";
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
      <DiscographyComponent />
      <GalleryComponent />
      <NewsComponent /> 
      <FooterComponent />
    </div>
  );
}

export default App;
