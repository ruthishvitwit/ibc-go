(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{664:function(e,t,o){"use strict";o.r(t);var n=o(1),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"development-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#development-setup"}},[e._v("#")]),e._v(" Development setup")]),e._v(" "),o("h2",{attrs:{id:"dependencies"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[e._v("#")]),e._v(" Dependencies")]),e._v(" "),o("p",[e._v("We use "),o("a",{attrs:{href:"https://github.com/golang/go/wiki/Modules",target:"_blank",rel:"noopener noreferrer"}},[e._v("Go 1.14 Modules"),o("OutboundLink")],1),e._v(" to manage dependency versions.")]),e._v(" "),o("p",[e._v("The main branch of every Cosmos repository should just build with "),o("code",[e._v("go get")]),e._v(", which means they should be kept up-to-date with their dependencies, so we can get away with telling  people they can just "),o("code",[e._v("go get")]),e._v(" our software.")]),e._v(" "),o("p",[e._v("Since some dependencies are not under our control, a third party may break our build, in which case we can fall back on "),o("code",[e._v("go mod tidy -v")]),e._v(".")]),e._v(" "),o("p",[e._v("Other helpful commands:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("go get")]),e._v(" to add a new go module (including if the existing go module is being semantic version bumped, i.e. my/module/v1 -> my/module/v2).")]),e._v(" "),o("li",[o("code",[e._v("go get -u")]),e._v(" to update an existing dependency.")]),e._v(" "),o("li",[o("code",[e._v("go mod tidy")]),e._v(" to update dependencies in "),o("code",[e._v("go.sum")]),e._v(".")])]),e._v(" "),o("h2",{attrs:{id:"protobuf"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#protobuf"}},[e._v("#")]),e._v(" Protobuf")]),e._v(" "),o("p",[e._v("We use "),o("a",{attrs:{href:"https://developers.google.com/protocol-buffers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Protocol Buffers"),o("OutboundLink")],1),e._v(" along with "),o("a",{attrs:{href:"https://docs.buf.build/introduction",target:"_blank",rel:"noopener noreferrer"}},[e._v("buf"),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"https://github.com/gogo/protobuf",target:"_blank",rel:"noopener noreferrer"}},[e._v("gogoproto"),o("OutboundLink")],1),e._v(" to generate code for use in ibc-go.")]),e._v(" "),o("p",[e._v("For determinstic behavior around protobuf tooling, everything is containerized using Docker. Make sure to have Docker installed on your machine, or head to "),o("a",{attrs:{href:"https://docs.docker.com/get-docker/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker's website"),o("OutboundLink")],1),e._v(" to install it.")]),e._v(" "),o("p",[e._v("For formatting code in "),o("code",[e._v(".proto")]),e._v(" files, you can run the "),o("code",[e._v("make proto-format")]),e._v(" command.")]),e._v(" "),o("p",[e._v("For linting and checking breaking changes, we also use "),o("a",{attrs:{href:"https://buf.build/",target:"_blank",rel:"noopener noreferrer"}},[e._v("buf"),o("OutboundLink")],1),e._v(". You can use the commands "),o("code",[e._v("make proto-lint")]),e._v(" and "),o("code",[e._v("make proto-check-breaking")]),e._v(" to respectively lint your proto files and check for breaking changes.")]),e._v(" "),o("p",[e._v("To generate the protobuf stubs, you can run "),o("code",[e._v("make proto-gen")]),e._v(".")]),e._v(" "),o("p",[e._v("We also added the "),o("code",[e._v("make proto-all")]),e._v(" command to run the above commands ("),o("code",[e._v("proto-format")]),e._v(", "),o("code",[e._v("proto-lint")]),e._v(" and "),o("code",[e._v("proto-gen")]),e._v(") sequentially.")]),e._v(" "),o("p",[e._v("To update third-party protobuf dependencies, you can run "),o("code",[e._v("make proto-update-deps")]),e._v(". This requires "),o("code",[e._v("buf")]),e._v(" to be installed in the local development environment (see "),o("a",{attrs:{href:"https://docs.buf.build/installation",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("buf")]),e._v("s installation documentation"),o("OutboundLink")],1),e._v(" for more details).")]),e._v(" "),o("p",[e._v("For generating or updating the swagger file that documents the URLs of the RESTful API that exposes the gRPC endpoints over HTTP, you can run the "),o("code",[e._v("proto-swagger-gen")]),e._v(" command.")]),e._v(" "),o("p",[e._v("It reads protobuf service definitions and generates a reverse-proxy server which translates a RESTful HTTP API into gRPC.")]),e._v(" "),o("h2",{attrs:{id:"developing-and-testing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#developing-and-testing"}},[e._v("#")]),e._v(" Developing and testing")]),e._v(" "),o("ul",[o("li",[e._v("The latest state of development is on "),o("code",[e._v("main")]),e._v(".")]),e._v(" "),o("li",[e._v("Build the "),o("code",[e._v("simd")]),e._v(" test chain binary with "),o("code",[e._v("make build")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("main")]),e._v(" must never fail "),o("code",[e._v("make test")]),e._v(".")]),e._v(" "),o("li",[e._v("No "),o("code",[e._v("--force")]),e._v(" onto "),o("code",[e._v("main")]),e._v(" (except when reverting a broken commit, which should seldom happen).")]),e._v(" "),o("li",[e._v("Create a development branch either on "),o("code",[e._v("github.com/cosmos/ibc-go")]),e._v(", or your fork (using "),o("code",[e._v("git remote add fork")]),e._v(").")]),e._v(" "),o("li",[e._v("Before submitting a pull request, begin "),o("code",[e._v("git rebase")]),e._v(" on top of "),o("code",[e._v("main")]),e._v(".")]),e._v(" "),o("li",[e._v("Ensure you are using the pre-commit hooks by running "),o("code",[e._v("make setup-pre-commit")]),e._v(".")])]),e._v(" "),o("p",[e._v("All Go tests in ibc-go can be ran by running "),o("code",[e._v("make test")]),e._v(".")]),e._v(" "),o("p",[e._v("Please make sure to run "),o("code",[e._v("make format")]),e._v(" before every commit - the easiest way to do this is have your editor run it for you upon saving a file. Additionally please ensure that your code is lint compliant by running "),o("code",[e._v("make lint-fix")]),e._v(" (requires "),o("code",[e._v("golangci-lint")]),e._v(").")]),e._v(" "),o("p",[e._v("When testing a function under a variety of different inputs, we prefer to use "),o("a",{attrs:{href:"https://github.com/golang/go/wiki/TableDrivenTests",target:"_blank",rel:"noopener noreferrer"}},[e._v("table driven tests"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("All unit tests should use the testing package. Please see the testing package "),o("RouterLink",{attrs:{to:"/testing/"}},[e._v("README")]),e._v(" for more information.")],1),e._v(" "),o("p",[e._v("Test coverage is continuously deployed at "),o("a",{attrs:{href:"https://app.codecov.io/github/cosmos/ibc-go",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://app.codecov.io/github/cosmos/ibc-go"),o("OutboundLink")],1),e._v(". PRs that improve test coverage are welcome, but in general the test coverage should be used as a guidance for finding API use cases that are not covered by tests. We don't recommend adding tests that only improve coverage but not actually test a meaning use case.")]),e._v(" "),o("h2",{attrs:{id:"documentation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#documentation"}},[e._v("#")]),e._v(" Documentation")]),e._v(" "),o("ul",[o("li",[e._v("If you open a PR on ibc-go, it is mandatory to update the relevant documentation in "),o("code",[e._v("/docs")]),e._v(".")]),e._v(" "),o("li",[e._v("We lint the markdown files for documentation with "),o("a",{attrs:{href:"https://github.com/igorshubovych/markdownlint-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("markdownlint-cli"),o("OutboundLink")],1),e._v(". Please run "),o("code",[e._v("make docs-lint")]),e._v(" before pushing changes in the markdown files (you will need to have "),o("code",[e._v("markdownlint-cli")]),e._v(" installed, so please follow the "),o("a",{attrs:{href:"https://github.com/igorshubovych/markdownlint-cli#installation",target:"_blank",rel:"noopener noreferrer"}},[e._v("installation instructions"),o("OutboundLink")],1),e._v(").")]),e._v(" "),o("li",[e._v("Generate the folder "),o("code",[e._v("docs/.vuepress/dist")]),e._v(" with all the static files for the documentation site with "),o("code",[e._v("make build-docs")]),e._v(".")]),e._v(" "),o("li",[e._v("Run the documentation site locally with "),o("code",[e._v("make view-docs")]),e._v(".")])])])}),[],!1,null,null,null);t.default=r.exports}}]);