let API='http://api.erail.in/';

const trainNo = '12345';
const date = '029-04-2024';
fetch(`${API}live-train-status/train/${trainNo}/date/${date}`)
  .then(response => response.json())
  .then(data => console.log(data));

  ///apikey/${apiKey}/
