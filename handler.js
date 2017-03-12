'use strict';

module.exports.SNS = (event, context, callback) => {
  const headers = event.headers;
  const phoneNumber = headers.phonenumber;
  const restaurant = headers.restaurant;
  const datetime = headers.datetime;
  var AWS = require('aws-sdk');
  AWS.config.region = 'us-east-1';
  var sns = new AWS.SNS({
      apiVersion: '2014-10-31',
      accessKeyId: '',
      secretAccessKey: ''
  });
  var params = {
    Message: `You book ${restaurant} at ${datetime}`,
    MessageStructure: 'string',
    PhoneNumber: phoneNumber
  };
  sns.publish(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });
const response = {
  statusCode: 200,
  body: 'Send SMS Success'
};

callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};