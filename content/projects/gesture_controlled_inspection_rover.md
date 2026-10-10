---
title: "Gesture Controlled Inspection Rover"
summary: "An ESP32 FreeRTOS-powered inspection rover featuring gesture-based navigation via MediaPipe and real-time environmental telemetry displayed on a custom web dashboard."
tags:
  - ESP32
  - FreeRTOS
  - MediaPipe
  - Robotics
  - IoT
github: "https://github.com/dharunwork2007/gesture-controlled-inspection-rover"
image: "/projects/gesture-controlled-inspection-rover.jpg"
---

The Gesture Controlled Inspection Rover is a multi-modal robotic platform designed for remote environmental monitoring and intuitive teleoperation. Powered by an ESP32 micro-controller utilizing FreeRTOS for multi-task scheduling, the system captures real-time sensor data and responds instantaneously to hand gestures processed through computer vision.

## Features
- **Gesture Navigation**: Uses MediaPipe vision models to translate hand motions into directional movements for intuitive remote control.
- **Real-Time Telemetry**: Captures environmental readings using the DHT11 temperature and humidity sensor alongside obstacle detection using an ultrasonic sensor.
- **FreeRTOS Integration**: Multi-task architecture on the ESP32 ensures concurrent execution of motor control loops, sensor data ingestion, and communication tasks.
- **Monitoring Web Dashboard**: A web interface designed to log and visualize live temperature, humidity, and distance metrics in real-time.

## Technologies Used
- **Hardware**: ESP32, DHT11 Temperature & Humidity Sensor, Ultrasonic Sensor (HC-SR04), Motor Driver, Rover Chassis
- **Software & Libraries**: FreeRTOS, OpenCV, MediaPipe, Python/JavaScript (Web Dashboard)