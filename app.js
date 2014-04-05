//SET PARSE KEYS HERE

var parse_app_id = "your_parse_application_id_here"

var parse_javascript_id = "your_parse_javascript_id_here"

//SET PARSE KEYS HERE




/**
 * Module dependencies.
 */



var express = require('express');
var http = require('http');
var path = require('path');
var Parse = require('parse').Parse;

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');    // Set the template engineapp.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}





app.use('/img',express.static(path.join(__dirname, 'public/img')));
app.use('/js',express.static(path.join(__dirname, 'public/js')));
app.use('/css',express.static(path.join(__dirname, 'public/css')));


app.get('/create', function(req, res) {

  res.render('create', {parse_app_id: parse_app_id, parse_javascript_id:parse_javascript_id});

});

app.get('/', function(req, res) {

  res.render('index', {parse_app_id: parse_app_id, parse_javascript_id:parse_javascript_id});

});

app.get('/edit/:param', function(req, res) {

Parse.initialize(parse_app_id, parse_javascript_id);

var start = []

// Set the query value here, corresponds to object objectid
var queryvalue = req.param("param")
// set the query value here

var objectQuery = Parse.Object.extend("objects");
var query = new Parse.Query(objectQuery);
var namevar
query.get(queryvalue, 

{
  success: function(objectQuery)
   {
     


     if (!objectQuery){
     	res.render('no_object', {title: "Oops, no object by that name"});

     }

	var namevar = objectQuery.get("name");
	var hours_from_parse = objectQuery.get("hours");

//An idea is if hours is undefined, maybe set the array FIRST then draw the control


if (hours_from_parse == undefined){


//Build hours modal, using default days which user will switch up

var start = [{"isActive":true,"timeFrom":"9:00","timeTill":"18:00"},
                {"isActive":true,"timeFrom":"9:00","timeTill":"18:00"},
                {"isActive":false,"timeFrom":null,"timeTill":null},
                {"isActive":false,"timeFrom":null,"timeTill":null},
                {"isActive":false,"timeFrom":null,"timeTill":null},
                {"isActive":false,"timeFrom":null,"timeTill":null},
                {"isActive":false,"timeFrom":null,"timeTill":null}]


//end hours modal

}else{

   //In parse we have status instead of isActive, we have open instead of mondayOpen, etc
        //mondayStatus maps to isActive, mondayOpen maps to timeFrom, mondayClose maps to timeTill. We need to "convert" those variable names then pop them into the array

        //IMPORTANT NOTE: We regard Monday as ZERO. Monday = 0, Tuesday = 1, Wednesday = 2 ... Sunday = 6

    //Get monday
        var mondayArray_from_parse = hours_from_parse[0]
        var mondaystatus_from_parse = mondayArray_from_parse.status
        var mondayOpen_from_parse = mondayArray_from_parse.open
        var mondayClose_from_parse = mondayArray_from_parse.close

   //Get tuesday
        var tuesdayArray_from_parse = hours_from_parse[1]
        var tuesdaystatus_from_parse = tuesdayArray_from_parse.status
        var tuesdayOpen_from_parse = tuesdayArray_from_parse.open
        var tuesdayClose_from_parse = tuesdayArray_from_parse.close

   //Get wednesday
        var wednesdayArray_from_parse = hours_from_parse[2]
        var wednesdaystatus_from_parse = wednesdayArray_from_parse.status
        var wednesdayOpen_from_parse = wednesdayArray_from_parse.open
        var wednesdayClose_from_parse = wednesdayArray_from_parse.close

    //Get thursday
        var thursdayArray_from_parse = hours_from_parse[3]
        var thursdaystatus_from_parse = thursdayArray_from_parse.status
        var thursdayOpen_from_parse = thursdayArray_from_parse.open
        var thursdayClose_from_parse = thursdayArray_from_parse.close


    //Get friday
        var fridayArray_from_parse = hours_from_parse[4]
        var fridaystatus_from_parse = fridayArray_from_parse.status
        var fridayOpen_from_parse = fridayArray_from_parse.open
        var fridayClose_from_parse = fridayArray_from_parse.close


   //Get saturday
        var saturdayArray_from_parse = hours_from_parse[5]
        var saturdaystatus_from_parse = saturdayArray_from_parse.status
        var saturdayOpen_from_parse = saturdayArray_from_parse.open
        var saturdayClose_from_parse = saturdayArray_from_parse.close    

   //Get sunday
        var sundayArray_from_parse = hours_from_parse[6]
        var sundaystatus_from_parse = sundayArray_from_parse.status
        var sundayOpen_from_parse = sundayArray_from_parse.open
        var sundayClose_from_parse = sundayArray_from_parse.close



  //Create final array to populate the array to initiate the widget
 var start = [{"isActive":mondaystatus_from_parse,"timeFrom":mondayOpen_from_parse,"timeTill":mondayClose_from_parse},
    {"isActive":tuesdaystatus_from_parse,"timeFrom":tuesdayOpen_from_parse,"timeTill":tuesdayClose_from_parse},
    {"isActive":wednesdaystatus_from_parse,"timeFrom":wednesdayOpen_from_parse,"timeTill":wednesdayClose_from_parse},
    {"isActive":thursdaystatus_from_parse,"timeFrom":thursdayOpen_from_parse,"timeTill":thursdayClose_from_parse},
    {"isActive":fridaystatus_from_parse,"timeFrom":fridayOpen_from_parse,"timeTill":fridayClose_from_parse},
    {"isActive":saturdaystatus_from_parse,"timeFrom":saturdayOpen_from_parse,"timeTill":saturdayClose_from_parse},
    {"isActive":sundaystatus_from_parse,"timeFrom":sundayOpen_from_parse,"timeTill":sundayClose_from_parse}]

} //end erorrhandling for hours
  res.render('edit', { param: req.param("param"), name: namevar, startarray: start, parse_app_id: parse_app_id, parse_javascript_id:parse_javascript_id});

       },
       error: function(object, error) 
       {
     	res.render('no_object', {title: "Oops, no object by that name"});
       }
    });

});




http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
