import Link from "next/link";
import {  ActivityWrapper, ActivityDate, ActivityName } from "./styles";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { getColorOfDate, showDateAnTime } from "../../utils/moment";

export default function Activity({photo, name, date, id, color}){
	return (
		<Link href={`atividades/${id}`}>
			<ActivityWrapper>
				<ActivityName
					backgroundColor={color}
				>
					<div>
						<img src={photo} alt={name} />
					</div>
					<p>{name}</p>
				</ActivityName>

				<ActivityDate
					color={getColorOfDate(date)}
				>
					<FontAwesomeIcon 
						icon={faCalendarAlt}
						color={getColorOfDate(date)}
						size="lg"
					/>
					<p> {showDateAnTime(date, "DD/MM")} </p>
				</ActivityDate>
			</ActivityWrapper>
		</Link>
		)
	}