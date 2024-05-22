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

## Get Posts

### get all posts

> **request**

- url: http://127.0.0.1:3000/api/v1/post/getall
- method: GET

* request headers:

  ```
   Accept: "application/json",
   authorization: `Bearer token`,

  ```

> **response**

- status code: `200`
- response body:

```json
[
  {
    "image": {
      "publicId": "amredi/hg1znknlzy0jexgpiwvt",
      "url": "https://res.cloudinary.com/dlio7cpjo/image/upload/v1707832312/amredi/hg1znknlzy0jexgpiwvt.jpg"
    },
    "_id": "65cb73f93a4fa55962650101",
    "title": "hello",
    "description": "helloo",
    "createdBy": "65c9ef8c05e3670930dc9408",
    "likes": [],
    "time": "2024-02-13T13:51:53.358Z",
    "__v": 0
  },
  {
    "image": {
      "publicId": "amredi/yh1j84aexj70ofqwnf7e",
      "url": "https://res.cloudinary.com/dlio7cpjo/image/upload/v1707832530/amredi/yh1j84aexj70ofqwnf7e.jpg"
    },
    "_id": "65cb74d2e667544b9bffb02c",
    "title": "helllo",
    "description": "helloo",
    "createdBy": "65c9ef8c05e3670930dc9408",
    "likes": [],
    "time": "2024-02-13T13:55:30.637Z",
    "__v": 0
  }
]
```

### get post by id

## Get All Likes From A Post

> **request**

- url: http://127.0.0.1:3000/api/v1/post/:postId/getpost
- method: GET

* request params:

  ```
  postId

  ```

> **response**

- status code: `200`
- response body:

```json
{
  "image": {
    "publicId": "amredi/yh1j84aexj70ofqwnf7e",
    "url": "https://res.cloudinary.com/dlio7cpjo/image/upload/v1707832530/amredi/yh1j84aexj70ofqwnf7e.jpg"
  },
  "_id": "65cb74d2e667544b9bffb02c",
  "title": "helllo",
  "description": "helloo",
  "createdBy": "65c9ef8c05e3670930dc9408",
  "likes": [],
  "time": "2024-02-13T13:55:30.637Z",
  "__v": 0
}
```

### get posts of a given user

> **request**

- url: http://127.0.0.1:3000/api/v1/post/:postId/getpost
- method: GET

* request headers:

  ```
   Accept: "application/json",
   authorization: `Bearer token`,

  ```

> **response**

- status code: `200`
- response body:

```json
[
  {
    "image": {
      "publicId": "amredi/hg1znknlzy0jexgpiwvt",
      "url": "https://res.cloudinary.com/dlio7cpjo/image/upload/v1707832312/amredi/hg1znknlzy0jexgpiwvt.jpg"
    },
    "_id": "65cb73f93a4fa55962650101",
    "title": "hello",
    "description": "helloo",
    "createdBy": "65c9ef8c05e3670930dc9408",
    "likes": ["65c9ef8c05e3670930dc9408"],
    "time": "2024-02-13T13:51:53.358Z",
    "__v": 2
  },
  {
    "image": {
      "publicId": "amredi/yh1j84aexj70ofqwnf7e",
      "url": "https://res.cloudinary.com/dlio7cpjo/image/upload/v1707832530/amredi/yh1j84aexj70ofqwnf7e.jpg"
    },
    "_id": "65cb74d2e667544b9bffb02c",
    "title": "helllo",
    "description": "helloo",
    "createdBy": "65c9ef8c05e3670930dc9408",
    "likes": [],
    "time": "2024-02-13T13:55:30.637Z",
    "__v": 0
  }
]
```

## Like a Post

> **request**

- url: http://127.0.0.1:3000/api/v1/post/:postId/like
- method: POST

* request headers:

```

Accept: "application/json",
authorization: `Bearer token`,

```

> **response**

- status code: `201`
- response body:

```json
{
  "message": "Post liked successfully",
  "numberOfLikes": 1
}
```