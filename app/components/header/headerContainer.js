'use strict';

import React, { Component, PropTypes } from 'react';
import { List } from 'immutable';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ErrorReportingPageContainer));
