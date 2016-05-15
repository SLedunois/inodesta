/**
 * Created by SLedunois on 01/05/2016.
 */

exports.instanode = function(){

    var http = require('http');
    var https = require('https');
    var url = require('url');
    var crypto = require('crypto');
    var query = require('query');

    var api = {};


    api.test = function(){
      return [];
    };

    api.testbis = function(){
      return "Hello";
    };

    return api;

};