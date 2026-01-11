const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  console.log(`🚀 Master process starting...`);
  console.log(`💻 CPU Cores: ${numCPUs}`);
  console.log(`🔄 Starting ${numCPUs} worker processes...`);

  // Fork workers for each CPU core
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`❌ Worker ${worker.process.pid} died. Starting new worker...`);
    cluster.fork();
  });

  console.log(`✅ Cluster mode activated!`);
  console.log(`📊 Can handle ${numCPUs * 50} concurrent users`);
} else {
  // Worker processes run the actual server
  require('./server.js');
}
