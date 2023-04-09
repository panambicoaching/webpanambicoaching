import Alert from 'react-bootstrap/Alert'
import AppButton from "../AppButton"
import CourseFreeCard from "../CourseFreeCard"
import CoursePaidCard from "../CoursePaidCard"
import Row from 'react-bootstrap/Row'

import dates from "../../utils/dates"
import './styles.scss'

const courseType = {
	done: {
		header: "Cursos disponibles",
		text: "Accede a las grabaciones y el material complementario donde quieras, cuando quieras.",
		emptyString: "grabados",
		filterCond: (dateDiff) => dateDiff <= 0,
		textBtn: "Acceder",
		linkBtn: "/contact/courses"
	},
	next: {
		header: "Próximamente",
		text: "Los siguientes cursos se dictarán en vivo a través de Zoom, luego podrás acceder a las grabaciones disponibles.",
		emptyString: "próximos",
		filterCond: (dateDiff) => dateDiff > 0,
		textBtn: "¡Quiero participar!",
		linkBtn: "https://lu.ma/panambicoaching"
	}
}

const CoursesList = ({ items, status }) => {
	const statusFilterFn = (item) => {
		const dateDiff = dates.dateDiff(item.date);
		return courseType[status].filterCond(dateDiff);
	}

  return (
			<section className={`container-fluid panambi-${status}-courses`}>
				<div className="container-lg">
					<h2>{courseType[status].header}</h2>
					<p>{courseType[status].text}</p>
					
					<Row className="courses-list">
						{
							items.length > 0
								? (<>
										{
											items
												.filter(statusFilterFn)
												.map((item) => item.id === 1
														? <CourseFreeCard key={`course-${item.id}`} item={item} />
														: <CoursePaidCard key={`course-${item.id}`} item={item} status={status}/>
												)
										}
									</>)
								: <div className="col-12">
										<Alert variant="secondary" className="text-center fw-bold">{`No hay ${courseType[status].emptyString} disponibles en la API`}</Alert>
									</div>
						}
					</Row>

					<div className="courses-cta-btn">
						<AppButton 
							variant={"regular"}
							as={"link"}
							design={"primary"}
							to={courseType[status].linkBtn}
							text={courseType[status].textBtn}
							target={"_blank"}
						/>
					</div>
				</div>
			</section>
	)
}

export default CoursesList;