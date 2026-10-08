import {mkdir,copyFile,cp,rm} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});
await mkdir('dist/assets',{recursive:true});
for(const file of ['index.html','styles.css','app.js'])await copyFile(file,`dist/${file}`);
for(const dir of ['optimized','fonts','logos','components'])await cp(`assets/${dir}`,`dist/assets/${dir}`,{recursive:true});
console.log('Static site built in dist/');
