import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class TouchEvent {

  static SWIPE_THRESHOLD = 50

  static SWIPE_LEFT = 1
  static SWIPE_RIGHT = 2
  static SWIPE_UP = 3
  static SWIPE_DOWN = 4

  constructor(startEvent, endEvent){
      this.startEvent = startEvent
      this.endEvent = endEvent || null
  }

  isSwipeLeft(){
      return this.getSwipeDirection() == TouchEvent.SWIPE_LEFT
  }
  isSwipeRight(){
      return this.getSwipeDirection() == TouchEvent.SWIPE_RIGHT
  }
  isSwipeUp(){
      return this.getSwipeDirection() == TouchEvent.SWIPE_UP
  }
  isSwipeDown(){
      return this.getSwipeDirection() == TouchEvent.SWIPE_DOWN
  }

  getSwipeDirection(){
      let start = this.startEvent.changedTouches[0]
      let end = this.endEvent.changedTouches[0]

      if (!start || !end){
          return null
      }

      let horizontalDifference = start.screenX - end.screenX
      let verticalDifference = start.screenY - end.screenY

      if(Math.abs(horizontalDifference) > Math.abs(verticalDifference)){
          if(horizontalDifference >= TouchEvent.SWIPE_THRESHOLD){
              return TouchEvent.SWIPE_LEFT
          } else if (horizontalDifference <= -TouchEvent.SWIPE_THRESHOLD){
              return TouchEvent.SWIPE_RIGHT
          }
      } else {
          if(verticalDifference >= TouchEvent.SWIPE_THRESHOLD){
              return TouchEvent.SWIPE_UP
          } else if (verticalDifference <= -TouchEvent.SWIPE_THRESHOLD){
              return TouchEvent.SWIPE_DOWN
          }
      }
      return null
  }

  setEndEvent(endEvent){
      this.endEvent = endEvent
  }
}

