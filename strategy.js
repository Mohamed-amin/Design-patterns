// var express = require('express');
// var app = express();

// var greeter = {};

// greeter.hello = function(){
//   return 'hello'
// }

// greeter.salam = function(){
//   return 'salam'
// }

// app.get('/greet/:greeting', function (req, res) {
//   if (greeter[req.params.greeting]) {
    
//   res.send(greeter[req.params.greeting]());
//   }

//   res.status(404).send({error: "greeting not found"})
// });

// var server = app.listen(3000, function () {
//   var host = server.address().address;
//   var port = server.address().port;

//   console.log('Example app listening at http://%s:%s', host, port);
// });



// carriers/aramex.js
var aramex = {};
aramex.export = function(shipment){
  // call aramex ws
  // send ...
  console.log("shipment exported to aramex", shipment.id)
}

// carriers/lastmile.js
var lastmile = {};
lastmile.export = function(shipment){
  // prepare email
  // // send
  console.log("shipment exported to lastmile", shipment.id)
}

// carriers/fedex.js
var fedex = {};
fedex.export = function(shipment) {
  // call fedex WS
  console.log("shipment exported to fedex", shipment.id)
}

// carriers/index.js
carriers = {
  aramex: aramex,
  lastmile: lastmile,
  fedex: fedex
}

var shipments = []
shipments.push({id: 1234, cost: 24, carrier: 'fedex'})
shipments.push({id: 12345, cost: 24, carrier: 'fedex'})
shipments.push({id: 12346, cost: 24, carrier: 'lastmile'})

shipments.forEach(function(shipment){
  carriers[shipment.carrier].export(shipment);
})


// 



var record = {amount: 200, type: 'deposit'}
var record2 = {amount: 100, type: 'widthdrawal'}
var record3 = {amount: 100, type: 'loan'}

var transactions = []
transactions.push(record)
transactions.push(record2)
transactions.push(record3)

var calculator = {};

calculator.deposit = function(balance, amount) {
  return balance + amount;
}
calculator.widthdrawal = function(balance, amount) {
  return balance - amount;
}

calculator.loan = function(balance, amount) {
  return balance + amount - (amount*5/100);
}

calculator.getBalance = function(transactions){
  var balance = 0

  transactions.forEach(function(transaction){
    balance = calculator[transaction.type](balance, transaction.amount)
  });

  console.log("balance is ", balance);
}

calculator.getBalance(transactions);


//// 