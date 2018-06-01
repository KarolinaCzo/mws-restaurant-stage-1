# Restaurant Reviews App — Stage 1

## Table of Contents

* Basic information
* Instructions
* Helpful information

## Basic information

### Name

Restaurant Reviews App — Stage 1

### Project Overview

A project made during the Udacity Front-End Web Developer Nanodegree.
For this project, my role was to take a static design that lacks accessibility and convert the design to be responsive on different screen sizes and accessible for screen reader use. I also had to add a service worker to begin the process of creating a seamless offline experience for the users.

### Description

I was provided with code for a restaurant reviews website. The code had many issues. It was barely usable on a desktop browser, much less a mobile device. It also didn't include any standard accessibility features, and didn't work offline at all. My job was to update the code to resolve these issues while still maintaining the included functionality.
The project was evaluated by a Udacity code reviewer according to the [Restaurant Reviews: Stage 1 project rubric](https://review.udacity.com/#!/rubrics/1090/view).

## Instructions

Steps to view the project:

1.  Fork and clone this repository.
2.  From inside the new directory, launch a local client server using Python from your terminal.
    In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
3.  With your server running, visit the site: `http://localhost:8000` and explore the Restaurant Reviews App.

## Helpful information

Links to the resources I used in my project that could be helpful for other developers:

* to get your own Google Maps API key visit:
  https://developers.google.com/maps/documentation/javascript/get-api-key?hl=ko

* CSS Grid course at Code Academy:
  https://www.codecademy.com/learn/learn-css

* implementing accessibility features:
  https://www.w3.org/WAI/GL/wiki/Using_aria-label_for_link_purpose
  https://www.w3.org/WAI/GL/wiki/Creating_Logical_Tab_Order_with_the_Tabindex_Attribute
  https://stackoverflow.com/questions/44712753/what-is-a-suitable-wai-aria-role-attribute-for-a-map-element
  https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
  https://tink.uk/using-the-aria-current-attribute/
  https://a11yproject.com/posts/how-to-use-application-role/

* adding a ServiceWorker:
  https://developers.google.com/web/fundamentals/codelabs/offline/
  https://stackoverflow.com/questions/46911701/use-of-self-clients-claim-and-self-skipwaiting-in-service-worker-may-increas
  https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting
  https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
  https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Updating_your_service_worker
  https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker
  https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/
  https://stackoverflow.com/questions/46216387/service-worker-caching-not-recognizing-timeout-as-a-function
  https://stackoverflow.com/questions/34147562/service-worker-is-caching-files-but-fetch-event-is-never-fired

- other:
  https://developer.mozilla.org/en-US/docs/Web/CSS/calc
