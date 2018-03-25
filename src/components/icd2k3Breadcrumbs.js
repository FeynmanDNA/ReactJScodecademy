/* this breadcrumbs plugin is from icd2k3/react-router-breadcrumbs-hoc 
 * https://github.com/icd2k3/react-router-breadcrumbs-hoc
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';

// map & render your breadcrumb components however you want.
// each `breadcrumb` has the props `key`, `location`, and `match` included!
const Breadcrumbs = ({ breadcrumbs }) => (
  <div>
    {breadcrumbs.map((breadcrumb, index) => (
      <span key={breadcrumb.props.key}>
        <NavLink to={breadcrumb.props.match.url}>
          {breadcrumb}
        </NavLink>
        {(index < breadcrumbs.length - 1) && <i> / </i>}
      </span>
    ))}
  </div>
);

export default withBreadcrumbs()(Breadcrumbs);
