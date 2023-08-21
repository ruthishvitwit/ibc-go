(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{683:function(e,t,i){"use strict";i.r(t);var n=i(1),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),i("p",{attrs:{synopsis:""}},[e._v("Learn how to build IBC light client modules and fulfill the interfaces required to integrate with core IBC.")]),e._v(" "),i("h2",{attrs:{id:"pre-requisites-readings"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisites-readings"}},[e._v("#")]),e._v(" Pre-requisites Readings")]),e._v(" "),i("ul",[i("li",{attrs:{prereq:""}},[i("RouterLink",{attrs:{to:"/ibc/overview.html"}},[e._v("IBC Overview")]),e._v(")")],1),e._v(" "),i("li",{attrs:{prereq:""}},[i("a",{attrs:{href:"https://tutorials.cosmos.network/academy/3-ibc/4-clients.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBC Transport, Authentication, and Ordering Layer - Clients"),i("OutboundLink")],1)]),e._v(" "),i("li",{attrs:{prereq:""}},[i("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/main/spec/core/ics-002-client-semantics",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS-002 Client Semantics"),i("OutboundLink")],1)])]),e._v(" "),i("p",[e._v("IBC uses light clients in order to provide trust-minimized interoperability between sovereign blockchains. Light clients operate under a strict set of rules which provide security guarantees for state updates and facilitate the ability to verify the state of a remote blockchain using merkle proofs.")]),e._v(" "),i("p",[e._v("The following aims to provide a high level IBC light client module developer guide. Access to IBC light clients are gated by the core IBC "),i("code",[e._v("MsgServer")]),e._v(" which utilizes the abstractions set by the "),i("code",[e._v("02-client")]),e._v(" submodule to call into a light client module. A light client module developer is only required to implement a set interfaces as defined in the "),i("code",[e._v("modules/core/exported")]),e._v(" package of ibc-go.")]),e._v(" "),i("p",[e._v("A light client module developer should be concerned with three main interfaces:")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"#clientstate"}},[i("code",[e._v("ClientState")])]),e._v(" encapsulates the light client implementation and its semantics.")]),e._v(" "),i("li",[i("a",{attrs:{href:"#consensusstate"}},[i("code",[e._v("ConsensusState")])]),e._v(" tracks consensus data used for verification of client updates, misbehaviour detection and proof verification of counterparty state.")]),e._v(" "),i("li",[i("a",{attrs:{href:"#clientmessage"}},[i("code",[e._v("ClientMessage")])]),e._v(" used for submitting block headers for client updates and submission of misbehaviour evidence using conflicting headers.")])]),e._v(" "),i("p",[e._v("Throughout this guide the "),i("code",[e._v("07-tendermint")]),e._v(" light client module may be referred to as a reference example.")]),e._v(" "),i("h2",{attrs:{id:"concepts-and-vocabulary"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#concepts-and-vocabulary"}},[e._v("#")]),e._v(" Concepts and vocabulary")]),e._v(" "),i("h3",{attrs:{id:"clientstate"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#clientstate"}},[e._v("#")]),e._v(" "),i("code",[e._v("ClientState")])]),e._v(" "),i("p",[i("code",[e._v("ClientState")]),e._v(" is a term used to define the data structure which encapsulates opaque light client state. The "),i("code",[e._v("ClientState")]),e._v(" contains all the information needed to verify a "),i("code",[e._v("ClientMessage")]),e._v(" and perform membership and non-membership proof verification of counterparty state. This includes properties that refer to the remote state machine, the light client type and the specific light client instance.")]),e._v(" "),i("p",[e._v("For example:")]),e._v(" "),i("ul",[i("li",[e._v("Constraints used for client updates.")]),e._v(" "),i("li",[e._v("Constraints used for misbehaviour detection.")]),e._v(" "),i("li",[e._v("Constraints used for state verification.")]),e._v(" "),i("li",[e._v("Constraints used for client upgrades.")])]),e._v(" "),i("p",[e._v("The "),i("code",[e._v("ClientState")]),e._v(" type maintained within the light client module "),i("em",[e._v("must")]),e._v(" implement the "),i("a",{attrs:{href:"https://github.com/cosmos/ibc-go/tree/02-client-refactor-beta1/modules/core/exported/client.go#L36",target:"_blank",rel:"noopener noreferrer"}},[i("code",[e._v("ClientState")]),i("OutboundLink")],1),e._v(" interface defined in "),i("code",[e._v("core/modules/exported/client.go")]),e._v(".\nThe methods which make up this interface are detailed at a more granular level in the "),i("RouterLink",{attrs:{to:"/ibc/light-clients/client-state.html"}},[e._v("ClientState section of this guide")]),e._v(".")],1),e._v(" "),i("p",[e._v("Please refer to the "),i("code",[e._v("07-tendermint")]),e._v(" light client module's "),i("a",{attrs:{href:"https://github.com/cosmos/ibc-go/tree/02-client-refactor-beta1/proto/ibc/lightclients/tendermint/v1/tendermint.proto#L18",target:"_blank",rel:"noopener noreferrer"}},[i("code",[e._v("ClientState")]),e._v(" definition"),i("OutboundLink")],1),e._v(" containing information such as chain ID, status, latest height, unbonding period and proof specifications.")]),e._v(" "),i("h3",{attrs:{id:"consensusstate"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#consensusstate"}},[e._v("#")]),e._v(" "),i("code",[e._v("ConsensusState")])]),e._v(" "),i("p",[i("code",[e._v("ConsensusState")]),e._v(" is a term used to define the data structure which encapsulates consensus data at a particular point in time, i.e. a unique height or sequence number of a state machine. There must exist a single trusted "),i("code",[e._v("ConsensusState")]),e._v(" for each height. "),i("code",[e._v("ConsensusState")]),e._v(" generally contains a trusted root, validator set information and timestamp.")]),e._v(" "),i("p",[e._v("For example, the "),i("code",[e._v("ConsensusState")]),e._v(" of the "),i("code",[e._v("07-tendermint")]),e._v(" light client module defines a trusted root which is used by the "),i("code",[e._v("ClientState")]),e._v(" to perform verification of membership and non-membership commitment proofs, as well as the next validator set hash used for verifying headers can be trusted in client updates.")]),e._v(" "),i("p",[e._v("The "),i("code",[e._v("ConsensusState")]),e._v(" type maintained within the light client module "),i("em",[e._v("must")]),e._v(" implement the "),i("a",{attrs:{href:"https://github.com/cosmos/ibc-go/tree/02-client-refactor-beta1/modules/core/exported/client.go#L134",target:"_blank",rel:"noopener noreferrer"}},[i("code",[e._v("ConsensusState")]),i("OutboundLink")],1),e._v(" interface defined in "),i("code",[e._v("modules/core/exported/client.go")]),e._v(".\nThe methods which make up this interface are detailed at a more granular level in the "),i("RouterLink",{attrs:{to:"/ibc/light-clients/consensus-state.html"}},[i("code",[e._v("ConsensusState")]),e._v(" section of this guide")]),e._v(".")],1),e._v(" "),i("h3",{attrs:{id:"height"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#height"}},[e._v("#")]),e._v(" "),i("code",[e._v("Height")])]),e._v(" "),i("p",[i("code",[e._v("Height")]),e._v(" defines a monotonically increasing sequence number which provides ordering of consensus state data persisted through client updates.\nIBC light client module developers are expected to use the "),i("a",{attrs:{href:"https://github.com/cosmos/ibc-go/tree/02-client-refactor-beta1/proto/ibc/core/client/v1/client.proto#L89",target:"_blank",rel:"noopener noreferrer"}},[e._v("concrete type"),i("OutboundLink")],1),e._v(" provided by the "),i("code",[e._v("02-client")]),e._v(" submodule. This implements the expectations required by the "),i("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/exported/client.go#L156",target:"_blank",rel:"noopener noreferrer"}},[i("code",[e._v("Height")]),i("OutboundLink")],1),e._v(" interface defined in "),i("code",[e._v("modules/core/exported/client.go")]),e._v(".")]),e._v(" "),i("h3",{attrs:{id:"clientmessage"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#clientmessage"}},[e._v("#")]),e._v(" "),i("code",[e._v("ClientMessage")])]),e._v(" "),i("p",[i("code",[e._v("ClientMessage")]),e._v(" refers to the interface type "),i("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/exported/client.go#L147",target:"_blank",rel:"noopener noreferrer"}},[i("code",[e._v("ClientMessage")]),i("OutboundLink")],1),e._v(" used for performing updates to a "),i("code",[e._v("ClientState")]),e._v(" stored on chain.\nThis may be any concrete type which produces a change in state to the IBC client when verified.")]),e._v(" "),i("p",[e._v("The following are considered as valid update scenarios:")]),e._v(" "),i("ul",[i("li",[e._v("A block header which when verified inserts a new "),i("code",[e._v("ConsensusState")]),e._v(" at a unique height.")]),e._v(" "),i("li",[e._v("A batch of block headers which when verified inserts "),i("code",[e._v("N")]),e._v(" "),i("code",[e._v("ConsensusState")]),e._v(" instances for "),i("code",[e._v("N")]),e._v(" unique heights.")]),e._v(" "),i("li",[e._v("Evidence of misbehaviour provided by two conflicting block headers.")])]),e._v(" "),i("p",[e._v("Learn more in the "),i("RouterLink",{attrs:{to:"/ibc/light-clients/updates-and-misbehaviour.html"}},[e._v("Handling update and misbehaviour")]),e._v(" section.")],1)])}),[],!1,null,null,null);t.default=o.exports}}]);