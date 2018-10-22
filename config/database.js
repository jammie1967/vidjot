if(process.env.NODE_ENV === 'production'){
   module.exports = {mongoURI: 'mongodb://steve:steven1@ds159200.mlab.com:59200/vidjot-prod'} 
}else {
    module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}