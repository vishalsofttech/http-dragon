# Http Dragon

Hi! This module enhances HTTP request control effortlessly, offering greater control.


# Basics

First, set up the base URL and APIs in the module.
```javascript
Http.baseUrl =  "https://jsonplaceholder.typicode.com"
Http.setApis({
nameOfApi:"/todos/1"
})
```
Import the Http class and its instance to access HTTP verbs
```javascript
import {Http,http} from "http-dragon"
```
Create a request object using an instance of the Http class.

```javascript
const request = http.get(Http.apis.nameOfApi)
request.call({
 next:(res)=>{
  console.log(res)
 },
 error:(error)=>{
 console.log(error)
 }
})
```
