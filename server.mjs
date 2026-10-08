import http from 'node:http';
import {readFile, realpath} from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {pathToFileURL} from 'node:url';
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.ttf':'font/ttf','.txt':'text/plain; charset=utf-8'};
export function createServer(root=process.cwd()) {
 return http.createServer(async(req,res)=>{
  const headers={'X-Content-Type-Options':'nosniff','Referrer-Policy':'strict-origin-when-cross-origin','X-Frame-Options':'DENY','Content-Security-Policy':"default-src 'none'; script-src 'self'; style-src 'self'; img-src 'self'; font-src 'self'; base-uri 'none'; frame-ancestors 'none'; form-action 'none'"};
  const fail=(status,message)=>{res.writeHead(status,{...headers,'Content-Type':'text/plain; charset=utf-8','Cache-Control':'no-store'});res.end(req.method==='HEAD'?undefined:message);};
  if(!['GET','HEAD'].includes(req.method)){res.setHeader('Allow','GET, HEAD');return fail(405,'Method not allowed');}
  let name;
  try{name=decodeURIComponent(req.url.split('?')[0]);}catch{return fail(400,'Invalid address');}
  if(name==='/' )name='/index.html';
  if(name.includes('\\')||name.split('/').some(part=>part.startsWith('.')||part.includes('\0')))return fail(403,'Access denied');
  if(!['/index.html','/styles.css','/app.js'].includes(name)&&!name.startsWith('/assets/'))return fail(404,'Not found');
  try {
   const resolvedRoot=await realpath(root);
   const file=await realpath(path.resolve(root,'.'+name));
   if(!file.startsWith(resolvedRoot+path.sep))return fail(403,'Access denied');
   const body=await readFile(file);
   const etag='"'+createHash('sha256').update(body).digest('hex').slice(0,20)+'"';
   const responseHeaders={...headers,'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':name.startsWith('/assets/')?'public, max-age=86400':'no-cache',ETag:etag};
   if(req.headers['if-none-match']===etag){res.writeHead(304,responseHeaders);return res.end();}
   res.writeHead(200,{...responseHeaders,'Content-Length':body.length});res.end(req.method==='HEAD'?undefined:body);
  }catch{return fail(404,'Not found');}
 });
}
if(import.meta.url===pathToFileURL(process.argv[1]).href)createServer().listen(5173,'127.0.0.1',()=>console.log('Tea Palette: http://localhost:5173'));
