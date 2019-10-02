/////////////////////////

*yesterday (tues)*

    *last*
      created util/session_api_util and added those functions to window in entry file to test.

    *next*
      setup zoom & setup laptop for bringing in

  
*today (wed)*

    *last*
      made root_reducer.js, it is empty

    *next*
      - remember me checkbox

/////////////////////////


heroku

1) buildpacks
  * first nodejs, then ruby

2)
  * no active debuggers or console.log()
  * in package.json:
    * script "postinstall": "webpack"
    * top level key "engines": {
          "node": "..." node -v,
          "npm": "..." npm -v
        }
  * ensure all changes committed

3)
  * log in from heroku cli
  * heroku git:remote -a project_name
  * git push -u heroku master

4)
  * images use image_url helper method if in .erb
  * must bootstrap ^^ to access in react component




/////////////////////////

testing

cam = {user: {
  username: 'chebert',
  password: 'password',
  email: 'c.hebert@live.com'
}}