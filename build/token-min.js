/*!build time : 2015-03-04 10:05:50 AM*/
KISSY.add("kg/uploader/2.0.3/token",function(a,b){function c(){var a=arguments[1]||location.hostname,b=a.split("."),c=b.length,d=arguments[0]||(3>c?0:1);return(d>=c||2>c-d)&&(d=c-2),b.slice(d).join(".")}function d(){var a=c(-1);return"net"==a}function e(a,c){if(!a)return!1;var e=d()&&f||g;b.jsonp(e,function(b){var d=b.value;if(d){var b=a.get("data");b._tb_token_=d}c&&c(b)})}var f="http://aop.widgets.daily.taobao.net/block/getReqParam.htm",g="http://aop.widgets.taobao.com/block/getReqParam.htm";return e},{requires:["ajax"]});