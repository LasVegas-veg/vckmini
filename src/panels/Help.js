import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

import Persik from '../img/persik.png';
import './Help.css';

const Help = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Это Персик)
		</PanelHeader>
		<img className="Persik" src={persik} alt="Persik The Cat"/>
	</Panel>
);


Help.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};


export default Help;
