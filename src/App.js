import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import TreeMenu from "./components/tree-view";
import menus from "./components/tree-view/data";
// high order component

function App() {
  return (
    <>
      {/**/} {/**/} {/**/} {/**/} {/**/}
      {/*   <Accordian />*/}
      {/* <RandomColor />*/}
      {/* <StarRating noOfStar={10} />*/}
      {/*  <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />*/}
      {/*<LoadMoreData />*/}
      <TreeMenu menu={menus} />
    </>
  );
}

export default App;
