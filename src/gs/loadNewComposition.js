"use strict";

gs.loadNewComposition = function() {
	var i = 0, trks = {};

	for ( ; i < env.def_nbTracks; ++i ) {
		trks[ common.smallId() ] = { order: i, toggle: true, name: "" };
	}
	return gs.loadComposition( {
		id: common.uuid(),
		bpm: env.def_bpm,
		stepsPerBeat: env.def_stepsPerBeat,
		beatsPerMeasure: env.def_beatsPerMeasure,
		name: "",
		duration: 0,
		tracks: trks,
		patterns: {},
		blocks: {},
		keys: {}
	} ).then(
		function() {
			ui.patterns.open( gs.newPattern( false ) );
		},
		function() {
			console.log( arguments );
		} );
};