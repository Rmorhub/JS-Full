// const imgSrc = 'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';
// const imgSecond = 'https://server.com/image.png';


export const addImage = img => {
  const p = new Promise((resolve, rejectFn) => {
    const imgElem = document.createElement('img');

    imgElem.setAttribute('alt', 'My photo');
    imgElem.src = img;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const onImageLoaded = () => {
      const { width, height } = imgElem;
      resolve({ width, height });
    };

    imgElem.addEventListener('load', onImageLoaded);
    imgElem.addEventListener('error', () => rejectFn(new Error('Image load is failed...')));
  });

  return p;
};

// const result = addImage(imgSrc);

// result.then(data => console.log(data))
// result.catch(error => console.log(error))

// export const addImage = (img, callback) => {
//   const imgElem = document.createElement('img');

//   imgElem.setAttribute('alt', 'My photo');
//   imgElem.src = img;
//   const containerElem = document.querySelector('.page');
//   containerElem.append(imgElem);

//   const onImageLoaded = () => {
//     // const { width, height } = imgElem;
//     callback(null, imgElem);
//   };

//   imgElem.addEventListener('load', onImageLoaded);
//   imgElem.addEventListener('error', () => callback('Image load is failed'));
// };

// callack function
// export const onImageLoaded = (error, imgElem) => {
//   if (error) {
//     console.log(error);
//     return;
//   }

//   const { width, height } = imgElem;
//   const sizeElem = document.querySelector('.image-size');

//   sizeElem.textContent = `${width} x ${height}`;
// };

// examples
// addImage(imgSrc, onImageLoaded);

// broken address for check
// addImage(
//   'https://p.bgstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
//   onImageLoaded,
// );
