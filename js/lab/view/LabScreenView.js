// Copyright 2017, University of Colorado Boulder

/**
 * The view for the Lab screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var circuitConstructionKitDc = require( 'CIRCUIT_CONSTRUCTION_KIT_DC/circuitConstructionKitDc' );
  var inherit = require( 'PHET_CORE/inherit' );
  var CircuitConstructionKitScreenView = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/view/CircuitConstructionKitScreenView' );

  /**
   * @param {CircuitConstructionKitModel} circuitConstructionKitScreenModel
   * @param {Tandem} tandem
   * @constructor
   */
  function LabScreenView( circuitConstructionKitScreenModel, tandem ) {
    CircuitConstructionKitScreenView.call( this, circuitConstructionKitScreenModel, tandem, {
      numberOfLeftBatteries: 0, // Only show right-facing batteries.
      toolboxOrientation: 'vertical', // The toolbox should be vertical
      showResetAllButton: true, // The reset all button should be shown.
      showSeriesAmmeters: true,
      numberOfCoins: 4,
      numberOfErasers: 4,
      numberOfDogs: 4,
      numberOfPencils: 4,
      numberOfHands: 4,
      numberOfDollarBills: 4,
      numberOfPaperClips: 4,
      numberOfHighVoltageBatteries: 4,
      numberOfHighResistanceResistors: 4,
      numberOfHighResistanceLightBulbs: 4
    } );
  }

  circuitConstructionKitDc.register( 'LabScreenView', LabScreenView );

  return inherit( CircuitConstructionKitScreenView, LabScreenView );
} );