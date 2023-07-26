import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// higer order component (HOC)
const withRouter = WrappedComponent => props => {
  const params = useParams();
 
  return (
    <WrappedComponent
      {...props}
      params={params}            // get params
      navigate={useNavigate()}   // redirect
    />
  );
};
 
export default withRouter;