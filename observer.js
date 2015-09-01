
/**
 * Observer pattern
 * 
 */

var dispatcher = {}
listeners = {};

/**
 * Dispatching the event.
 * This technique also is count on srtagey pattern as we 
 * seperate the Method calling from the calling function
 * and give authority to the context to call it.
 * 
 */
dispatcher.dispatch = function(event, options){
  listeners[event] = listeners[event] || []

  try {
    listeners[event].forEach(function(fn){
        fn(event, options)
      });
  } catch(err) {}
}

/**
 * Pushing events into hashtable to be called later 
 * 
 */
dispatcher.on = function(event, fn) {
  listeners[event] = listeners[event] || [];
  listeners[event].push(fn)
}

var mailer = {};

/**
 * Mocking Mail Sender.
 * 
 */
mailer.send = function(type, email){
  console.log('sending email to', email)
}

/** 
 * Mocking Sms Sender.
 *
 */
var sms = {}
sms.send = function(){
  console.log('sending sms to ...')
}

/**
 * When Declaring an ON (Broadacasting Event)
 * We Send event name and anonymous fucntion 
 * That will be attached to it.
 * 
 */
dispatcher.on('registration', function(event, options){
  mailer.send(event, options.email)
});

/**
 * [description]
 * @param  {[type]} event      [description]
 * @param  {[type]} options){               console.log('got a registration on the website')  if (true) throw new Error('1234')} [description]
 * @return {[type]}            [description]
 */
dispatcher.on('registration', function(event, options){
  console.log('got a registration on the website')
  if (true) throw new Error('1234')
});



var db = {};

db.register = function(email){
  // save_record(id..., email, registered_at)
  dispatcher.dispatch('registration', {email: email})
}














dispatcher.on('registration', sms.send);


db.register('amin@gmail.com');
