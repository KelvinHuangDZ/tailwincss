import _implicitStylesheets from "./app.css";

import _implicitScopedStylesheets from "./app.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {t: api_text, h: api_element, gid: api_scoped_id} = $api;
  return [api_element("main", {
    classMap: {
      "mq-body": true
    },
    key: 0
  }, [api_element("h1", {
    key: 1
  }, [api_text("This is H1")]), api_element("h2", {
    key: 2
  }, [api_text("This is H2")]), api_element("h3", {
    key: 3
  }, [api_text("This is H3")]), api_element("h4", {
    key: 4
  }, [api_text("This is H4")]), api_element("h5", {
    key: 5
  }, [api_text("This is H5")]), api_element("label", {
    attrs: {
      "for": api_scoped_id("")
    },
    key: 6
  }, [api_text("Label")]), api_element("p", {
    classMap: {
      "mq-body": true
    },
    key: 7
  }, [api_text("This is paragraph")]), api_element("p", {
    classMap: {
      "mq-body-strong": true
    },
    key: 8
  }, [api_text("This is paragraph")]), api_element("p", {
    classMap: {
      "mq-body-small": true
    },
    key: 9
  }, [api_text("This is paragraph")]), api_element("a", {
    classMap: {
      "mq-link": true
    },
    attrs: {
      "href": "www.google.com",
      "target": "_bland"
    },
    key: 10
  }, [api_text("Google")]), api_element("ul", {
    classMap: {
      "mq-unordered-list": true
    },
    key: 11
  }, [api_element("li", {
    classMap: {
      "mq-list-item": true
    },
    key: 12
  }, [api_text("List item 1")]), api_element("li", {
    classMap: {
      "mq-list-item": true
    },
    key: 13
  }, [api_text("List item 2")]), api_element("li", {
    classMap: {
      "mq-list-item": true
    },
    key: 14
  }, [api_text("List item 3")])]), api_element("ol", {
    classMap: {
      "mq-ordered-list": true
    },
    key: 15
  }, [api_element("li", {
    classMap: {
      "mq-list-item": true
    },
    key: 16
  }, [api_text("List item 1")]), api_element("li", {
    classMap: {
      "mq-list-item": true
    },
    key: 17
  }, [api_text("List item 2")]), api_element("li", {
    classMap: {
      "mq-list-item": true
    },
    key: 18
  }, [api_text("List item 3")])])])];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "mq-app_app"
