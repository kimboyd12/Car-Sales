import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';

const AdditionalFeatures = props => {

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.AdditionalFeatures.length ? (
        <ol type="1">
          {props.AdditionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    AdditionalFeatures: state.AdditionalFeatures
  }
}

export default connect(mapStateToProps, {})(AdditionalFeatures)
