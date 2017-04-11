export const monoSynths = {
  bassy: {
    "portamento": 0.08,
    "oscillator": {
      "partials": [2, 1, 3, 2, 0.4]
    },
    "filter": {
      "Q": 4,
      "type": "lowpass",
      "rolloff": -48
    },
    "envelope": {
      "attack": 0.04,
      "decay": 0.06,
      "sustain": 0.4,
      "release": 1
    },
    "filterEnvelope": {
      "attack": 0.01,
      "decay": 0.1,
      "sustain": 0.6,
      "release": 1.5,
      "baseFrequency": 50,
      "octaves": 3.4
    }
  }
};

export const amSynths = {
  tiny: {
    "harmonicity": 2,
  "oscillator": {
      "type": "amsine2",
    	"modulationType" : "sine",
 	    "harmonicity": 1.01
    },
    "envelope": {
      "attack": 0.006,
      "decay": 4,
      "sustain": 0.04,
      "release": 1.2
    },
    "modulation" : {
    	"volume" : 13,
      "type": "amsine2",
    	"modulationType" : "sine",
 	    "harmonicity": 12
    },
    "modulationEnvelope" : {
        "attack": 0.006,
        "decay": 0.2,
        "sustain": 0.2,
        "release": 0.4
    }
  }
};

export const fmSynths = {
  electricCello: {
    "harmonicity": 3.01,
    "modulationIndex": 14,
    "oscillator": {
      "type": "triangle"
    },
    "envelope": {
      "attack": 0.2,
      "decay": 0.3,
      "sustain": 0.1,
      "release": 1.2
    },
    "modulation" : {
      "type": "square"
    },
    "modulationEnvelope" : {
      "attack": 0.01,
      "decay": 0.5,
      "sustain": 0.2,
      "release": 0.1
    }
  }
};
