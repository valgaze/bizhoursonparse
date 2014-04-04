
var parse_app_id = "TWuq2DAtFVsIWPrZ71YfcnV2Bs31U8Pxuo3ovTyq"
var parse_javascript_id = "QDWbd2RMEW3F5YHE798vPvGB9X45unO6kcRgztfT"

//PARAMETER CODE FROM HERE: http://www.jquerybyexample.net/2012/05/how-to-get-querystring-value-using.html
//Usage: you have page.html?param1=string&param2=string2&param3=string3
//var param1 = GetQueryStringParams('param1'); --> returns string1

function GetQueryStringParams(sParam)
{
                  var sPageURL = window.location.search.substring(1);
                  var sURLVariables = sPageURL.split('&');
                  for (var i = 0; i < sURLVariables.length; i++) 
                  {
                      var sParameterName = sURLVariables[i].split('=');
                      if (sParameterName[0] == sParam) 
                      {
                          return sParameterName[1];
                      }
                  } 
}

