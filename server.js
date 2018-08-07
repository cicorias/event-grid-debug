const http = require('http');
const connect = require('connect');
const bodyParser = require('body-parser');
const Convert = require('./models/subscriptionValidationEvent');

const app = connect();

// app.use(bodyParser.json());
app.use(bodyParser.text( { type: 'application/json' } ));


app.use( (request, response) => {
  console.log('request ', request.url);
  console.log(request.body);

  if ( request.headers['aeg-event-type'] === 'SubscriptionValidation'){

    const validationEvent = Convert.toSubscriptionValidation(request.body);
    response.end(JSON.stringify({validationResponse: validationEvent[0].data.validationCode }));

  }
  

  const responseBody = JSON.stringify( [{ message: 'Event Accepted'}] );
  response.writeHead(200, {
    'Content-Length': Buffer.byteLength(responseBody),
    'Content-Type': 'application/json' });
  response.end(responseBody); 
  console.log('--- end ---')
})
  
http.createServer(app).listen(8000); 

console.log('Server running at http://127.0.0.1:8000/')
 