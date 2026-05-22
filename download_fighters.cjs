const fs = require('fs');
const https = require('https');

https.get('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Conor_McGregor_2018.jpg/800px-Conor_McGregor_2018.jpg', (res) => {
  res.pipe(fs.createWriteStream('public/images/unsplash_1.jpg'));
});

https.get('https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Khabib_Nurmagomedov_in_2018.jpg/800px-Khabib_Nurmagomedov_in_2018.jpg', (res) => {
  res.pipe(fs.createWriteStream('public/images/unsplash_2.jpg'));
});

https.get('https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Jon_Jones_2013.jpg/800px-Jon_Jones_2013.jpg', (res) => {
  res.pipe(fs.createWriteStream('public/images/unsplash_3.jpg'));
});
