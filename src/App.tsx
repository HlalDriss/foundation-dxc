
import React, { useState } from "react";
import CounterAppOne from "./components/CounterAppOne";
//  import Typography from 'dxc/Typography';
import Grid from "./components/Grid/Grid";
import format from 'date-fns/format';

const App = () => {
	const [startDate, setStartDate] = useState(format(new Date(), 'yyyy-MM-dd'));
console.log(startDate);

	return (
		
		<div >
			<React.Suspense fallback={<div>Loading... </div>}>
		<div>Foundation</div>
		<div>
			<CounterAppOne />
			<Grid>
			<p>test 1</p>
			<p>test 2</p>
			<p>test 3</p>
			{/* <Link onClick={()=>console.log("Is clicked")} label="MFE" url="https://medium.com/swlh/implementing-micro-frontends-using-react-8d23b7e0a687" /> */}
			</Grid>
           {/* <Typography variant={'body'} >Text</Typography> */}
           {/* <Comp /> */}
		</div>
		</React.Suspense>	
	</div>
	)
};

export default App;