<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="Simple_Image_Storage_NodeJS_0"></a>Simple Image Storage NodeJS</h1>
<h4 class="code-line" data-line-start=1 data-line-end=2 ><a id="Currently_Only_supports_Base64_Type_1"></a>Currently Only supports Base64 Type</h4>
<p class="has-line-data" data-line-start="3" data-line-end="4"><a href="https://kobi.lol"><img src="https://travis-ci.org/joemccann/dillinger.svg?branch=master" alt="Build Status"></a></p>
<p class="has-line-data" data-line-start="5" data-line-end="6">A simple expressjs application that saves a base64 image onto the ‘./images’.</p>
<h2 class="code-line" data-line-start=7 data-line-end=8 ><a id="Paths_7"></a>Paths:</h2>
<p class="has-line-data" data-line-start="8" data-line-end="9"><strong>[GET]</strong> “/” - Gets all the images in the directory</p>
<p class="has-line-data" data-line-start="10" data-line-end="11"><code>@returns {string|array} images in directory</code></p>
<p class="has-line-data" data-line-start="12" data-line-end="13"><strong>[GET]</strong> “/:file” - Add one of the images from the route above to get an image response</p>
<p class="has-line-data" data-line-start="14" data-line-end="16"><code>@param {string} path</code><br>
<code>@return {file} image</code></p>
<p class="has-line-data" data-line-start="17" data-line-end="18"><strong>[PUT]</strong> “/file” - Put an image to store it. Params: ‘title’, ‘base64’.</p>
<p class="has-line-data" data-line-start="19" data-line-end="21"><code>@param {string|title, string|base64}</code><br>
<code>@return {string} status</code></p>
<p class="has-line-data" data-line-start="22" data-line-end="23"><img src="https://cdn.discordapp.com/attachments/823042736469966898/860586766583070770/unknown.png" alt="PUT Example"></p>