# Setup FLOSScoach in your Linux machine (Debian-based)

## Step 1- Rails Dependencies dependencies 
First, there are some core dependencies that must be installed for the framework *Ruby on Rails* (a web framework for rails)
in which *FLOSScoach* is built on top of.

All the following commands need to be executed in the command line terminal of your machine.

### 1.1 Adding Node.js and Yarn repositories
First, we will need to install many dependencies that our application rely on. 
To do so, we first need to add Node.js and Yarn package repositories to our repository list:
```bash
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```

Then, we need to install the development libraries listed below:
```bash
sudo apt-get update
sudo apt-get install git-core curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev software-properties-common libffi-dev nodejs yarn
```

### 1.2 Installing Ruby through rbenv
We will install and manage our Ruby version by using rbenv (Ruby virtual environment). 
rbenv is a good, stable and simple way of installing the Ruby programming language interpreter. 

Here's how to install it using your command line terminal:
'''
```bash
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec $SHELL

git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc
exec $SHELL

rbenv install 2.3
rbenv global 2.3
ruby -v
```
Please note that we're installing Ruby version 2.3 

### 1.3 - Installing Bundler 
Bundler is the last dependency.
Bundler is used to manage ruby on rails application's dependencies 
by installing all the required gems listed for the project.

To install it, you need to execute:
```bash
gem install bundler
```
and it's all done.

## Step 2 - Installing Node.js and Rails
Straight to the point now, we need to make sure that our frameworks are installed. 
FLOSScoach is built on the top of Node.js (a platform that enables running javascript on server-side) and
Ruby on Rails (a web framework for Rails)

To install them, execute the following:

```bash
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```
```bash
gem install rails -v 5.4.0
```

## Step 3 - Database: Setting up PostgreSQL
For our development environment, we use PostgreSQL. Installing PostgreSQL can be done with the following commands:
```bash
sudo sh -c "echo 'deb http://apt.postgresql.org/pub/repos/apt/ xenial-pgdg main' > /etc/apt/sources.list.d/pgdg.list"
wget --quiet -O - http://apt.postgresql.org/pub/repos/apt/ACCC4CF8.asc | sudo apt-key add -
sudo apt-get update
sudo apt-get install postgresql-common
sudo apt-get install postgresql-9.5 libpq-dev
```

You need to set an user and password so then *FLOSScoach* database setup will be albe to explore and modify the development database
```bash
# python is the username in the development set up.
sudo -u postgres createuser python -s
```
It's important to jnow that the default development password is **python** and you must set it just like this
```bash
# Setting password for the user named python:
sudo -u postgres psql
\password python
# And you will be prompted to type the new password
```
In case you want different user/passoword just be sure to match these with 
the present in the *config/database.yml* file 

## Step 4 - Getting ready to submit changes: setup your local git

Version control is quintessential while contributing to open source projects and working with code in general. 
Here's how to set your *Git* configurations to identify yourself in the repository:
```bash
git config --global color.ui true
git config --global user.name "Insert your name here"
git config --global user.email "yourEmailAdress@here.com"
```
You might want to use the same email as the one used for yout GitLab account.


## Step 5 - Cloning the FLOSScoach repository
Now that everything is ready, it's time to clone the repository of the project to run your local development server and start contributing
```bash
cd ~
# Cloning the development branchcan be done like so: git clone -b <branch> <remote_repo>
git clone -b development https://gitlab.com/flosscoach/flosscoach.git
#Navigate to the newly created repository clone:
cd flosscoach
```
Some final small adjustments:
```bash
rake db:migrate RAILS_ENV=development
rails server -p 8000
```
Finally done!! See your local server running on [localhost:8000](http://localhost:8000)

