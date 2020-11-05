function postList(posts) {
    return `<!DOCTYPE html>
    <html>
    <head>
      <title>Poker Cheatsheet</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <div>
        <h1>Poker Cheatsheet</h1>
        ${posts.map(post => `
          <div>
            <h2><a href="/posts/${post.id}">${post.title}</a></h2>
          </div>`
        ).join('')}
      </div>
    </body>
  </html>`
  }
  
  module.exports = postList