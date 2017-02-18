let nodeExcel = require('excel-export');

let excel = {

	// Columns should be an array of objects like [{ caption: 'col title', type: 'string' }]
	export: (columns, rows, sheetName) => {

		let conf = {
			name: sheetName || 'Sheet1',
			cols: columns,
			rows: rows
		};

		// If a styles file becomes necessary
		// conf.stylesXmlFile = 'styles.xml';

		return nodeExcel.execute(conf);
	}
};

module.exports = excel;
