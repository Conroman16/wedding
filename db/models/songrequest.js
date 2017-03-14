module.exports = (sequelize, DataTypes) => {

	return sequelize.define('SongRequest', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		artist: {
			type: DataTypes.STRING,
			allowNull: false
		},
		notes: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null
		}
	});
};
