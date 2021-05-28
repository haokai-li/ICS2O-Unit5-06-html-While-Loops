// Copyright (c) 2021 haokai All rights reserved
//
// Created by: haokai
// Created on: May 2021
// This is the While-Loops

"use strict"

function enterClicked() {
  // input
  const first = parseInt(document.getElementById("first").value);
  const second = parseInt(document.getElementById("second").value);
  var number = 0;
  var time = 0;
  // process
  while (time < second) {
    number = number + first;
    time++;
  }
  document.getElementById('answer').innerHTML = first + " X " + second + "=" + number;
}