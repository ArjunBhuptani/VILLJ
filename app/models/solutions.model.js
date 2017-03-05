'use strict'

var sequelize = require('../../config/sequelize');

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('solutions', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: "nextval(problems_id_seq::regClass)",
			primaryKey: true
		},
		name: {
			type: DataTypes.TEXT
		},
		details: {
			type: DataTypes.TEXT
		},
		votes: {
			type: DataTypes.INTEGER
		},
		image_url: {
			type: DataTypes.TEXT
		},
		user_name: {
			type: DataTypes.TEXT
		},
		wallet_address: {
			type: DataTypes.TEXT
		}
	})
}