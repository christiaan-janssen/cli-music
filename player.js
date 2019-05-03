const { spawn } = require('child_process');
//const ls = spawn('ls', ['-lh', '/usr']);
const song_data = spawn('youtube-dl', ['-j', 'ytsearch1:Rob Zombie living dead girl']);

song_data.stdout.on('data', (data) => {
  data = JSON.parse(data);
  console.log(`stdout: ${data.title}`);
});

song_data.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

song_data.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
