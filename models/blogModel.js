module.exports = function (sequelize, DataTypes) {
    var Blog = sequelize.define("blog_table", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING
        },
        author: {
            type: DataTypes.STRING
        },
        post: {
            type: DataTypes.STRING
        },
        comments: {
            type: DataTypes.STRING
        },
        photoURL: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false,
        freezeTableName: true // won't automatically capitalize table name
    });
    return Blog;
}