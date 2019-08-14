# Set up your workspace using a Mac


## Step 0 - OS / libraries
We're focusing here on MacOS.
Make sure that your MacOS is up-to-date, as well as your Xcode app (you can install it via App Store).

All the steps below need to be executed in a **command line terminal**.

## Step 1 - Install HomeBrew
Homebrew is an open source software package management system that simplifies the installation of software on macOS operating system. 
To install it, run the following:
```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

## Step 2 - Install Ruby via renv
We will install and manage our Ruby version by using rbenv (Ruby virtual environment). 
rbenv is a good, stable and simple way of installing the Ruby programming language interpreter. 

Here's how to install it using your command line terminal:
```bash
brew install rbenv ruby-build
ruby -v
```
Please note that we're installing Ruby version 2.4.0. 
If this is not the version you are running, please do: 
```bash
rbenv install 2.4.0
rbenv global 2.4.0
```
Also run the following to avoid permission issues:
```bash
rbenv init
eval "$(rbenv init -)"
```

## Step 3 - Installing Bundler and Rails 
Straight to the point now, we need to make sure that our frameworks are installed. 
FLOSScoach is built on the top of Node.js (a platform that enables running javascript on server-side) and
Ruby on Rails (a web framework for Rails):
```bash
gem install bundler
gem install rails -v 5.2.1
```

## Step 4 - Database: Installing and setting up PostgreSQL
For our development environment, we use PostgreSQL. Installing PostgreSQL (in the version used in FLOSScoach) can be done with the following command:
```bash
brew install postgresql@9.5
```
Now...You need to have postgres up and running
```bash
export PATH="/usr/local/opt/postgresql@9.5/bin:$PATH"
brew services start postgresql@9.5
```
Lastly, you need to set a DB user and password so then *FLOSScoach* database setup will be able to explore and modify the development database

```bash
# python is the username (and the password) in the development set up.
createuser python -s -P
[It will prompt to enter a password: use python]
```
**AGAIN:** It is important to know that the default development password is **python** and you must set it just like this. 
In case you want different user/passoword just be sure to match these with the present in the *config/database.yml* file in your project


## Step 5 - Setup you git (maybe this is already set on your machine)
Let's get our git set, to be ready to submit any contributions.

```bash
git config --global color.ui true
git config --global user.name "Insert your name here"
git config --global user.email "yourEmailAdress@here.com"
```
You might want to use the same email as the one used for yout GitLab account.

## Step 6 - Cloning the FLOSScoach repository
Now that everything is ready, it's time to clone the repository of the project to run your local development server and start contributing
```bash
cd ~
# Cloning the development branchcan be done like so: git clone -b <branch> <remote_repo>
git clone -b development https://gitlab.com/flosscoach/flosscoach.git
#Navigate to the newly created repository clone:
cd flosscoach
```

## Step 7 - MAKE IT RUN!!!

Let's get it on
```bash
bundle install
rake db:migrate RAILS_ENV=development
rails server -p 8000
```
Finally done!! See your local server running on [localhost:8000](http://localhost:8000)
