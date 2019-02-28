import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Attendance } from '../attendance/attendance.entity';
import { Person } from '../person/person.entity';

@Entity()
export class Building {

	@PrimaryGeneratedColumn( 'uuid' )
	id: string;

	@Column()
	name: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@OneToMany( () => Attendance, attendance => attendance.building )
	attendance: Attendance[];

	@ManyToMany( () => Person, person => person.buildings )
	@JoinTable( {
		name: 'attendance',
		joinColumn: {
			name: 'personId',
			referencedColumnName: 'id',
		},
		inverseJoinColumn: {
			name: 'buildingId',
			referencedColumnName: 'id',
		},
	} )
	persons: Person[];
}
