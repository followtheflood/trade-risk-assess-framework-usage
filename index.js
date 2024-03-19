const trade_risk_assess_framework = require('trade-risk-assess-framework');
const trade_risk_assess_framework_usage = require('trade-risk-assess-framework-usage');
const underscore = require('underscore');
const express = require('express');
const chalk = require('chalk');
const ethereumjs_tx = require('ethereumjs-tx');
const passport = require('passport');
const react = require('react');
const mocha = require('mocha');
const mongoose = require('mongoose');
const socket.io = require('socket.io');
const body_parser = require('body-parser');
const bcrypt = require('bcrypt');
const sinon = require('sinon');

let parts = ['shoulders', 'knees'];
let lyrics = ['head', ...parts, 'and', 'toes'];
console.log(lyrics);

const path = require('path');
console.log(`The extension of index.js is ${path.extname('index.js')}`);

const util = require('util');
const log = util.debuglog('foo');
log('Debug message from foo');

const zlib = require('zlib');
const input = '.................................';
zlib.deflate(input, (err, buffer) => {
  if (!err) {
    console.log(buffer.toString('base64'));
  } else {
    console.log('Error compressing:', err);
  }
});

for (let i = 0; i < 5; i++) {
    console.log(`Loop iteration: ${i}`);
}

const fs = require('fs');
fs.readFile('config.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("Error reading file:", err);
        return;
    }
    try {
        const data = JSON.parse(jsonString);
        console.log("Server name is", data.serverName);
    } catch(err) {
        console.log('Error parsing JSON:', err);
    }
});

const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};
const original = { a: 1, b: { c: 2 } };
const clone = deepClone(original);
console.log(clone);

// Encrypt a string using AES-256-CBC algorithm
const crypto = require('crypto');
const encryptAES = (text, key, iv) => {
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
const encryptedText = encryptAES('Secret Message', key, iv);
console.log('Encrypted Text:', encryptedText);

const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
delay(2000).then(() => console.log('Delayed message after 2 seconds.'));

// Get the gas price from the Ethereum network
web3.eth.getGasPrice().then(gasPrice => {
  console.log('Gas price:', web3.utils.fromWei(gasPrice, 'gwei'), 'gwei');
}).catch(err => {
  console.error('Error getting gas price:', err);
});