module.exports = (sequelize, DataTypes) => {

	var Rsvp = sequelize.define('Rsvp', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null
		},
		email: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null
		},
		message: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null
		},
		isAttending: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		attendees: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	});

	return Rsvp;
};
