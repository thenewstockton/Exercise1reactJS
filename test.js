/*
sudo npm install -g browserify
npm init
npm install --save babelify watchify babel-preset-react react react-dom

in package.json{
"start": "watchify src/main.jsx -v -t [ babelify --presets [ react ] ] -o public/js/main.js",
}

npm start
*/

window.onload=function(){
    alert("HEllo");
};
