"use strict";(self.webpackChunkchromody_github_io=self.webpackChunkchromody_github_io||[]).push([[4903,5578,6403],{3785:e=>{function n(e){e.languages.lua={comment:/^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,string:{pattern:/(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,greedy:!0},number:/\b0x[a-f\d]+(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,keyword:/\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,function:/(?!\d)\w+(?=\s*(?:[({]))/,operator:[/[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,{pattern:/(^|[^.])\.\.(?!\.)/,lookbehind:!0}],punctuation:/[\[\](){},;]|\.+|:+/}}e.exports=n,n.displayName="lua",n.aliases=[]},7582:(e,n,t)=>{var a=t(3785),o=t(9701);function r(e){e.register(a),e.register(o),function(e){e.languages.etlua={delimiter:{pattern:/^<%[-=]?|-?%>$/,alias:"punctuation"},"language-lua":{pattern:/[\s\S]+/,inside:e.languages.lua}},e.hooks.add("before-tokenize",(function(n){e.languages["markup-templating"].buildPlaceholders(n,"etlua",/<%[\s\S]+?%>/g)})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"etlua")}))}(e)}e.exports=r,r.displayName="etlua",r.aliases=[]},9701:e=>{function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,r){if(t.language===a){var i=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"===typeof r&&!r(e))return e;for(var o,u=i.length;-1!==t.code.indexOf(o=n(a,u));)++u;return i[u]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,r=Object.keys(t.tokenStack);!function i(u){for(var l=0;l<u.length&&!(o>=r.length);l++){var s=u[l];if("string"===typeof s||s.content&&"string"===typeof s.content){var g=r[o],c=t.tokenStack[g],p="string"===typeof s?s:s.content,f=n(a,g),d=p.indexOf(f);if(d>-1){++o;var k=p.substring(0,d),m=new e.Token(a,e.tokenize(c,t.grammar),"language-"+a,c),h=p.substring(d+f.length),b=[];k&&b.push.apply(b,i([k])),b.push(m),h&&b.push.apply(b,i([h])),"string"===typeof s?u.splice.apply(u,[l,1].concat(b)):s.content=b}}else s.content&&i(s.content)}return u}(t.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_etlua.8130ace5.chunk.js.map