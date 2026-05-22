const fs = require('fs');
const https = require('https');

const urls = [
  'https://images.unsplash.com/photo-1599552375107-1e5f8f53ce4e?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=800'
];

urls.forEach((url, index) => {
  https.get(url, (res) => {
    const file = fs.createWriteStream(`public/images/unsplash_${index + 1}.jpg`);
    res.pipe(file);
  });
});
