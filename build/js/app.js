!function e(n,t,r){function o(i,l){if(!t[i]){if(!n[i]){var u="function"==typeof require&&require;if(!l&&u)return u(i,!0);if(s)return s(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=t[i]={exports:{}};n[i][0].call(p.exports,function(e){var t=n[i][1][e];return o(t||e)},p,p.exports,e,n,t,r)}return t[i].exports}for(var s="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,n,t){var r=function(){};r.prototype.getInfo=function(e){var n="fb746626704fb8580965637be55931590261915c",t="https://api.github.com/users/"+e+"?access_token="+n;$.get(t).then(function(e){$("#theResults").append("<li>GitHub Username: <strong>"+e.login+"</strong></li>"),$("#theResults").append("<li>GitHub Link: <strong>"+e.html_url+"</strong></li>"),$("#theResults").append("<li>Number of Public Respositories: <strong>"+e.public_repos+"</strong></li>"),$("#theResults").append("<li>Repository Names: <ul id='repos'></ul></li>");var t=e.repos_url+"?access_token="+n;$.get(t).then(function(e){for(var n=0;n<e.length;n++){var t=e[n];$("#repos").append("<li>"+t.name+"</li>")}})}).fail(function(e){console.log(e.responseJSON.message)})},t.findUserModule=r},{}],2:[function(e,n,t){var r=e("./../js/main.js").findUserModule;$(document).ready(function(){$("#check").click(function(){if(0==$("#name").val().length)$("#error").text("Please Enter a Username");else{var e=$("#name").val();(new r).getInfo(e)}})}),(r=function(){}).prototype.getInfo=function(e){var n="fb746626704fb8580965637be55931590261915c",t="https://api.github.com/users/"+e+"?access_token="+n;$.get(t).then(function(e){$("#theResults").append("<li>GitHub Username: <strong>"+e.login+"</strong></li>"),$("#theResults").append("<li>GitHub Link: <strong>"+e.html_url+"</strong></li>"),$("#theResults").append("<li>Number of Public Respositories: <strong>"+e.public_repos+"</strong></li>"),$("#theResults").append("<li>Repository Names: <ul id='repos'></ul></li>");var t=e.repos_url+"?access_token="+n;$.get(t).then(function(e){for(var n=0;n<e.length;n++){var t=e[n];$("#repos").append("<li>"+t.name+"</li>")}})}).fail(function(e){console.log(e.responseJSON.message)})},t.findUserModule=r},{"./../js/main.js":1}]},{},[2]);