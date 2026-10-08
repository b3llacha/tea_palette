import test from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import {createServer} from './server.mjs';
const server=createServer();
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const port=server.address().port;
const request=(pathname,options={})=>new Promise((resolve,reject)=>{const req=http.request({hostname:'127.0.0.1',port,path:pathname,...options},res=>{let body='';res.on('data',chunk=>body+=chunk);res.on('end',()=>resolve({status:res.statusCode,headers:res.headers,body}));});req.on('error',reject);req.end();});
try {
 await test('serves artwork with correct type, caching and conditional requests',async()=>{
  const result=await request('/assets/optimized/beli-teapot.webp');assert.equal(result.status,200);assert.equal(result.headers['content-type'],'image/webp');assert.ok(result.headers['content-security-policy']);
  const cached=await request('/assets/optimized/beli-teapot.webp',{headers:{'If-None-Match':result.headers.etag}});assert.equal(cached.status,304);assert.equal(cached.body,'');
 });
 await test('HEAD is bodyless and unsupported methods are rejected',async()=>{const head=await request('/',{method:'HEAD'});assert.equal(head.status,200);assert.equal(head.body,'');assert.ok(Number(head.headers['content-length'])>0);const post=await request('/',{method:'POST'});assert.equal(post.status,405);assert.equal(post.headers.allow,'GET, HEAD');});
 await test('blocks private files, encoded traversal, and malformed addresses',async()=>{for(const [url,status] of [['/.git/config',403],['/package.json',404],['/server.mjs',404],['/assets/%2e%2e/index.html',403],['/%zz',400],['/missing',404]]){const result=await request(url);assert.equal(result.status,status,url);}});
}finally {await new Promise(resolve=>server.close(resolve));}
