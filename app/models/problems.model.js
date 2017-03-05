'use strict'

var sequelize = require('../../config/sequelize');

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('problems', {
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
		money_raised: {
			type: DataTypes.NUMERIC
		},
		image_url: {
			type: DataTypes.TEXT
		},
		timestamp: {
			type: DataTypes.TIMESTAMP
		},
		contributors: {
			type: DataTypes.INTEGER
		}
	})
}