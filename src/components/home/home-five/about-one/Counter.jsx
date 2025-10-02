import CountUp from "react-countup";

function AboutCounter() {
	return (
		<div className="sofax-counter-wrap-v5">
			<div className="sofax-counter-data-v5">
				<h2>
					<CountUp className="sofax-counter" end={2000} duration={3} redraw={true} enableScrollSpy />+
				</h2>
				<p>Sites Atendidos</p>
			</div>
			<div className="sofax-counter-data-v5">
				<h2>
					<CountUp className="sofax-counter" end={50} duration={3} redraw={true} enableScrollSpy />
					k+
				</h2>
				<p>Backlinks Gerados</p>
			</div>
			<div className="sofax-counter-data-v5">
				<h2>
					<CountUp className="sofax-counter" end={97} duration={3} redraw={true} enableScrollSpy />%
				</h2>
				<p>Taxa de Retenção</p>
			</div>
		</div>
	);
}

export default AboutCounter;
