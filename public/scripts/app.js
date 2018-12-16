const playButton = document.getElementById('play');
const resultBlock = document.getElementById('result');
const againButton = document.getElementById('again');
const gifImg = document.getElementById('gif');

playButton.addEventListener('click', function() {
  axios.get('/api/gacha')
    .then(response => {
      // Insert code here...
    });
});

againButton.addEventListener('click', function() {
  resultBlock.classList.add('hidden');
  playButton.classList.remove('hidden');
});
