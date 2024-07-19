function notify() {
  console.log("Download complete!");
}

function download(url, callback) {
  console.log(`Downloading from ${url}`);

  callback();
}

const url = "https://sampleone.site/download";
download(url, notify);
