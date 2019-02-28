import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Attendance } from '../attendance/attendance.entity';
import { Building } from '../building/building.entity';

@Entity()
export class Person {

	@PrimaryGeneratedColumn( 'uuid' )
	id: string;

	@Column()
	name: string;

	@Column( { default: true } )
	isActive: boolean;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@OneToMany( () => Attendance, attendance => attendance.person )
	attendance: Attendance[];

	@ManyToMany( () => Building, building => building.persons )
	@JoinTable( {
		name: 'attendance',
		joinColumn: {
			name: 'buildingId',
			referencedColumnName: 'id',
		},
		inverseJoinColumn: {
			name: 'personId',
			referencedColumnName: 'id',
		},
	} )
	buildings: Building[];
}
