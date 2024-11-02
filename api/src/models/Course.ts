import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../db';

export class Course extends Model {
  public id!: string;
  public title!: string;
  public description!: string;
  public thumbnail!: string;
  public instructorId!: string;
  public price!: number;
  public duration!: string;
  public level!: 'beginner' | 'intermediate' | 'advanced';
}

Course.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    instructorId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level: {
      type: DataTypes.ENUM('beginner', 'intermediate', 'advanced'),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Course',
  }
);