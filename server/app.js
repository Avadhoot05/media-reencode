const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const http = require("http");
const webSocket = require("websocket");
const router = require("./routes.js");
const path = require('path');
const {Job, Processor} = require("./encoder/Processor.js");


const app = express();
app.use(express.json());
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
dotenv.config({ path: "./config.env" });

app.use("/public", express.static(path.join(__dirname, "public")));
app.use('/', router);

const port =  process.env.PORT;

if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "client" , "build")));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  })
}


app.listen(port, () => {
    console.log(`Server is running at ${port}`);
  });


//ws
const WS_SERVER_PORT = process.env.WS_SERVER_PORT; 
const server = http.createServer();
server.listen(WS_SERVER_PORT);
console.log(`WS Server is running at ${WS_SERVER_PORT}`);

const wsServer = new webSocket.server({
	httpServer: server
});

let processor = new Processor();



wsServer.on('request', function(req) {
  	console.log('[', new Date(), '] ', 'recieved new connection from origin : ', req.origin);

	const connection = req.accept(null, req.origin);
  
	connection.on('message', function(message) 
	{
		if(message.type == 'utf8')
		{
			console.log('[', new Date(), '] ', 'recieved message  : ', message.utf8Data);
		
			const data = JSON.parse(message.utf8Data);
			if(data.type == 'enque')
			{
				//TODO: make a redis bull queue similar to this.
				let job = new Job(data.newUploadedFileName, data.uploadedFileFormat, connection, data.action, data.actionParam);
				processor.AddToQueue(job);
				processor.ProcessJobs();
			}
		}	
	});
  }
);