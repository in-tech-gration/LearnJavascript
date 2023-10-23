request = require 'request'
cheerio = require 'cheerio'

url     = 'http://www.company.com/jobs/'

request url, (err, resp, body) ->

  $               = cheerio.load(body)
  companyName     = $('.company')
  companyNameText = companyName.text()

  $('.company').filter ->
    data     = $(this)
    dataText = data.text()
    return

