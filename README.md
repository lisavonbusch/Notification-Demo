# Notification-Demo

This is a simple notification demo which has a node server and react client.

The client-side uses the React CDN, which allows you to create react apps without having to create a webpack, babel and all the stuff that is normally required for a React App.
Unfortunately, JSX doesn't work all that well with it, so I'm using just createElement. It's just a small demo that hopefully gets the point across.

The data is stored in just a json file, which could be modified with puts or posts, but of course for a real app you want to use a data store such as SQLite.

Also, React uses the legacy class based components rather than functional components which are much cleaner. However, the React CDN doesn't seem to do too well with functional components, either.

The index.html just reads the data using the api and displays them in a regular HTML table.

There isn't much error handling and no automated tests as to save time in the implementation.
