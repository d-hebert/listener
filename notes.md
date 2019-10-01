*last action*
  created util/session_api_util and added those functions to window in entry file to test.

*tonight*
  setup zoom & setup laptop for bringing in


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