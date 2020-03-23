var description = post.description;
fs.writeFile(`data/${title}`, description, 'utf8', function(err){
  response.writeHead(302, {Location: `/?id=${title}`});
  response.end();
})