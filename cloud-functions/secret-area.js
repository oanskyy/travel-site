exports.handler = function(event, context, callback) { 
  const secretContent = `
  <h3>Welcome to the secret area</h3>
  <p>“Feelings are just visitors. Let them come and go.”</p>`
  
  let body 

  if (event.body) { 
    body = JSON.parse(event.body)
  } else { 
    body = {}
  }

  if (body.password == 'javascript') { 
    callback(null, { 
      statusCode: 200, 
      body: secretContent
    })
  } else { 
    callback(null, { 
      statusCode: 401, 
      body: 'Welcome to the secret area'
    })
  }


}