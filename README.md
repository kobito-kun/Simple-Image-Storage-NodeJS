# Simple Image Storage NodeJS
#### Currently Only supports Base64 Type

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://kobi.lol)

A simple expressjs application that saves a base64 image onto the './images'.

## Paths:
[GET] "/" - Gets all the images in the directory
`@returns {string|array} images in directory`
[GET] "/:file" - Add one of the images from the route above to get an image response
`@param {string} path`
`@return {file} image`
[PUT] "/file" - Put an image to store it. Params: 'title', 'base64'.
`@param {string|title, string|base64}`
`@return {string} status`
![PUT Example](https://cdn.discordapp.com/attachments/823042736469966898/860586766583070770/unknown.png)
