const settings = {
  "name": "Componentity - From CodeNawis",
  "state": {
    "frontity": {
      "url": "https://componentity.com",
      "title": "Componentity",
      "description": "Thousands of Components Ready to be Copy-Pasted"
    }
  },
  "packages": [
    {
      "name": "@frontity/codenawis",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Support Us",
              "/support"
            ],
            [
              "Blog",
              "/category/blog"
            ],
            [
              "Components",
              "https://componentity.com/#getStarted"
            ],
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://codenawis.com/componentity/wp-json",
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "frontity-share",
    "frontity-contact-form-7",
    "@frontity/head-tags"
  ]
};

export default settings;
