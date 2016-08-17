# localTestingServer


This is a simple node server using which you can very quickly create API's that can return dummy response (or true response as well)

Simple use-case : You never have to wait for an API to be up to be able to test it on client. Simply create API here, start the server and you are good to go.

## Install Node

Install node from here : [http://nodejs.org/]() 
 
##Clone the repo

Hard to move ahead without cloning or downloading the repo. Do that now.

## Creating an API

I have created an API "sayHello" which returns a JSON saying "Hello World"

1. **routes/helloworld.js** - contains POST and GET request for API "sayHello". While GET request simply returns from a string, the POST request, reads from a file. This use case has been provided as it helps in keeping the response safe and abstracted out. Also, multiple files can be referred to create different response.

2. **app.js** - line number 10 and 26 shows way to integrate a new path to API. In my case, it is "helloworld". You can create multiple new paths. "helloworld" in line number 10 refers to the file "helloworld.js" in routes directory.

##Starting the server
In the directory that you have downloaded (or cloned) run the command `npm start` to start the server. If you have changed nothing [http://localhost:3000/helloworld/sayhello]() should say you hello :-) 

##API
**/helloworld**

> 1. [**sayhello**](http://localhost:3000/helloworld/sayhello) - [GET] returns a response saying hello
> 2. [**sayhello**](http://localhost:3000/helloworld/sayhello) - [POST] returns a response saying hello, by reading response from a file

**/multipart**

> 1. [**singlefileupload**](http://localhost:3000/multipart/uploadsinglefile) - [POST] you can upload a single file. The key for file must be 'file'. For UI, you may want to use [Postman](https://www.getpostman.com/). Curl can also be used to make the request like below:
> 
		curl -X POST -F "file=@<absolute file path>" http://localhost:3000/multipart/singlefileupload


##Contact
For any help, please contact : <prabodh.prakash@gmail.com>
