let submit;
let imgURL;
let img;
let gifField;
let gifResults;
let searchTerm ;
let url;

function setup() {
  noCanvas();


  submit = createButton('Pick New GIF');
  gifField = createInput('');

  submit.position(100, 500);
  gifField.position(50, 500);
  submit.mousePressed(searchGIF);
}

function dataGet(data) {
  imgURL = data.data[0].images.original.url;
  img = createImg(imgURL,"UHHHHH PROBLEM HAPPEN :(");
  img.html(imgURL);
  img.position(windowHeight / 5 ,100);
}


function searchGIF() {
  searchTerm = gifField.value();
  url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=jIAqh37hnPfdiwR4rYXgnBz829oPjub7`;
  loadJSON(url, dataGet);
}
