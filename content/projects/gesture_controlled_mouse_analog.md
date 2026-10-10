---
title: "Gesture Controlled Mouse using Pure Analog Electronics"
summary: "A microcontroller-free gesture-controlled mouse using 555 timers and flip-flops to process IR sensor signals for clicking and scrolling."
tags:
  - Analog Electronics
  - 555 Timer
  - Flip Flop
  - IR Sensors
  - Circuit Design
github: "https://github.com/dharunwork2007/gesture-controlled-mouse-analog"
image: "/projects/gesture-controlled-mouse-analog.jpg"
---

A hardware-only implementation of a gesture-controlled mouse designed without microcontrollers or code. The system relies entirely on analog electronics and logic circuits to detect hand gestures via IR sensors and translate them into mouse clicks and quadrature scrolling signals.

## Features
- **Microcontroller-Free Architecture**: Entirely designed using discrete components, IC timers, and flip-flops.
- **Gesture-Based Mouse Clicks**: IR sensor triggers a 555 timer configured in monostable mode, generating clean single pulses for left and right mouse clicks.
- **Quadrature Scroll Signal Generation**: Utilizes 555 timers in astable mode combined with flip-flops to produce phase-shifted quadrature signals for smooth up and down directional scrolling.

## Technologies Used
- **Sensors**: Infrared (IR) Proximity Sensors
- **Integrated Circuits**: NE555 Timers (Monostable & Astable configurations), D/JK Flip-Flops
- **Hardware Components**: Resistors, Capacitors, Transistors, Breadboard/PCB