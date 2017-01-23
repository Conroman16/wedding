module.exports = (sequelize, DataTypes) => {

	return sequelize.define('ApplicationLog', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		level: DataTypes.STRING,
		message: DataTypes.STRING,
		meta: DataTypes.STRING
	}, {
		timestamps: true,
		indexes: [
			{ name: 'level', fields: [ 'level' ] }
		]
	});
};
