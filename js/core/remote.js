import {aic} from "../integration/aiCounterpoint.js";

export let debug_error = 0;

export function getUrlParam(par) {
  let url_string = window.location.href;
  let url = new URL(url_string);
  return url.searchParams.get(par);
}

export function urlNoParams() {
  return window.location.href.split('?')[0].replace('#', '');
}

export function getEnvironment() {
  if (getUrlParam('test')) return "test";
  if (urlNoParams().includes("/harmony-dev")) return "dev";
  if (ip === "95.165.137.69" || getCookie('mgen_login') === 'rualark@gmail.com') return "prod-in";
  return "prod";
}

export function getCookie(name) {
  let value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) return decodeURI(parts.pop().split(";").shift());
}

export function httpRequest(method, url, dataType='text') {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: method,
      url: url,
      dataType: dataType,
      success: resolve,
      error: reject
    });
  });
}

export function httpRequestNoCache(method, url, dataType='text') {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: method,
      url: url,
      nc: new Date().getTime(),
      dataType: dataType,
      success: resolve,
      error: reject
    });
  });
}
