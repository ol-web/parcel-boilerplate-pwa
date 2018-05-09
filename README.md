# parcel-boilerplate-pwa
Parcel boilerplate for creating Progressive Web Apps and regular web apps with all the good stuff Parcel provides plus additional plugins, configuration and popular libraries out of the box.

* * *

### Installation and usage:

`npm install -g parcel-bundler`  
`npm install`  
`npm run dev`  
`npm run build`  


* * *

### The features include:

*   Everything that [Parcel](https://github.com/parcel-bundler/parcel) does out of the box
*   Generating service workers to cache the assets you use and enable PWA support with [parcel-plugin-sw-cache](https://github.com/mischnic/parcel-plugin-sw-cache)
*   Ready out of the box project structure filled out with placeholder HTML, SCSS, JS and web manifest...
*   ...but there's also a project structure for [React](https://github.com/facebook/react) \+ [Redux](https://github.com/reactjs/react-redux) \+ [Router](https://github.com/ReactTraining/react-router) if you need to use these instead...
*   ...aaand if you're using React, you can also use the beatiful [styled-jsx (CSS-in-JS)](https://github.com/zeit/styled-jsx) component as well
*   Supporting all the new cool JS features with [babel-preset-stage-3](https://www.npmjs.com/package/babel-preset-stage-3)
*   Minifying images to your desired quality with [parcel-plugin-imagemin](https://github.com/DeMoorJasper/parcel-plugin-imagemin)
*   Some useful libraries ready to use such as [Lodash](https://github.com/lodash/lodash), [SuperAgent](https://github.com/visionmedia/superagent), [Bootstrap 4](https://github.com/twbs/bootstrap) , [jQuery](https://github.com/jquery/jquery)

* * *

### Things for you to do:

*   Delete what you don't need from the project src directory. If you don't need React you can delete the entire /js directory(just leave an empty index.js inside it). You can always start from scratch too.
*   Fill out the manifest.webmanifest file. Your icon should be at least 192x192px for additional functionality. Splash screen support requires bigger picture so it's up to you
*   Fill out the head section of index.html, some of it is similiar to the manifest
*   Service Workers in development are disabled by default. You can test them by setting cache.inDev to true in package.json but they can sometimes screw something up during development like loading outdated files so you should use incognito mode etc.
*   You can adjust the quality of minifed images in imagemin.config.js. Quality 60 seems like a fairly good balance between quality and size but you can turn it down lower

* * *

### Is there something wrong?

Please tell me!
