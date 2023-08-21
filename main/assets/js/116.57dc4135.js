(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{676:function(e,t,s){"use strict";s.r(t);var n=s(1),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"implementing-the-consensusstate-interface"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementing-the-consensusstate-interface"}},[e._v("#")]),e._v(" Implementing the "),s("code",[e._v("ConsensusState")]),e._v(" interface")]),e._v(" "),s("p",[e._v("A "),s("code",[e._v("ConsensusState")]),e._v(" is the snapshot of the counterparty chain, that an IBC client uses to verify proofs (e.g. a block).")]),e._v(" "),s("p",[e._v("The further development of multiple types of IBC light clients and the difficulties presented by this generalization problem (see "),s("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/docs/architecture/adr-006-02-client-refactor.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADR-006"),s("OutboundLink")],1),e._v(" for more information about this historical context) led to the design decision of each client keeping track of and set its own "),s("code",[e._v("ClientState")]),e._v(" and "),s("code",[e._v("ConsensusState")]),e._v(", as well as the simplification of client "),s("code",[e._v("ConsensusState")]),e._v(" updates through the generalized "),s("code",[e._v("ClientMessage")]),e._v(" interface.")]),e._v(" "),s("p",[e._v("The below "),s("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/exported/client.go#L133",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("ConsensusState")]),s("OutboundLink")],1),e._v(" interface is a generalized interface for the types of information a "),s("code",[e._v("ConsensusState")]),e._v(" could contain. For a reference "),s("code",[e._v("ConsensusState")]),e._v(" implementation, please see the "),s("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/light-clients/07-tendermint/consensus_state.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint light client "),s("code",[e._v("ConsensusState")]),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"clienttype-method"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clienttype-method"}},[e._v("#")]),e._v(" "),s("code",[e._v("ClientType")]),e._v(" method")]),e._v(" "),s("p",[e._v("This is the type of client consensus. It should be the same as the "),s("code",[e._v("ClientType")]),e._v(" return value for the "),s("RouterLink",{attrs:{to:"/ibc/light-clients/client-state.html"}},[e._v("corresponding "),s("code",[e._v("ClientState")]),e._v(" implementation")]),e._v(".")],1),e._v(" "),s("h2",{attrs:{id:"gettimestamp-method"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gettimestamp-method"}},[e._v("#")]),e._v(" "),s("code",[e._v("GetTimestamp")]),e._v(" method")]),e._v(" "),s("p",[s("code",[e._v("GetTimestamp")]),e._v(" should return the timestamp (in nanoseconds) of the consensus state snapshot.")]),e._v(" "),s("h2",{attrs:{id:"validatebasic-method"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validatebasic-method"}},[e._v("#")]),e._v(" "),s("code",[e._v("ValidateBasic")]),e._v(" method")]),e._v(" "),s("p",[s("code",[e._v("ValidateBasic")]),e._v(" should validate every consensus state field and should return an error if any value is invalid. The light client implementer is in charge of determining which checks are required.")])])}),[],!1,null,null,null);t.default=o.exports}}]);