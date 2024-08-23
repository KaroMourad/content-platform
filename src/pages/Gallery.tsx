import { mockGrid } from "../mock/grid";
import MasonryGrid from "../sections/MasonryGrid/MasonryGrid";

function Gallery() {

  return (
    <div>
      <h1>Gallery</h1>
      <p>This is the Gallery page.</p>
      <MasonryGrid data={mockGrid}/>
    </div>
  );
}

export default Gallery;
