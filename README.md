Seems to work fine locally with text:

```
$ curl -F "text=input" localhost:3000/herokutest
Here there should be an error with valuable information for the user
```

And locally with an image:

```
$ curl -F "image=@heroku.png" localhost:3000/herokutest
Here there should be an error with valuable information for the user
```

However, when deployed only the submission with text works:

```
$ curl -F "text=input" node-upload-test.herokuapp.com/herokutest
Here there should be an error with valuable information for the user
```

And the image upload throws an H18 error:

```
$ curl -F "image=@heroku.png" node-upload-test.herokuapp.com/herokutest
<!DOCTYPE html>
	<html>
	  <head>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta charset="utf-8">
		<title>Application Error</title>
		<style media="screen">
		  html,body,iframe {
			margin: 0;
			padding: 0;
		  }
		  html,body {
			height: 100%;
			overflow: hidden;
		  }
		  iframe {
			width: 100%;
			height: 100%;
			border: 0;
		  }
		</style>
	  </head>
	  <body>
		<iframe src="//www.herokucdn.com/error-pages/application-error.html"></iframe>
	  </body>
```
```
2019-01-15T18:01:00.369775+00:00 heroku[router]: sock=backend at=error code=H18 desc="Server Request Interrupted" method=POST path="/herokutest" host=node-upload-test.herokuapp.com connect=0ms service=139ms status=503 bytes=287 protocol=http
```
