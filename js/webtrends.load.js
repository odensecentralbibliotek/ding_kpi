// WebTrends SmartSource Data Collector Tag v10.4.1
// Copyright (c) 2014 Webtrends Inc.  All rights reserved.
// Tag Builder Version: 4.1.3.2
// Created: 2014.03.27
// Extract "GET" parameters from a JS include querystring
function getParams(script_name) {
  // Find all script tags
  var scripts = document.getElementsByTagName("script");
  
  // Look through them trying to find ourselves
  for(var i=0; i<scripts.length; i++) {
    if(scripts[i].src.indexOf("/" + script_name) > -1) {
      // Get an array of key=value strings of params
      var pa = scripts[i].src.split("?").pop().split("&");

      // Split each key=value into array, the construct js object
      var p = {};
      for(var j=0; j<pa.length; j++) {
        var kv = pa[j].split("=");
        p[kv[0]] = kv[1];
      }
      return p;
    }
  }
  
  // No scripts match
  return {};
}
var getparms = getParams('webtrends.load.js');
var dcsid = getparms['dcs_id'];
var fpcdom = getparms['domain'];

window.webtrendsAsyncInit=function(){
    var dcs=new Webtrends.dcs().init({
        dcsid: dcsid,
        domain:"statse.webtrendslive.com",
        timezone:1,
        i18n:true,
        adimpressions:true,
        adsparam:"WT.ac",
        offsite:true,
        download:true,
        downloadtypes:"avi,csv,doc,docx,exe,gzip,mp3,mp4,pdf,ppt,pptx,rar,txt,wav,xls,xlsx,zip",
        fpcdom: "."+fpcdom,
        }).track();

};

(function(){
    var s=document.createElement("script"); s.async=true; s.src="http://dev.test.nordfynsbib.dk/sites/all/modules/custom/ding_kpi/js/kpi.min.js?na58c";    
    var s2=document.getElementsByTagName("script")[0]; s2.parentNode.insertBefore(s,s2);
}());
