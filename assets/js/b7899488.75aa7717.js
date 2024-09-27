"use strict";(self.webpackChunkawesome_notes=self.webpackChunkawesome_notes||[]).push([[596],{9499:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var r=o(6070),s=o(4837);const t={author:"Sabertazimi",authorTitle:"Web Developer",authorURL:"https://github.com/sabertazimi",authorImageURL:"https://github.com/sabertazimi.png",tags:["Web","CSS","Bootstrap"]},i="Bootstrap Basic Notes",a={id:"Web/CSS/BootstrapBasicNotes",title:"Bootstrap Basic Notes",description:"Custom Bootstrap Theme",source:"@site/notes/Web/CSS/BootstrapBasicNotes.md",sourceDirName:"Web/CSS",slug:"/Web/CSS/BootstrapBasicNotes",permalink:"/awesome-notes/Web/CSS/BootstrapBasicNotes",draft:!1,unlisted:!1,editUrl:"https://github.com/sabertazimi/awesome-notes/edit/main/notes/Web/CSS/BootstrapBasicNotes.md",tags:[{inline:!0,label:"Web",permalink:"/awesome-notes/tags/web"},{inline:!0,label:"CSS",permalink:"/awesome-notes/tags/css"},{inline:!0,label:"Bootstrap",permalink:"/awesome-notes/tags/bootstrap"}],version:"current",lastUpdatedBy:"sabertazimi",lastUpdatedAt:1712724461e3,frontMatter:{author:"Sabertazimi",authorTitle:"Web Developer",authorURL:"https://github.com/sabertazimi",authorImageURL:"https://github.com/sabertazimi.png",tags:["Web","CSS","Bootstrap"]},sidebar:"tutorialSidebar",previous:{title:"Angular Basic Notes",permalink:"/awesome-notes/Web/Angular/AngularBasicNotes"},next:{title:"CSS Advanced Notes",permalink:"/awesome-notes/Web/CSS/CSSAdvancedNotes"}},l={},c=[{value:"Custom Bootstrap Theme",id:"custom-bootstrap-theme",level:2},{value:"Bootstrap Reboot Tips",id:"bootstrap-reboot-tips",level:3},{value:"Useful Custom Functions",id:"useful-custom-functions",level:3},{value:"Custom Colors",id:"custom-colors",level:3},{value:"Custom Spacing",id:"custom-spacing",level:3},{value:"Custom Layout",id:"custom-layout",level:3},{value:"Custom Borders",id:"custom-borders",level:3},{value:"Custom Navbar and Navigation",id:"custom-navbar-and-navigation",level:3},{value:"Custom Dropdown",id:"custom-dropdown",level:3},{value:"Custom List Group",id:"custom-list-group",level:3},{value:"Custom Card",id:"custom-card",level:3},{value:"Custom Breadcrumb",id:"custom-breadcrumb",level:3},{value:"Custom Form",id:"custom-form",level:3},{value:"Reference",id:"reference",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"bootstrap-basic-notes",children:"Bootstrap Basic Notes"})}),"\n",(0,r.jsx)(n.h2,{id:"custom-bootstrap-theme",children:"Custom Bootstrap Theme"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/sabertazimi/hust-web/tree/main/css/bootstrap-cms",children:"Bootstrap CMS Theme"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://medium.com/@estherfalayi/setting-up-webpack-for-bootstrap-4-and-font-awesome-eb276e04aaeb",children:"Advanced Webpack Configuration"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"bootstrap-reboot-tips",children:"Bootstrap Reboot Tips"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"@import '~bootstrap/scss/reboot"}),";"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Some useful best practices:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["body ",(0,r.jsx)(n.code,{children:"font-size: 1rem"})," for scalable component spacing."]}),"\n",(0,r.jsxs)(n.li,{children:["avoid ",(0,r.jsx)(n.code,{children:"margin-top"})," as vertical margins collapse\n(only use ",(0,r.jsx)(n.code,{children:"margin-bottom"})," for headings ",(0,r.jsx)(n.code,{children:"h1/.../h6"}),",\nlists ",(0,r.jsx)(n.code,{children:"ul/ol/dl/dd"}),", ",(0,r.jsx)(n.code,{children:"<pre></pre>"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["block use ",(0,r.jsx)(n.code,{children:"rems"})," for ",(0,r.jsx)(n.code,{children:"margin"})," for easier scaling across device sizes"]}),"\n",(0,r.jsxs)(n.li,{children:["using inherit whenever possible for ",(0,r.jsx)(n.code,{children:"font-"})," property"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"box-sizing: border-box"})," is globally set on every element\nincluding ",(0,r.jsx)(n.code,{children:"*::before"})," and ",(0,r.jsx)(n.code,{children:"*::after"})]}),"\n",(0,r.jsxs)(n.li,{children:["body sets a global ",(0,r.jsx)(n.code,{children:"font-family"}),", ",(0,r.jsx)(n.code,{children:"line-height"})," and ",(0,r.jsx)(n.code,{children:"text-align"})]}),"\n",(0,r.jsxs)(n.li,{children:["body sets ",(0,r.jsx)(n.code,{children:"background-color: #fff"})," for safety"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"legend"}),"/",(0,r.jsx)(n.code,{children:"fieldset"})," have no borders/padding/margin"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"label"})," are set to ",(0,r.jsx)(n.code,{children:"display: inline-block"})," to allow margin"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"textarea"})," are modified to only be resizable vertically ",(0,r.jsx)(n.code,{children:"resize: vertical"}),"\nas horizontal resizing often \u201cbreaks\u201d page layout"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"summary"})," are set to ",(0,r.jsx)(n.code,{children:"cursor: pointer"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"useful-custom-functions",children:"Useful Custom Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"@import '~bootstrap/scss/functions';"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"@import '~bootstrap/scss/mixins';"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scss",children:"@function color($key: 'blue') {\n  @return map-get($colors, $key);\n}\n\n@function theme-color($key: 'primary') {\n  @return map-get($theme-colors, $key);\n}\n\n@function gray($key: '100') {\n  @return map-get($grays, $key);\n}\n\n@function theme-color-level($color-name: 'primary', $level: 0) {\n  /* stylelint-disable-next-line function-no-unknown */\n  $color: theme-color($color-name);\n  /* stylelint-disable-next-line function-no-unknown */\n  $color-base: if($level > 0, #000, #fff);\n  $level: abs($level);\n\n  @return mix($color-base, $color, $level * $theme-color-interval);\n}\n\n/* color contrast: color-yiq(color) */\n.custom-element {\n  /* stylelint-disable-next-line function-no-unknown */\n  color: color-yiq(theme-color('dark'));\n  /* stylelint-disable-next-line function-no-unknown */\n  background-color: color-yiq(#000);\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"custom-colors",children:"Custom Colors"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"@import '~bootstrap/scss/variables';"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:"$theme-colors: (\n  'primary': #0074d9,\n  'danger': #ff4136 'secondary': #495057,\n  'success': #37b24d,\n  'info': #1c7ed6,\n  'warning': #f59f00,\n  'danger': #f03e3e\n);\n\n$colors: (\n  'blue': $blue,\n  'indigo': $indigo,\n  'purple': $purple,\n  'pink': $pink,\n  'red': $red,\n  'orange': $orange,\n  'yellow': $yellow,\n  'green': $green,\n  'teal': $teal,\n  'cyan': $cyan,\n  'white': $white,\n  'gray': $gray-600,\n  'gray-dark': $gray-800\n);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"custom-spacing",children:"Custom Spacing"}),"\n",(0,r.jsxs)(n.p,{children:["key variable - ",(0,r.jsx)(n.code,{children:"$spacer"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"t - for classes that set margin-top or padding-top"}),"\n",(0,r.jsx)(n.li,{children:"b - for classes that set margin-bottom or padding-bottom"}),"\n",(0,r.jsx)(n.li,{children:"l - for classes that set margin-left or padding-left"}),"\n",(0,r.jsx)(n.li,{children:"r - for classes that set margin-right or padding-right"}),"\n",(0,r.jsxs)(n.li,{children:["x - for classes that set both ",(0,r.jsx)(n.code,{children:"xxx"}),"-left and ",(0,r.jsx)(n.code,{children:"xxx"}),"-right"]}),"\n",(0,r.jsxs)(n.li,{children:["y - for classes that set both ",(0,r.jsx)(n.code,{children:"xxx"}),"-top and ",(0,r.jsx)(n.code,{children:"xxx"}),"-bottom"]}),"\n",(0,r.jsx)(n.li,{children:"blank - for classes that set a margin or padding on all 4 sides of the element"}),"\n",(0,r.jsx)(n.li,{children:"0 - for classes that eliminate the margin or padding by setting it to 0"}),"\n",(0,r.jsxs)(n.li,{children:["1 - (by default) for classes that set the margin or padding to ",(0,r.jsx)(n.code,{children:"$spacer * .25"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["2 - (by default) for classes that set the margin or padding to ",(0,r.jsx)(n.code,{children:"$spacer * .5"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["3 - (by default) for classes that set the margin or padding to ",(0,r.jsx)(n.code,{children:"$spacer"})]}),"\n",(0,r.jsxs)(n.li,{children:["4 - (by default) for classes that set the margin or padding to ",(0,r.jsx)(n.code,{children:"$spacer * 1.5"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["5 - (by default) for classes that set the margin or padding to ",(0,r.jsx)(n.code,{children:"$spacer * 3"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"auto - for classes that set the margin to auto"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:".mt-0 {\n  margin-top: 0 !important;\n}\n\n.ml-1 {\n  margin-left: ($spacer * 0.25) !important;\n}\n\n.px-2 {\n  padding-right: ($spacer * 0.5) !important;\n  padding-left: ($spacer * 0.5) !important;\n}\n\n.p-3 {\n  padding: $spacer !important;\n}\n\n.mt-n1 {\n  margin-top: -0.25rem !important;\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"custom-layout",children:"Custom Layout"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:"$grid-columns: 12;\n$grid-gutter-width: 30px;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"custom-borders",children:"Custom Borders"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:"$border-width: 1px;\n$border-color: $gray-300;\n$border-radius: 0.25rem;\n$border-radius-lg: 0.3rem;\n$border-radius-sm: 0.2rem;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"custom-navbar-and-navigation",children:"Custom Navbar and Navigation"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:"/* $nav-link-padding-x: 1.5rem; */\n$navbar-nav-link-padding-x: 1.5rem;\n$nav-link-padding-y: 1rem;\n\n$navbar-light-color: $violet-4;\n$navbar-light-hover-color: $violet-6;\n$navbar-light-active-color: $violet-9;\n$navbar-light-toggler-border-color: $violet-2;\n\n$navbar-dark-color: $violet-3;\n$navbar-dark-hover-color: $violet-5;\n$navbar-dark-active-color: $violet-1;\n$navbar-dark-toggler-border-color: $violet-1;\n\n$nav-tabs-border-color: $primary;\n$nav-tabs-link-hover-border-color: $violet-5;\n$nav-tabs-link-active-color: $violet-9;\n$nav-tabs-link-active-bg: $violet-3;\n$nav-tabs-link-active-border-color: $violet-1;\n\n$nav-pills-link-active-color: $white;\n$nav-pills-link-active-bg: $primary;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"custom-dropdown",children:"Custom Dropdown"}),"\n",(0,r.jsxs)(n.p,{children:["custom ",(0,r.jsx)(n.code,{children:"$dropdown-"})," variables"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:"$dropdown-padding-y: 1rem;\n$dropdown-spacer: 0.5rem;\n$dropdown-bg: $white;\n$dropdown-border-color: $primary;\n$dropdown-border-width: $border-width * 3;\n$dropdown-link-color: $primary;\n$dropdown-item-padding-y: 0.5rem;\n$dropdown-item-padding-x: 3rem;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"custom-list-group",children:"Custom List Group"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:"$list-group-border-color: $primary;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"custom-card",children:"Custom Card"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:"$card-border-color: $primary;\n$card-color: $primary;\n$card-bg: $violet-0;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"custom-breadcrumb",children:"Custom Breadcrumb"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:"$breadcrumb-bg: $violet-0;\n$breadcrumb-divider-color: $gray-600;\n$breadcrumb-active-color: $violet-3;\n/* stylelint-disable-next-line function-no-unknown */\n$breadcrumb-divider: quote('>');\n"})}),"\n",(0,r.jsx)(n.h3,{id:"custom-form",children:"Custom Form"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:"$input-btn-padding-y: 0.75rem;\n$input-btn-padding-x: 1.5rem;\n$input-btn-focus-width: 0; /* remove focus box-shadow */\n$custom-control-indicator-checked-color: $primary;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/themeselection/bootstrap-cheatsheet",children:"BootStrap 5 CheatSheet"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},4837:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>a});var r=o(758);const s={},t=r.createContext(s);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);