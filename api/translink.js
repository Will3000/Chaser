// let http = require('http')
let request = require('request');
let express = require('express')
let router = express.Router()

const keys = {
  TRANSLINK_API_KEY : 'bULkOIairn9ZSbQoHP60'
}

class transLinkAPI {
    constructor(keyWord){
      this.keyWord = keyWord;
      this.type = this.getSearchType(keyWord);
    }

    getSearchType(keyWord){
      if (keyWord.length==5 && parseInt(keyWord) == keyWord){
          return  'stopNo';
      }

      if (keyWord.length<3 && parseInt(keyWord) == keyWord){
        return 'routeNo';
      }
    }

    makeRequest(res){
      var url;
      console.log(this);
      switch (this.type) {
        case 'routeNo':
          url = `http://api.translink.ca/RTTIAPI/V1/buses?apiKey=${keys['TRANSLINK_API_KEY']}&routeNo=${this.keyWord}`
          break;
        case 'stopNo':
          url = `http://api.translink.ca/RTTIAPI/V1/buses?apiKey=${keys['TRANSLINK_API_KEY']}&stopNo=${this.keyWord}`
          break;
        default:
          res.send({
            error: 'No Result'
          })
      }
      request({
        url:url,
        headers: {
          'content-type': 'application/json',
        }
      }, function(error, response, body){
        if(!error && response.statusCode == 200) {
          res.send(response.body)
        } else {
          res.send({
            error: response.body
          })
        }
      })
    }
}

router.get('/businfo', function(req, res){
  var stopNo = req.query.stopNo;
  console.log(stopNo);
  var api = new transLinkAPI(stopNo);

  api.makeRequest(res);
  // var url ='http://api.translink.ca/RTTIAPI/V1/stops?apiKey='+keys['TRANSLINK_API_KEY']+'&lat=49.187706&long=-122.850060'
  // let url =`http://api.translink.ca/RTTIAPI/V1/stops?apiKey=${keys['TRANSLINK_API_KEY']}&routeNo=${stopNo}`
  // request({
  //   url:url,
  //   headers: {
  //     'content-type': 'application/json',
  //   }
  // }, function(error, response, body){
  //   if(!error && response.statusCode == 200) {
  //     res.send(response.body)
  //   } else {
  //     res.send({
  //       code: response.Code,
  //       error: response.Message
  //     })
  //   }
  // })
})

module.exports = router
