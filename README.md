Life Personal Network
=====================

## Setting up developement environement

### Initial setup

* Add `lpn.dev` to your `hosts` file :

```bash
sudo sh -c "echo 127.0.0.1 lpn.dev >> /etc/hosts"
```

## Deployment on Heroku

0. Create an Heroku account if not done yet.
1. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli), then run `heroku login`.
2. Create an application : `heroku create <application-name>`
3. Set the correct buildpacks for this application :
```bash
heroku buildpacks:add -i 2 https://github.com/heroku/heroku-buildpack-nodejs
```
4. Set the correct environment variables for your instance. See `app.json` for a reference of all required instances
```bash
heroku config:set SYMFONY_ENV=prod
heroku config:set ...
```
> You might need to instanciate some add-ons to make the service running, especially for MongoDB and e-mail server.
> Check your [Heroku Dashboard](https://dashboard.heroku.com/) for this.
> Not needed if you already manage yourself those services.

5. Add this application as a Git remote for your local repository : `heroku git:remote -a <application-name>`
6. Push to the newly created remote : `git push heroku`
> You must push to the `master` branch. If you are not on the `master` branch, you
> can force push to the remote `master` branch :
> `git push heroku your-local-branch:master -f`
