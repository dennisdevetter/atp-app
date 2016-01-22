# ATP Tennis application

The project exists of several application, a server app and a client app

***

## Getting Started 
####Install Node.js and then:

```sh
$ git clone https://github.com/dennisdevetter/atp-app
$ cd at-app
```

##Client application

This is a web application that lists all tennis players participating the ATP and WTA tournaments.

####Folder structure

The modules directory is responsible for holding data-related files, broken down by sub-directories that deal with a facet of your application. You could potentially have these as separate npm repositories that you include into your project — they have no dependencies save on redux and 3rd party libraries.

Each action and reducer has a separate file for itself. There is one standard that tries to put all the contents of a module together into a single file. I personally would advocate against this on medium to large-sized projects —when things get big, it’s better to break out things into as small a chunk as possible!

To make reducers similar in structure across modules, an index.js file is included, which exports every other reducer in the folder. Then, at the top-level, there exists a single reducers.js file which includes each <module-name>/reducers. This single reducers file can then be used to produce your Redux store.

####Installation

Install modules and starts node server

```sh
$ cd client-app
$ npm install
$ npm run start
```

Open browser at http://localhost:3000

##Server application

####Installation

Install modules and starts node server

```sh
$ cd server-app
$ npm install
$ npm run start
```

