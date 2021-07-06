import React from 'react'
import { Link } from 'react-router-dom'
import './Interface.css'

const Questionnare="Questionnare"
const Results = 'Results'

function Interface (props) {

	const answered = props.view
	const  subAnswer= props.answer.split(" ").slice(0,3).join(" ")
	
	return (
		<div className="Interface">
			<p>...{subAnswer}...</p>
			<Link to={{ pathname: `/questions/${props.qId}`,
			 state: { view: !answered  ? Questionnare : Results}}} className='View-Poll'>View Poll</Link>
		</div>
	)
}

export {Questionnare , Results}
export default Interface