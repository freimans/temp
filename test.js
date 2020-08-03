var Crawler = require('spa-crawler')
 
var crawler = new Crawler({
  // The initial url of the single page app
  app: 'https://check-point.quip.com'
})

var url_list = [];
var login_url = [];
 
// Start out crawler when your app is ready and listen for urls
crawler.start().crawler
  // Log each url
  .on('spaurl', (url)=> {
    console.log(url);
    if(url.includes('download')) {
        login_url.push(url);
    }
    url_list.push(url);
  })
  // When the crawler is done, kill the process
  .on('complete', () => {
      console.log("Completed !")
      console.log(sharedStart(login_url));
  })


  function sharedStart(array){
    var A= array.concat().sort(), 
    a1= A[0], a2= A[A.length-1], L= a1.length, i= 0;
    while(i<L && a1.charAt(i)=== a2.charAt(i)) i++;
    return a1.substring(0, i);
}