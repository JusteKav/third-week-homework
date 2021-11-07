class FurnitureGridComponent {
  constructor() {
    this.state = {
      furniture: [],
    };
    this.initialize();
  }

  fetchFurniture = () => {
    API.getFurniture(
      (furniture) => {
        this.state.furniture = furniture;
      },
      (err) => console.error(err)
    );
  };

  initialize = () => {
    this.fetchFurniture();
    // this.htmlElement = document.createElement('div');
    // this.htmlElement.className = 'row flex-lg-row-reverse g-3';
    // this.initializeForm();
    // this.initializeTable();
    // this.render();
  };
}
