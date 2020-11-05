function postDetails(post) {   
    if (!post.id) {
        return ['fail', `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Poker Cheatsheet</title>
            <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
            <h1><a href='/'>Poker Cheatsheet</a></h1>
                <div class='container'>
                    <h2>Uh-Oh, unfortunately the 404 card does not exist, better luck next time!</h2>
                    <div class='container' id='omegalul'>
                        <img src="https://media.tenor.com/images/1738efdfb0f75ba2d1f23abc441c329c/tenor.gif" />
                    </div>
                </div>
        </body>
        </html>`]
    } else {
    return ['pass', `<!DOCTYPE html>
    <html>
    <head>
        <title>Poker Cheatsheet</title>
        <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
        <div>
        <h1><a href='/'>Poker Cheatsheet</a></h1>
        <div class='container'>
            <h2 class='display-bottom'>${post.title}</h2>
            <div id='cards'>
                <img src='${post.image}'/>
            </div>
            <h3 class='display-top'>${post.content}</h3>
        </div>
    </body>`];
    }
 }

 module.exports = postDetails