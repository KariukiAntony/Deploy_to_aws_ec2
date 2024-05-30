<div align="center">

# Shortify-Backend

<p> The backend api for the shortify web and mobile application </p>
</div>

## Registration

> **request**

- url: http://127.0.0.1:3000/api/v1/auth/register
- method: POST
- example of a request body:
  ```json
  {
    "username": "Antony",
    "email": "antonygichoya1@gmail.com",
    "password": "password",
    "confirm_password": "password"
  }
  ```
  > **response**

* status code: `201` if success else `400`
* response body:

```json
   "status": "success",
   "message": "user registerd successfully",
```

## Login

> **request**

- url: http://127.0.0.1:3000/api/v1/auth/login
- method: POST
- request body:
  ```json
  "email": "string"
  "password": "string"
  ```
  > **response**
- status code: `200` if success else `401`
- response body:

```json
   "status": "success",
   "access_token": "<user access token >",
```

## Get Profile

> **request**

- url: http://127.0.0.1:3000/api/v1/user/profile
- method: GET

> **response**

- status code: `200`
- example of a response body:

```json
   "username": "maich",
   "email": "mainamaich@gmail.com",
```

## Edit Profile

> **request**

- url: http://127.0.0.1:3000/api/v1/user/edit-profile
- method: POST

* request body:
  ```
  username: string optional
  email: string optional
  password: string optional
  ```

> **response**

- status code: `200`
- response body:

```json
   "username": "maich",
   "email": "mainamaich@gmail.com",
```

## BookMark a url

> **request**

- url: http://127.0.0.1:3000/api/v1/url/create
- method: POST

* request headers:

  ```
   Accept: "application/json",
   authorization: `Bearer token`,

  ```

* request body:

  ```
  "title": string  required
  "originalUrl": string  required

  ```

> **response**

- status code: `201`
- response body:

```json
  {
    "status": "succcess",
    "message": "url added successfully"
  },
```