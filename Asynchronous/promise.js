let progress = 100;

const download = new Promise((resolve, reject) => {
  if (progress === 100) {
    resolve("Download complete");
  } else {
    reject("Download failed");
  }
});

download
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
