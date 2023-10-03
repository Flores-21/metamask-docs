"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5412],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>b});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=n.createContext({}),o=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},u=function(e){var a=o(e.components);return n.createElement(p.Provider,{value:a},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=o(t),d=l,b=m["".concat(p,".").concat(d)]||m[d]||c[d]||r;return t?n.createElement(b,s(s({ref:a},u),{},{components:t})):n.createElement(b,s({ref:a},u))}));function b(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,s=new Array(r);s[0]=d;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[m]="string"==typeof e?e:l,s[1]=i;for(var o=2;o<r;o++)s[o]=t[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},75143:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>p,default:()=>b,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=t(87462),l=(t(67294),t(3905)),r=t(65488),s=t(85162);const i={sidebar_label:"Options",sidebar_position:1},p="Snaps command line options",o={unversionedId:"reference/cli/options",id:"reference/cli/options",title:"Snaps command line options",description:"b, bundle",source:"@site/snaps/reference/cli/options.md",sourceDirName:"reference/cli",slug:"/reference/cli/options",permalink:"/snaps/reference/cli/options",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/cli/options.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Options",sidebar_position:1},sidebar:"snapsSidebar",previous:{title:"Snaps command line interface",permalink:"/snaps/reference/cli/"},next:{title:"Subcommands",permalink:"/snaps/reference/cli/subcommands"}},u={},m=[{value:"b, bundle",id:"b-bundle",level:2},{value:"d, dist",id:"d-dist",level:2},{value:"depsToTranspile",id:"depstotranspile",level:2},{value:"e, eval",id:"e-eval",level:2},{value:"fix, writeManifest",id:"fix-writemanifest",level:2},{value:"h, help",id:"h-help",level:2},{value:"m, manifest",id:"m-manifest",level:2},{value:"n, outfileName",id:"n-outfilename",level:2},{value:"p, port",id:"p-port",level:2},{value:"r, root",id:"r-root",level:2},{value:"s, src",id:"s-src",level:2},{value:"sourceMaps",id:"sourcemaps",level:2},{value:"strip, stripComments",id:"strip-stripcomments",level:2},{value:"suppressWarnings",id:"suppresswarnings",level:2},{value:"transpilationMode",id:"transpilationmode",level:2},{value:"verboseErrors",id:"verboseerrors",level:2},{value:"version",id:"version",level:2}],c={toc:m},d="wrapper";function b(e){let{components:a,...t}=e;return(0,l.kt)(d,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"snaps-command-line-options"},"Snaps command line options"),(0,l.kt)("h2",{id:"b-bundle"},"b, bundle"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--bundle <file>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-b out/bundle.js\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"bundle: 'out/bundle.js' \n")))),(0,l.kt)("p",null,"Path to the Snap ",(0,l.kt)("a",{parentName:"p",href:"/snaps/concepts/anatomy#bundle-file"},"bundle file"),".\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"dist/bundle.js"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#e-eval"},(0,l.kt)("inlineCode",{parentName:"a"},"eval"))," subcommand."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-b")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--bundle"),"."),(0,l.kt)("h2",{id:"d-dist"},"d, dist"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--dist <directory>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-d out\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"dist: 'out'\n")))),(0,l.kt)("p",null,"Path to the output directory.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"dist"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#b-build"},(0,l.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-d")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--dist"),"."),(0,l.kt)("h2",{id:"depstotranspile"},"depsToTranspile"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--depsToTranspile <array>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--depsToTranspile dep1,dep2\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"depsToTranspile: ['dep1','dep2']\n")))),(0,l.kt)("p",null,"List of dependencies to transpile, if ",(0,l.kt)("a",{parentName:"p",href:"#transpilationmode"},(0,l.kt)("inlineCode",{parentName:"a"},"--transpilationMode"))," is set to\n",(0,l.kt)("inlineCode",{parentName:"p"},"localAndDeps"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#b-build"},(0,l.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("h2",{id:"e-eval"},"e, eval"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--eval <boolean>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-e false\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"eval: false\n")))),(0,l.kt)("p",null,"Indicates whether to attempt to evaluate the Snap bundle in SES.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#b-build"},(0,l.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-e")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--eval"),"."),(0,l.kt)("h2",{id:"fix-writemanifest"},"fix, writeManifest"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--fix <boolean>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--fix false\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"fix: false\n")))),(0,l.kt)("p",null,"When validating the Snap ",(0,l.kt)("a",{parentName:"p",href:"/snaps/concepts/anatomy#manifest-file"},"manifest file")," using the\n",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#m-manifest"},(0,l.kt)("inlineCode",{parentName:"a"},"manifest"))," subcommand, indicates whether to make necessary changes to\nthe manifest file.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--fix")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--writeManifest"),"."),(0,l.kt)("h2",{id:"h-help"},"h, help"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-h, --help\n")),(0,l.kt)("p",null,"Displays the help message and exits.\nYou can use this option with ",(0,l.kt)("inlineCode",{parentName:"p"},"mm-snap")," or any ",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands"},"subcommand"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-h")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--help"),"."),(0,l.kt)("h2",{id:"m-manifest"},"m, manifest"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--manifest <boolean>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-m false\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"manifest: false\n")))),(0,l.kt)("p",null,"Indicates whether to validate the Snap ",(0,l.kt)("a",{parentName:"p",href:"/snaps/concepts/anatomy#manifest-file"},"manifest file"),".\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#b-build"},(0,l.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-m")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--manifest"),"."),(0,l.kt)("h2",{id:"n-outfilename"},"n, outfileName"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--outfileName <string>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-n snap.js\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"outfileName: 'snap.js'\n")))),(0,l.kt)("p",null,"Output file name when building a Snap from source.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"bundle.js"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#b-build"},(0,l.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-n")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--outfileName"),"."),(0,l.kt)("h2",{id:"p-port"},"p, port"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--port <number>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-p 9000\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"port: 9000\n")))),(0,l.kt)("p",null,"Local server port for testing.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"8081"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#s-serve"},(0,l.kt)("inlineCode",{parentName:"a"},"serve"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-p")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--port"),"."),(0,l.kt)("h2",{id:"r-root"},"r, root"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--root <directory>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-r out\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"root: 'out'\n")))),(0,l.kt)("p",null,"Server root directory.\nThe default is the current working directory (",(0,l.kt)("inlineCode",{parentName:"p"},"."),")."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#s-serve"},(0,l.kt)("inlineCode",{parentName:"a"},"serve"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-r")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--root"),"."),(0,l.kt)("h2",{id:"s-src"},"s, src"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--src <file>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-s lib/index.js\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"src: 'lib/index.js'\n")))),(0,l.kt)("p",null,"Path to the Snap source file.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"src/index.js"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#b-build"},(0,l.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-s")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--src"),"."),(0,l.kt)("h2",{id:"sourcemaps"},"sourceMaps"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--sourceMaps <boolean>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--sourceMaps true\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"sourceMaps: true\n")))),(0,l.kt)("p",null,"Indicates whether builds should include source maps.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#b-build"},(0,l.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("h2",{id:"strip-stripcomments"},"strip, stripComments"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--strip <boolean>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--strip false\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"strip: false\n")))),(0,l.kt)("p",null,"Indicates whether to remove code comments from the build output.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#b-build"},(0,l.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--strip")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--stripComments"),"."),(0,l.kt)("h2",{id:"suppresswarnings"},"suppressWarnings"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--suppressWarnings <boolean>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--suppressWarnings true\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"suppressWarnings: true\n")))),(0,l.kt)("p",null,"Indicates whether to suppress warnings.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("p",null,"You can use this option with any ",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands"},"subcommand"),"."),(0,l.kt)("h2",{id:"transpilationmode"},"transpilationMode"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--transpilationMode <string>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--transpilationMode localAndDeps\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"transpilationMode: 'localAndDeps'\n")))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://babeljs.io/"},"Babel")," transpilation mode.\nSpecify ",(0,l.kt)("inlineCode",{parentName:"p"},"localAndDeps")," to transpile all source code including dependencies, ",(0,l.kt)("inlineCode",{parentName:"p"},"localOnly")," to transpile\nlocal source code only, and ",(0,l.kt)("inlineCode",{parentName:"p"},"none")," to transpile nothing."),(0,l.kt)("p",null,"The default is ",(0,l.kt)("inlineCode",{parentName:"p"},"localOnly"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#b-build"},(0,l.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"For TypeScript Snaps, ",(0,l.kt)("inlineCode",{parentName:"p"},"--transpilationMode")," must be set to either ",(0,l.kt)("inlineCode",{parentName:"p"},"localOnly")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"localAndDeps"),".")),(0,l.kt)("h2",{id:"verboseerrors"},"verboseErrors"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--verboseErrors <boolean>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--verboseErrors false\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"verboseErrors: false\n")))),(0,l.kt)("p",null,"Indicates whether to display original errors.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("p",null,"You can use this option with any ",(0,l.kt)("a",{parentName:"p",href:"/snaps/reference/cli/subcommands"},"subcommand"),". "),(0,l.kt)("h2",{id:"version"},"version"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--version\n")),(0,l.kt)("p",null,"Displays the version number and exits."))}b.isMDXComponent=!0},85162:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(67294),l=t(86010);const r={tabItem:"tabItem_Ymn6"};function s(e){let{children:a,hidden:t,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,s),hidden:t},a)}},65488:(e,a,t)=>{t.d(a,{Z:()=>d});var n=t(87462),l=t(67294),r=t(86010),s=t(12466),i=t(70989),p=t(72389);const o={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){let{className:a,block:t,selectedValue:i,selectValue:p,tabValues:u}=e;const m=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const a=e.currentTarget,t=m.indexOf(a),n=u[t].value;n!==i&&(c(a),p(n))},b=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=m.indexOf(e.currentTarget)+1;a=m[t]??m[0];break}case"ArrowLeft":{const t=m.indexOf(e.currentTarget)-1;a=m[t]??m[m.length-1];break}}a?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},a)},u.map((e=>{let{value:a,label:t,attributes:s}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>m.push(e),onKeyDown:b,onClick:d},s,{className:(0,r.Z)("tabs__item",o.tabItem,s?.className,{"tabs__item--active":i===a})}),t??a)})))}function m(e){let{lazy:a,children:t,selectedValue:n}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function c(e){const a=(0,i.Y)(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",o.tabList)},l.createElement(u,(0,n.Z)({},e,a)),l.createElement(m,(0,n.Z)({},e,a)))}function d(e){const a=(0,p.Z)();return l.createElement(c,(0,n.Z)({key:String(a)},e))}},70989:(e,a,t)=>{t.d(a,{Y:()=>c});var n=t(67294),l=t(16550),r=t(91980),s=t(67392),i=t(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:l}}=e;return{value:a,label:t,attributes:n,default:l}}))}function o(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??p(t);return function(e){const a=(0,s.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function u(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:t}=e;const s=(0,l.k6)(),i=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,r._X)(i),(0,n.useCallback)((e=>{if(!i)return;const a=new URLSearchParams(s.location.search);a.set(i,e),s.replace({...s.location,search:a.toString()})}),[i,s])]}function c(e){const{defaultValue:a,queryString:t=!1,groupId:l}=e,r=o(e),[s,p]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!u({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:r}))),[c,d]=m({queryString:t,groupId:l}),[b,k]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[l,r]=(0,i.Nk)(t);return[l,(0,n.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:l}),f=(()=>{const e=c??b;return u({value:e,tabValues:r})?e:null})();(0,n.useLayoutEffect)((()=>{f&&p(f)}),[f]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);p(e),d(e),k(e)}),[d,k,r]),tabValues:r}}}}]);