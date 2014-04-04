Storing businss hours on Parse.com
=========

Setting general operating hours for a business is a pretty thorny UI challenge. There are seven days in a week, there's an open/close time for each, some days are not even on the schedule at all. Depending on how it is set up, the user is on the hook for 14-21 discrete pieces of information.

Many current approaches for setting operating hours leave a lot to be desired:
- See: [yelp](https://biz.yelp.com/signup/new)
- See: [facebook](http://youtu.be/7fmxs2bKCPo?t=53s)

Other approaches seem either too involved and complicated for an operation that hopefully happens infrequently.

Luckily a fantastic jQuery plugin/widget named businessHours.js by [gEndelf](https://github.com/gEndelf) takes the best of both worlds and makes the process as painless as possible.
- [github](https://github.com/gEndelf/jquery.businessHours)
- [demo](http://gendelf.github.io/jquery.businessHours/)


Here I've plugged it into Parse.com to set and later update the business hours for imaginary businesses. The key is figuring out how to properly save the array and transfer it between the Parse data storage and your array.



See a working demo [here](http://bizhours.parseapp.com)

To get up and running you'll need three things:
1. An account with www.parse.com
2. [businessHours.js](https://github.com/gEndelf/jquery.businessHours)
3. [jquery.timepicker](http://jonthornton.github.io/jquery-timepicker/|)


Installation
----------
Prety straight forward, just pop your Parse.com application & javascript keys and inside **./js/parameterhandler.js** 

```sh
var parse_app_id = "application_id_here"
var parse_javascript_id = "javascript_id_here"
```
    