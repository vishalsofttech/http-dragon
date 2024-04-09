# Http Dragon

Hi! This module enhances HTTP request control effortlessly, offering greater control.

# Basics

First, set up the base URL and APIs in the module.

```javascript
Http.baseUrl = "https://jsonplaceholder.typicode.com";
Http.setApis({
  nameOfApi: "/todos/1",
});
```

Import the Http class and its instance to access HTTP verbs

```javascript
import { Http, http } from "http-dragon";
```

Create a request object using an instance of the Http class.

```javascript
const request = http.get(Http.apis.nameOfApi);
request.call({
  next: (res) => {
    console.log(res);
  },
  error: (error) => {
    console.log(error);
  },
});
```

## Handling Request In React.js

This hook fetches initial data from an API and re-fetches when its dependencies change. It returns loading, error, and data states.

```javascript
import { useRequest, http, Http } from "http-dragon";

const request = http.get(Http.apis.getInitialData);

function RequestExample() {
  const [loading, error, data] = useRequest(request, { dependencies: [] });
  //todo
}
```

## Pipe function

Pipe uses to transform the response that get from api. and execute operators functions.

```
The map operator only works with data in array format. That example only works when the root of your response body contains the array.
```

```javascript
import {Http,http,Operators} from "http-dragon"

const request = http.get(Http.apis.nameOfApi)
request.setPipe(Operators.map(el=>{
 el += "done";
 return el;
}))

request.call({
 next:(transformedData)=>{
 //todo
 },
 error:(error)=>{
  //todo
 },
 raw:(fullResponse)=>{
  //todo
 }
})
```

Using the key approach to transform the response.

```
const response = { yourKeyName:[] }

```

```javascript
const request = http.get(Http.apis.nameOfApi);

request.setPipe(
  Operators.map("yourKeyName", (el) => {
    el += "done";
    return el;
  })
);
```

Using the nested keys.

```
const response = {
  yourKeyName:{
    allData:{
      finalData:["john"]
    }
  }
}

```

```javascript
const request = http.get(Http.apis.nameOfApi);

request.setPipe(
  Operators.map("yourKeyName.allData.finalData", (el) => {
    el += "done";
    return el;
  })
);
```

## Filter operator

The filter operator function is used for performing filtration on the array.That example only works when the root of your response body contains the array.

```javascript
import {Http,http,Operators} from "http-dragon"

const request = http.get(Http.apis.nameOfApi)

request.setPipe(Operators.filter(el=>{
  if(el==="done"){
    return true;
  }
    return false
}))

request.call({
 next:(transformedData)=>{
 //todo
 },
 error:(error)=>{
  //todo
 },
 raw:(fullResponse)=>{
  //todo
 }
})
```
Using the key approach to filter the response.

```javascript
const request = http.get(Http.apis.nameOfApi);

request.setPipe(
  Operators.filter("yourKeyName", (el) => {
    if(el === "done"){
      return true;
    }
    return false
  })
);
```
Using the nested keys.


```javascript
const request = http.get(Http.apis.nameOfApi);

request.setPipe(
  Operators.filter("yourKeyName.allData.finalData", (el) => {
     if(el === "done"){
      return true;
    }
    return false
  })
);
```