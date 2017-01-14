let nodeExcel = require('excel-export');

let excel = {

	// Columns should be of the syntax { caption: 'col title', type: 'string' }
	export: (columns, rows, sheetName) => {

		let conf = {};
		// conf.stylesXmlFile = "styles.xml";
		conf.name = sheetName || 'Sheet1';
		conf.cols = columns;
		conf.rows = rows;

		return nodeExcel.execute(conf);
	}
};

module.exports = excel;
