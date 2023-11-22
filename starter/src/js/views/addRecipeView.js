import View from './view';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was successfully uploaded :)'
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpenWindow = document.querySelector('.nav__btn--add-recipe');
  _btnCloseWindow = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHeightWindow();
  }

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }
  _addHandlerShowWindow() {
    this._btnOpenWindow.addEventListener('click', this.toggleWindow.bind(this));
  }
  _addHandlerHeightWindow(){
    this._btnCloseWindow.addEventListener('click',this.toggleWindow.bind(this))
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler){
    this._parentElement.addEventListener('submit', function(e){
        e.preventDefault();
        const dataArray = [...new FormData(this)]
        const data = Object.fromEntries(dataArray);
        handler(data);
    })
  }
}

export default new AddRecipeView();
