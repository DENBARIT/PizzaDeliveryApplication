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

>For font-size->text-xl,text-lg,text-[100px]
=>for font-weight=> font-semibold
=>for letter-spacing=>tracking-widest,tracking-[5px]
=>for spacing between element=>space-x,space-y 
=>border-b,border-y,border-x in all directions
->px,py,pb,pt=for padding
->mb,mx,my=>for margin 
->hidden=>for display none,block,inline,inline-block  .
=>media query=>for the given media queries,sm,md
=>This means as the margin reaches sm then the margin will overwrite the default my-10 to my-16
=>for flex=>use flex to display,align items =>to align vertically,
->for grid,gap-x-4,gap-y-6,bg-red-400,grid-cols,grid-rows,h-screen=>to fill the whole screen
-=>using divide=>we add a divider 