const getDownloadStatus = (url) => {
  console.log(`Processing download from ${url}`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Download Complete");
    }, 3000);
  });
};

// function biasa
// async function download(url) {
//   let status = await getDownloadStatus(url);
//   console.log(status);
// }

// arrow function
const download = async () => {
  let status = await getDownloadStatus(url);
  console.log(status);
};

const url = "https://sample.site/download";
download(url);
