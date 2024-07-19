function notify() {
  console.log("Download complete!");
}

function download(url, callback) {
  console.log(`Downloading from ${url}`);

  callback();
}

const url1 = "https://sample-one.site/download";
const url2 = "https://sample-two.site/download";
const url3 = "https://sample-three.site/download";

download(url1, () => {
  download(url2, () => {
    download(url3, () => notify());
  });
});
