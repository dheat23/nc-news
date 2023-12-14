# Northcoders News

This project is hosted at https://nc-news-dh.netlify.app/articles

## Summary

This app serves as the frontend for a news website, with functionality including:
* Viewing a list of articles with condensed information
* Filtering the articles by topic, e.g. coding
* Sorting and ordering the articles, e.g. number of votes in ascending order
* Viewing single articles with full information, including the ability to upvote and downvote
* Viewing a list of comments for each article
* Adding and deleting comments, based on being 'logged in' as a hardcoded user

The project was created using Vite and React.js, with React Router used for routing. The data (articles, comments, etc.) is retrieved using Axios requests to a [backend API](https://github.com/dheat23/dh-news-server), which is hosted at: https://dh-news-server.onrender.com/api.


 ## Getting Started

 The following instructions outline how to use this repo locally.

### Prerequisites

* Node.js: v20.8.0

### Clone the Repository ###

Clone and cd into the repo: 
```
git clone https://github.com/dheat23/nc-news.git
cd nc-news
```
### Install Dependencies ###

Install the necessary dependencies: 
```
npm install
```

### Run Locally

Start the project locally:

```
npm run dev
```
You should then see the following in your terminal:

```
➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```
Open the Local: link in the browser of your choice to view the app, and to view local changes dynamically

### Acknowledgements

This project was created as part of the [Northcoders](https://northcoders.com/) Software Development bootcamp. Thanks to everyone at Northcoders for their support!