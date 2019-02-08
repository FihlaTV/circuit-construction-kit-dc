// Copyright 2017, University of Colorado Boulder

/**
 * Model for the Lab Screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var circuitConstructionKitDc = require( 'CIRCUIT_CONSTRUCTION_KIT_DC/circuitConstructionKitDc' );
  var CircuitConstructionKitModel = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/model/CircuitConstructionKitModel' );

  class LabModel extends CircuitConstructionKitModel {

    /**
     * @param {Tandem}
     */
    constructor( tandem ) {
      super( tandem );
    }
  }

  return circuitConstructionKitDc.register( 'LabModel', LabModel );
} );