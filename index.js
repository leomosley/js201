/*
 * This is index.js
 *
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
  // e.g. return "UP654321";
  return "UP2212140";
}

function fn() {
  // return 'Replace This With Your First Name';
  return 'Leo';
}

function sn() {
  // return 'Replace This With Your Surname';
  return 'Mosley';
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function checkObject(obj) {
  obj.checked = true;
}

function checkObjectInside(obj) {
  if (obj.data) obj.data.checked = true;
}

function arraySet(arr, i, n) {
  if (arr[i]) arr[i] = n;
}

function addAll(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function larger(a, b) {
  return a > b ? a : b;
}

function largest(arr) {
  let max = arr[0] ?? null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

function compare(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function addToAll(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += n;
  }
  return arr;
}

let remembered;

function rememberThis(keepsake) {
  remembered = keepsake;
}

function nArray(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}

function addAllOpt(arr) {
  if (!arr) return 0;

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function divisors(arr, div) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % div === 0) newArr.push(arr[i]);
  }
  return newArr;
}

function multiples(n, m) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i * m);
  }
  return arr;
}