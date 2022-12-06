const root = document.querySelector("#root");

const displayLoadingScreen = () => {
  const div = document.createElement("div");
  div.innerText = "Loading...";
  root.replaceChildren(div);
};

const preloadImage = (url) => {
  const img = document.createElement("img");
  img.src = url;

  return new Promise((resolve) => {
    img.addEventListener("load", () => {
      resolve();
    });
  });
};

const displayRandomCatFromApi = async () => {
  displayLoadingScreen();

  const response = await fetch("/api/cats");
  const cats = await response.json();
  const url = cats[0].url;
  await preloadImage(url);

  const img = document.createElement("img");
  img.src = url;
  root.replaceChildren(img);

  /*let _url;

  fetch("/api/cats")
    .then((res) => res.json())
    .then((cats) => {
      _url = cats[0].url;
      return preloadImage(_url);
    })
    .then(() => {
      const img = document.createElement("img");
      img.src = _url;
      root.replaceChildren(img);
    });*/
};

root.addEventListener("click", displayRandomCatFromApi);

displayRandomCatFromApi();
