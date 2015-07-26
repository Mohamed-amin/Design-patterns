
/**
 * Observer pattern
 */
var dispatcher = {}
listeners = {};

dispatcher.dispatch = function(event, options){
  listeners[event] = listeners[event] || []

  try {
    listeners[event].forEach(function(fn){
        fn(event, options)
      });
  } catch(err) {}
}

dispatcher.on = function(event, fn) {
  listeners[event] = listeners[event] || [];

  listeners[event].push(fn)
}

var mailer = {};

mailer.send = function(type, email){
  console.log('sending email to', email)
}

dispatcher.on('registration', function(event, options){
  mailer.send(event, options.email)
});

dispatcher.on('registration', function(event, options){
  console.log('got a registration on the website')

  if (true) throw new Error('1234')
});

var db = {};

db.register = function(email){
  // save_record(id..., email, registered_at)
  dispatcher.dispatch('registration', {email: email})
}











// sms.js
var sms = {}
sms.send = function(){
  console.log('sending sms to ...')
}


dispatcher.on('registration', sms.send);



// 

db.register('amin@gmail.com');
