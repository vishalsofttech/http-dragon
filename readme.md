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


## Handling Request In React.js

This hook fetches initial data from an API and re-fetches when its dependencies change. It returns loading, error, and data states.

```javascript
import {useRequest,http,Http} from "http-dragon"

const request = http.get(Http.apis.getInitialData)

function RequestExample() {
 const [loading,error,data] = useRequest(request,{dependencies:[]})
 //todo
}
```
## Pipe function 

Pipe uses to transform the the response that get from api. and execute  operators functions.

```
The map operator only works with responses in array format.
```

```javascript
import {Http,http,Operators} from "http-dragon"

const request = http.get(Http.apis.nameOfApi)
request.setPipe(Operators.map(el=>{
 el.fullName = el.name + el.lastName
}))

request.call({
 next:(transformedData)=>{
 //todo
 },
 error:(error)=>{
  //todo
 }
 raw:(fullResponse)=>{
  //todo
 }
})
``` 
