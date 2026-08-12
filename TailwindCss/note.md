it is utility first approach
 #Procedure  to download tailwind
 =>tailwind css download from documentation
 =>tailwind extension 
 =>tailwind from tailwind labs 
   "npm install -D prettier prettier-plugin-tailwindcss"=>for sorting the classnames 
   // prettier.config.js

/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
  plugins: ["prettier-plugin-tailwindcss"],
}