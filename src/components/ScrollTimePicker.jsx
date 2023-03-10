import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, DatePickerAndroid } from 'react-native';

export function getTimeHours() {
  const data = [];
  for (let i = 0; i < 24; i++) {
    const hour = i < 10 ? `0${i}` : `${i}`;
    data.push(`${hour}`);
    // for (let j = 0; j < 60; j += 15) {
    //   const minute = j < 10 ? `0${j}` : `${j}`;
  }
  return data;
};

export function getTimeMins() {
  const data = [];
  for (let j = 0; j < 60; j += 1) {
    const minute = j < 10 ? `0${j}` : `${j}`;
    data.push(`${minute}`);
  }
  return data;
};

const getTimeData = () => {
  const data = [];
  data.push(`${getTimeHours.hour}:${getTimeMins.minute}`)
  return data;
}

  // export function getTimeData() {
  //   const data = [];
  //   for (let i = 0; i < 24; i++) {
  //     const hour = i < 10 ? `0${i}` : `${i}`;
  //     for (let j = 0; j < 60; j += 15) {
  //       const minute = j < 10 ? `0${j}` : `${j}`;
  //       data.push(`${hour}:${minute} ${i < 12 ? 'AM' : 'PM'}`);
  //     }
  //   }
  //   return data;
  // };

  export function getIndex(time) {
    const data = getTimeData();
    return data.findIndex((item) => item === time);
  };