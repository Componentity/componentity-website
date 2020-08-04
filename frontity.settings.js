const settings = {
  "name": "CodeNawis - Fashion Jackson",
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
              "Contributing",
              "/contributing"
            ],
            [
              "Blog",
              "/category/blog"
            ]
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
          "api": "http://codenawis.com/componentity/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "frontity-share",
    "frontity-contact-form-7"
  ]
};

export default settings;
