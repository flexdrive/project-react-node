# Car Subscription Signup

> Fork to another git repo. (You might not want to use your personal repo if you do not want your current employer to see this.)

## Problem

Create a React frontend with a Node (micro) backend that allows a customer to create a new car subscription.

A car subscription requires:

* Information from the customer:

  * Name
  * Email
  * Date of Birth
  * Subscription Length (7 or 28 days)
  * Chosen vehicle

* Information from our services:
  * List of vehicles
    * At least description, odometer
  * Pricing

### Required Pages

1.  Create Subscription Page
2.  Success Page With Information About Subscription

### Guidelines

1.  Check into Git periodically
2.  Use any libraries you like
3.  Persistance does not need to be complicated (in-memory is fine)
4.  Take 1 - 2 hours on it
5.  Document your assumptions, describe what else would need to be done to make it "production-ready". Describe the approach you would take to test frontend and backend code.

### What We Are Looking For

1.  Coding skills
2.  Knowledge of React, NodeJS
3.  Ability to learn and apply a new library ([micro](https://github.com/zeit/micro))


===============================

# Code Kata/ Technical Exercise Deliverable: Customer Subscription form

So.. the intent was to provide the team with a very broad view of how I would approach decomposing this user story and implement a solution. Hopefully it provides some talking points following the team review. 

To be transparent… I approached to satisfy the criteria, while also demonstrating width and depth of decomposition and implementation _(which translates that, while I exceeded the alotted time, I restructured the solution to meet the expectations of what I would assume to see in terms of application architecture, modeling, and scaffolding for production) :)_. The solution is far from production ready, but it does demonstrates a modular and decoupled architecture pattern that would be the basis for a more production ready app, while supporting scaling and reusability.

It may be a swing and a miss in terms of the deliverable time alloted... but I'm a "if you're going to do it, it's worth doing right and well" kind of individual - go big or go home, right, lol.


#### Repos
 - [Main Project](https://github.com/bretphillips/project-react-node)  
  This is the forked project that will contain the aplication and service code
 
 - [Dependency Project](https://github.com/bretphillips/project-react-node-resources)  
This is the project that contians data, models and model mappings, and was intended to host the http client library (ran short on time so it's in the main application). _It is referenced as a dependency in the applicable projects (in package.json), so no need to pull and run independently unless desired_ 

##### technologies
React, micro, micro-cors, micro-router, babel, enzyme, jest, redux, thunk _(included since I had brain freeze on in the initial interview... sorry Daniel)_, 


### Noteworthy
 - There is very little business logic in these React classes - that is handled by external classes and modules. 
 - Approach is more “Model, View, Whatever”, Unlike controllers used in full stack frameworks, the implementation of a state manager abstracts some of that work. 
 
The benefit is that almost all of the logic can be shared across both React, React Native, and any other past, current or future library or framework that is in place without requiring those algorithms to be written per project. There are some additional abstractions that could be made, but the overall intent is demonstrated.

### Still lots to do… 
- Service error handling - needs some attention
- Better Form validation _(HTML 5 is fast to set up, but not very dependable)_
- Need a better solution for HTTP Client library than fetch _(started down the super agent road, but ran short on time, sorry)_
- Environment variables are not implemented _(for identifying endpoint hosts, configs, account creds, etc. for development vs. test vs. production during build process)_
- Could benefit from some consistent code quality tooling implementation _(flow or typescript, lint)_
- Testing is pretty anemic - focused on width and depth of features - there are a few examples for reference.
- The modeling needs a little finesse due to deliverable time frame
- The service calls could be cleaned up - but the intent is there
- Formal build scripts need implemented

### Micro 
- I consolidated the service api into a single project; the pattern I have seen with similar services is to group into projects by feature segment/business purpose. 

Each service is still it’s own implementation 
-	this simplifies maintenance as a team grows larger and there are more services - you start to see redundancies when they are spread out due to naming convention deviations, etc.; start to see services with different names doing the same things, creating tech debt.
- The other benefit is caching strategy; if you have a service group that does not get updated very often, these can be cached for a predetermined period (12/24 hrs?), while other remain on demand (e.g. your pricing service may not update very often for duration, but your available inventory would constantly be updating as subscriptions are requested). 

### Micro Caveats
 - **CORS**: micro-core has some pretty slim documentation
 - **Micro-Cors and headers**: I found they were only applied  by setting on all services; setting headers uniquely on each service didn’t seem to work - probably requires some additional investigation.

### Run Instructions
```
// Install npm packages and run
cd client && npm install && npm start

// run the applications
cd service-api && npm install && npm start
```
