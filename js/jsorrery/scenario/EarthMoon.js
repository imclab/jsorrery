

define(
	[
		'jsorrery/NameSpace',
		'jsorrery/scenario/CommonCelestialBodies'
	], 
	function(ns, common) {
		
		var system =  {
			name : 'EarthMoon',
			title : 'The Moon and the Earth',
			commonBodies : ['earth', 'moon'],
			secondsPerTick : 3600,
			calculationsPerTick : 5,
			calculateAll : true,
			usePhysics : true,
			bodies : {
				earth : {
					//isStill : true,
					forceTrace : true,
					traceRelativeTo : 'universe'
				}
			},
			help : "Only the Earth and its moon. The Moon's orbit is not accurate as it is heavily perturbed by the Sun which is not included in the simulation."
		};

		return system;
		
	}
);