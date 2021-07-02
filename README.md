<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="Simple_Image_Storage_NodeJS_0"></a>Simple Image Storage NodeJS</h1>
<h4 class="code-line" data-line-start=1 data-line-end=2 ><a id="Currently_Only_supports_Base64_Type_1"></a>Currently Only supports Base64 Type</h4>
<p class="has-line-data" data-line-start="3" data-line-end="4"><a href="https://kobi.lol"><img src="https://travis-ci.org/joemccann/dillinger.svg?branch=master" alt="Build Status"></a></p>
<p class="has-line-data" data-line-start="5" data-line-end="6">A simple expressjs application that saves a base64 image onto the ‘./images’.</p>
<h2 class="code-line" data-line-start=7 data-line-end=8 ><a id="Paths_7"></a>Paths:</h2>
<p class="has-line-data" data-line-start="8" data-line-end="17">[GET] “/” - Gets all the images in the directory<br>
<code>@returns {string|array} images in directory</code><br>
[GET] “/:file” - Add one of the images from the route above to get an image response<br>
<code>@param {string} path</code><br>
<code>@return {file} image</code><br>
[PUT] “/file” - Put an image to store it. Params: ‘title’, ‘base64’.<br>
<code>@param {string|title, string|base64}</code><br>
<code>@return {string} status</code><br>
<img src="https://cdn.discordapp.com/attachments/823042736469966898/860586766583070770/unknown.png" alt="PUT Example"></p>