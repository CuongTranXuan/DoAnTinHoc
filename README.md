This is a project for Class 'Đồ án tin học: thiết kế xây dựng phần mềm' - semester 20182

# Team: Team5 

# Class: PFIEV - 61 

# Members: 

* Trần Xuân Cường - 20160589
* Đoàn Ngọc Duy   - 20160754
* Trần Đăng Đôn	  - 20161018

# Phone Wiki 

[Click here](https://phonewiki.herokuapp.com/) for a link to the demo.

## Features
* Mobile ready single-page application
* Real-time notification system
* Profile pictures // TODO 
* Infinite-scroll loading of posts and threads
* @ mentions //TODO
* Admin dashboard for forum analytics
* Multiple admin users 	//TODO
* Moderation built in, including:
  * Locking or deleteing threads and posts


## Install

To install on Heroku:

 1. `git clone https://github.com/CuongTranXuan/DoAnTinHoc.git && cd DoAnTinHoc`
 2. `heroku login`
 3. `heroku git:remote -a <app-name>`
 4. `heroku config:set NODE_ENV=production`
 5. `heroku config:set SESSION_SECRET=<session-secret>`
 6. Add database add-on, get database URL
 7. `heroku config:set DATABASE_URL=<database-url>`
 8. `cd frontend && npm install`
 9. `npm run build`
 10. Remove the line `dist/` from `.gitignore`
 11. `cd .. && git add -A && git commit -m "Update .gitignore"`
 12. `git push heroku master`
 13. Visit the URL of the app and complete the on-screen instructions

N.B. the database here is assumed to be MySQL, on Heroku we're using ClearDB MySQL 
