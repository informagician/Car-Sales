import React from 'react';
// import { connect } from 'react-redux';
// import { buyItem } from '../actions/featureActions'

const AdditionalFeature = props => {
  const status = props.added.filter(i => {
    return i.id == props.feature.id
  })
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => props.buyItem(props.feature)} disabled={status.length == 0 ? false : true }>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


export default AdditionalFeature;
