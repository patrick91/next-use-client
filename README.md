# Next.js "use client" inside app directory

This is a small demo of "use client". My understanding was that every component
marked with "use client" would be only loaded on the client side. But this is
doesn't seem to be the case.

If you run this demo, you will see that the "use client" component is also
loaded on the server side, since you can access it by doing an http request:

```
http get https://next-use-client.vercel.app/ | npx prettier --parser html
```

Trimmed output:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <!-- ... -->
  </head>
  <body>
    <main class="page_main__WunS6">
      <!-- 👇👇👇👇👇👇👇👇👇👇 -->
      <div>
        <h1>
          Count:
          <!-- -->0
        </h1>
        <button>Increment</button>
      </div>
    </main>
  </body>
</html>
```

The "use client" directive is defined in
[RFC 0227](https://github.com/reactjs/rfcs/blob/main/text/0227-server-module-conventions.md#use-client-directive)
and states the following:

> When a Component with a "use client" directive (similar to "use strict") is
> imported in a "React Server" environment its exports gets replaced with a
> special "Reference" object. This object can't be accessed directly in that
> file but it can be passed into React as if it was a plain component.
>
> React, together with the bundler, knows how to send this reference to the
> client. On the client it's rendered as a Client component. The real file never
> actually gets imported on the server.
